(function () {
  var auth = firebase.auth();

  // Firestore elérése a REST API-n keresztül (nem a valós idejű SDK-channel-en).
  // A Safari blokkolja a Firestore streaming/long-polling channel kéréseit
  // ("access control checks"), a sima REST viszont mindenhol működik.
  var PROJECT_ID = (firebase.app().options && firebase.app().options.projectId) || '';
  var FS_BASE =
    'https://firestore.googleapis.com/v1/projects/' +
    PROJECT_ID +
    '/databases/(default)/documents';

  // JS érték -> Firestore tipizált érték
  function fsEncode(v) {
    if (v === null || v === undefined) return { nullValue: null };
    if (typeof v === 'boolean') return { booleanValue: v };
    if (typeof v === 'number') {
      if (!isFinite(v)) return { nullValue: null };
      return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
    }
    if (typeof v === 'string') return { stringValue: v };
    if (Array.isArray(v)) return { arrayValue: { values: v.map(fsEncode) } };
    if (typeof v === 'object') {
      var fields = {};
      Object.keys(v).forEach(function (k) {
        if (v[k] !== undefined) fields[k] = fsEncode(v[k]);
      });
      return { mapValue: { fields: fields } };
    }
    return { nullValue: null };
  }

  // Firestore tipizált érték -> JS érték
  function fsDecode(val) {
    if (!val || typeof val !== 'object') return null;
    if ('nullValue' in val) return null;
    if ('booleanValue' in val) return val.booleanValue;
    if ('integerValue' in val) return Number(val.integerValue);
    if ('doubleValue' in val) return val.doubleValue;
    if ('stringValue' in val) return val.stringValue;
    if ('timestampValue' in val) return val.timestampValue;
    if ('arrayValue' in val) return (val.arrayValue.values || []).map(fsDecode);
    if ('mapValue' in val) {
      var o = {};
      var f = (val.mapValue && val.mapValue.fields) || {};
      Object.keys(f).forEach(function (k) {
        o[k] = fsDecode(f[k]);
      });
      return o;
    }
    return null;
  }

  // Van-e érdemi adat az állapotban? (pajzs az üres felülíráshoz)
  function vaultIsEmpty(s) {
    if (!s || typeof s !== 'object') return true;
    var arr = function (k) {
      return Array.isArray(s[k]) && s[k].length > 0;
    };
    if (
      arr('stocks') ||
      arr('crypto') ||
      arr('goldItems') ||
      arr('loans') ||
      arr('pledges') ||
      arr('services') ||
      arr('salaryAdjustments')
    )
      return false;
    if (s.expenseReport && Array.isArray(s.expenseReport.txns) && s.expenseReport.txns.length > 0)
      return false;
    if (s.salary && Number(s.salary.gross) > 0) return false;
    return true;
  }

  function fieldsToObj(fields) {
    var o = {};
    Object.keys(fields || {}).forEach(function (k) {
      o[k] = fsDecode(fields[k]);
    });
    return o;
  }
  function objToFields(obj) {
    var fields = {};
    Object.keys(obj || {}).forEach(function (k) {
      if (obj[k] !== undefined) fields[k] = fsEncode(obj[k]);
    });
    return fields;
  }

  function userObj(u) {
    return u
      ? {
          email: u.email,
          name: u.displayName || ''
        }
      : null;
  }

  var LocalStore = {
    init: function () {
      return this;
    },
    start: function () {},
    get currentUser() {
      return userObj(auth.currentUser);
    },
    onAuthChange: function (cb) {
      if (typeof cb !== 'function') return;
      auth.onAuthStateChanged(function (u) {
        try {
          cb(userObj(u));
        } catch (e) {
          console.error('[Crestly] auth listener hiba:', e);
        }
      });
    },
    login: function (email, pass) {
      return auth.signInWithEmailAndPassword((email || '').trim(), pass);
    },
    register: function (email, pass, name) {
      return auth.createUserWithEmailAndPassword((email || '').trim(), pass).then(function (cred) {
        if (name)
          return cred.user.updateProfile({
            displayName: name
          });
      });
    },
    logout: function () {
      return auth.signOut();
    },
    resetPassword: function (email) {
      return auth.sendPasswordResetEmail((email || '').trim());
    },
    reauth: function (currentPass) {
      var u = auth.currentUser;
      if (!u)
        return Promise.reject({
          code: 'no-user'
        });
      var cred = firebase.auth.EmailAuthProvider.credential(u.email, currentPass);
      return u.reauthenticateWithCredential(cred);
    },
    updatePassword: function (newPass) {
      var u = auth.currentUser;
      if (!u)
        return Promise.reject({
          code: 'no-user'
        });
      return u.updatePassword(newPass);
    },
    updateProfileName: function (name) {
      var u = auth.currentUser;
      if (!u) return Promise.resolve();
      return u.updateProfile({
        displayName: name || ''
      });
    },
    updateEmail: function (newEmail) {
      var u = auth.currentUser;
      if (!u)
        return Promise.reject({
          code: 'no-user'
        });
      return u.updateEmail((newEmail || '').trim());
    },
    uid: function () {
      return auth.currentUser ? auth.currentUser.uid : '';
    },

    loadVault: function () {
      var u = auth.currentUser;
      if (!u) return Promise.resolve(null);
      return u.getIdToken().then(function (token) {
        return fetch(FS_BASE + '/vaults/' + u.uid, {
          headers: { Authorization: 'Bearer ' + token }
        }).then(function (r) {
          if (r.status === 404) return null; // még nincs dokumentum (új fiók)
          if (!r.ok) throw new Error('Firestore betöltés HTTP ' + r.status);
          return r.json().then(function (doc) {
            return doc && doc.fields ? fieldsToObj(doc.fields) : {};
          });
        });
      });
    },

    saveVault: function (obj, opts) {
      var u = auth.currentUser;
      if (!u) return Promise.resolve();
      var clean;
      try {
        clean = JSON.parse(JSON.stringify(obj));
      } catch (e) {
        clean = obj;
      }
      var allowEmpty = opts && opts.allowEmpty;

      function writeDoc(token) {
        return fetch(FS_BASE + '/vaults/' + u.uid, {
          method: 'PATCH',
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ fields: objToFields(clean) })
        }).then(function (r) {
          if (!r.ok)
            return r.text().then(function (t) {
              throw new Error('Firestore mentés HTTP ' + r.status + ' ' + t);
            });
        });
      }

      return u
        .getIdToken()
        .then(function (token) {
          // PAJZS: ha üres állapotot mentenénk (nincs érdemi adat), előbb
          // megnézzük a felhőt — ha ott VAN adat, NEM írjuk felül üressel.
          if (!allowEmpty && vaultIsEmpty(clean)) {
            return fetch(FS_BASE + '/vaults/' + u.uid, {
              headers: { Authorization: 'Bearer ' + token }
            })
              .then(function (r) {
                return r.ok ? r.json() : null;
              })
              .then(function (doc) {
                var current = doc && doc.fields ? fieldsToObj(doc.fields) : null;
                if (current && !vaultIsEmpty(current)) {
                  console.warn(
                    '[Crestly] PAJZS: üres állapot mentése kihagyva — a felhőben van adat, nem írjuk felül.'
                  );
                  return; // NE írjuk felül
                }
                return writeDoc(token); // új/üres fiók — biztonságos írni
              });
          }
          return writeDoc(token);
        })
        .catch(function (e) {
          console.error('[Crestly] mentés hiba:', e);
        });
    },

    clearVault: function () {
      var u = auth.currentUser;
      if (!u) return Promise.resolve();
      return u
        .getIdToken()
        .then(function (token) {
          return fetch(FS_BASE + '/vaults/' + u.uid, {
            method: 'DELETE',
            headers: { Authorization: 'Bearer ' + token }
          });
        })
        .catch(function () {});
    }
  };
  window.LocalStore = LocalStore;
})();
