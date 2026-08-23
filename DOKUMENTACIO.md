# Nettli — Műszaki dokumentáció

Fiók-alapú, személyi vagyonkezelő webalkalmazás **élő árfolyamokkal**: befektetési arany, részvények, kripto, zálog, hitelek és előfizetések egyetlen áttekintő felületen, automatikus P&L-számítással. Adattárolás felhőben (Firebase). Nincs build lépés, nincs keretrendszer, nincs külső diagram-könyvtár.

> Ez a fájl a **fejlesztői/műszaki** dokumentáció. A felhasználói szintű bemutatás a [README.md](README.md)-ben van.

---

## 1. Technológiai stack

| Réteg | Megoldás |
| --- | --- |
| Nyelv | Vanilla HTML5 + CSS3 + ES2020+ JavaScript (nincs transpiler/bundler) |
| Auth | Firebase Authentication (e-mail + jelszó) |
| Adattár | Cloud Firestore, felhasználónkénti „vault" (`vaults/<uid>`) |
| Élő árfolyamok | CoinGecko (kripto), Yahoo Finance (részvény + osztalék), Frankfurter/EKB (deviza), gold-api.com (XAU arany) — kulcs nélküli, CORS-proxyk láncán át |
| Diagram | Saját rajzolású `<canvas>` gyűrűdiagram (vagyonmegoszlás) |
| Betűk | Google Fonts (a „Lágy"/„sunset" témához) |

A UI **kétnyelvű (HU/EN)**, a megjelenés **világos / sötét / auto**, mobil-first reszponzív, és a modulok (fülek) **elrejthetők**.

---

## 2. Fájlszerkezet és betöltési sorrend

```
02_Nettli/
├── index.html           # teljes DOM: fülek, modálok, bejelentkezés (login-modal)
├── style.css            # „Lágy"/„sunset" dizájn + reszponzív elrendezés + téma
├── firebase-store.js    # Firebase Auth + Firestore burkoló (LocalStore)
├── fit-text.js          # nagy számkijelzők automatikus zsugorítása
├── script.js            # az egész app logikája (~197 függvény): auth, state, árfolyamok, P&L, modulok, dashboard, i18n
├── firebase.json / firestore.rules / firestore.indexes.json
└── nettli-pelda-adatok.json   # példa state (importálható demó adat)
```

A Nettli logikája szinte teljesen a `script.js`-ben van; a `firebase-store.js` és a `fit-text.js` a szokásos segédréteg. A `script.js` tetején fut az `applyTheme()` (téma azonnali beállítása), és a `DOMContentLoaded` indítja a `LocalStore.start()`-ot.

---

## 3. Architektúra és életciklus

### 3.1 Indulás és auth

- A `firebase-store.js` `LocalStore`-ja ugyanaz a burkoló, mint a testvér-appokban: `onAuthChange`, `login/register/logout`, `loadVault`/`saveVault` a `vaults/<uid>` dokumentumra.
- `LocalStore.onAuthChange(user => …)` (a `script.js`-ben):
  - **user nélkül** → megjelenik a `#login-modal` (nincs teljes képernyős auth-kapu, hanem egy modal az app fölött);
  - **user esetén** → elrejti a modalt, kitölti a fiók-mezőket, majd `migrateLocalDataIfNeeded()` → `load()` → `normalizeState()` → `renderAll()` + `renderModuleSettings()` + `applyModuleVisibility()` + `applyTheme()` + `applyLang()` + `afterDataLoaded()`.
- Auth-műveletek: `loginWithEmail`, `registerWithEmail`, `resetPassword`, `logout`, `switchAccount`, `updatePassword` (reauth-tal), `authSlideTo` (belépés/regisztráció animált váltás), `hibaSzoveg(err)` a Firebase hibák magyarítása.

### 3.2 State és perzisztencia

- Egyetlen memóriabeli `state` objektum (lásd [4. Adatmodell](#4-adatmodell)).
- `load()` — beolvassa a vaultot (vagy `defaultState`), `normalizeState()`, majd renderel.
- `save()` — `LocalStore.saveVault(state)`; szinte minden módosítás után lefut. (A testvér-appokhoz hasonló „csak betöltés után menthet" logika véd a felhő felülírása ellen.)
- `migrateLocalDataIfNeeded()` — egyszeri migráció korábbi, böngésző-helyi adatokból a felhőbe.
- `exportData()` / `importData()` / `resetAllData()` — JSON mentés/visszatöltés/törlés.
- **`generateFinancialReport()`** — kiemelt, terjedelmes függvény: a teljes portfólióból önálló, kinyomtatható/menthető **pénzügyi jelentést** állít össze (összesítők, eszközbontás, P&L, kötelezettségek).

### 3.3 Élő árfolyamok

Ez a Nettli szíve. Az árakat nyilvános, kulcs nélküli API-kból kéri le, **CORS-proxyk láncán** át, fallmentesen:

- **`fetchJsonViaProxies(url, timeout)`** — végigpróbálja a `CORS_PROXIES` listát: az elsőnél, amelyik `ok` és értelmez, visszaadja a JSON-t; `AbortController`-rel timeoutol. Ez teszi lehetővé a böngészőből a harmadik felek API-jainak elérését.
- `fetchCryptoPricesHuf()` — CoinGecko; `fetchStockPriceHuf(ticker, currency)` — Yahoo `chart` API, kezeli a `GBp→GBP` (penny) esetet, és a natív devizát HUF-ra váltja (`rateForCurrency`); `fetchStockDividendInfo(ticker)` — osztaléktörténet (gördülő 12 havi összeg + fizetési hónapok); `fetchFxRates()` — Frankfurter/EKB (`fxRateIsSane` épség-ellenőrzéssel, `fxAgeHours` frissesség); `fetchGoldSpotHuf()` — XAU spot; `fetchUsdHuf()`.
- `fxRateForDate(cur, dateStr)` — **historikus** átváltás: egy adott tranzakció napi árfolyamán számol a pontos bekerülési értékért.
- `maybeRefreshPrices()` / `refreshAllPrices()` — összehangolt frissítés (státusszal: `setRefreshStatus`); `getLivePrice()` a cache-elt élő ár lekérdezése; `backfillCryptoNative()` régi kripto-tételek natív értékének pótlása.

### 3.4 Modulok láthatósága, téma, nyelv

- **Modulok.** `updateModules`, `applyModuleVisibility`, `renderModuleSettings` — a felhasználó ki-be kapcsolhat egész füleket (pl. ha nincs zálogja). Hasonlóan az „akciógombokhoz": `applyActionVisibility`, `renderActionSettings`, `updateActionButtons`.
- **Téma.** `applyThemeByTime()` a `currentAppearance()` (`state.ui.appearance`) alapján tesz `.dark` osztályt a `<html>`-re; `applyTheme()` a fix `data-theme="sunset"`-et is beállítja; `setAppearance(val)` váltja a módot. Auto módban 19:00–06:00 sötét.
- **i18n.** Futásidejű DOM-fordítás: `translateToEn`/`restoreHu`/`_i18nWalk` + `startI18nObserver` (a később renderelt tartalomra is), `applyLang`, `setUiLang`, `L(hu,en)`/`LOC(...)` a JS-ből generált szövegekhez.

---

## 4. Adatmodell (`state`)

| Kulcs | Tartalom |
| --- | --- |
| `gold`, `goldItems`, `goldSpot` | befektetési arany tételek és az élő XAU/HUF spot |
| `stocks` | részvény/ETF pozíciók (vételek, devizanem, osztalék-infó) |
| `crypto` | kripto trade-ek (díjakkal, realizált/nyitott P&L-hez) |
| `loans` | hitelek (felvett összeg, kamat, futamidő, törlesztő) |
| `paidInstallments` | kifizetett törlesztőrészletek jelölései |
| `pledges` | zálogtételek (kézhez kapott összeg, lejárat, kamat, aranyhoz kötve) |
| `services` | előfizetések (havi/éves díj, következő terhelés, árváltozás-történet) |
| `taxSettings` | adókulcsok (pl. osztalékadó) |
| `modules` | mely fülek láthatók |
| `usdHuf` | cache-elt USD/HUF (és további FX) |
| `ui` | `appearance` (light/dark/auto), `lang` (hu/en) |

---

## 5. Modulonkénti bontás és kulcsfüggvények

Minden eszközosztály ugyanazt a mintát követi: `open…Add` / `open…Edit` (modal előtöltés) → `add…`/`save…` (mentés + `save()` + `renderAll`) → `delete…` → `render…` (lista + összesítők) → `open…Detail`/`build…DetailHTML` (részletnézet).

### 5.1 Részvény (`portfolio`)
`openStockAdd/Edit`, `addStock`, `deleteStock`, `renderStocks`; eladás realizált P&L-lel: `openStockSell` → `updateStockSalePL` → `confirmStockSell`; `resolveTicker`/`updateStockLabels`. Osztalék: `stockDivYield`, `annualStockDividendHuf`, `dividendTaxBreakdown`, `netDividend`, `renderDividendCalendar` (fizetési hónapok naptára), `manualDivMonthMap`. Segédek: `stockInvestedUsd/Huf`, `stockIsCash`, `stockTypeShort`, `stockDivFreqLabel`.

### 5.2 Kripto (`crypto`)
`openCryptoAdd/Edit`, `addCryptoTrade`, `deleteCryptoTrade`, `renderCrypto`; eladás: `openSellModal` → `updateSellLabels` → `confirmSell`; `calcCryptoPL(...)` a realizált/nyitott eredmény; `resolveCryptoName`, részletnézet `openCryptoDetail`/`buildCryptoDetailHTML`.

### 5.3 Arany (`gold`)
`openGoldAdd/Edit`, `addGold`, `deleteGold`, `renderGold`; `goldItemValue`, `goldTotalValue`/`goldTotalCost`; eladás: `openGoldSell`→`updateGoldSalePL`→`confirmGoldSell`; élő ár: `fetchGoldSpotHuf`. Kapcsolat a zálogal: `pledgeForGold`/`pledgeTicketForGold` (egy aranytétel elzálogosított-e).

### 5.4 Zálog (`pledge`)
`openPledgeAdd/Edit`, `addPledge`, `deletePledge`, `renderPledges`; `calcPledgeEndDate`/`pledgeAddDays`, `calcPledgeDebt` (lejáratkor visszafizetendő, kamattal), `pledgeTotalDebt`; kiváltás: `openRedeemModal`→`confirmRedeem`; aranyhoz kötés: `populatePledgeGoldSelect`, `updatePledgeGoldSummary`, `pledgedGoldIds`.

### 5.5 Hitel (`loan`)
`openLoanAdd/Edit`, `saveLoan`, `deleteLoan`, `renderLoans`; `calcLoanEndDate`, `getPaymentDate`/`getFirstPaymentDate`, `calcRemaining` (fennálló tartozás), `loanInterestPaid`; törlesztés jelölése: `toggleInstallment`; részletnézet `openLoanDetail`/`buildLoanDetailHTML`.

### 5.6 Előfizetések (`services`)
`openServiceAdd/Edit`, `addService`, `deleteService`, `toggleService`, `renderServices`; `serviceMonthlyCost`, `servicesMonthlyTotal`, `nextChargeDate` (következő terhelés), árváltozás-történet + `openPriceModal`/`savePrice`.

### 5.7 Áttekintő dashboard (`dashboard`)
- **`renderDashboard()`** — a legösszetettebb nézet: nettó vagyon, befektetett érték, realizált/nem realizált P&L, osztalékráta, portfólióráta (tartozás/eszköz), összes kötelezettség, havi kiadás és pénzáramlás, eszközbontás-tábla, valamint a **közelgő fontos dátumok** (`buildUpcomingDatesHTML`, `daysUntil`) — hitel-, zálog- és előfizetés-lejáratok.
- **Gyűrűdiagram (vagyonmegoszlás).** `drawDonut`/`renderDonutCanvas` `<canvas>`-ra rajzol, `renderDonutLegend` a jelmagyarázat, `donutHover` az interaktív kiemelés; `dashTile`/`emptyTile` a stat-kártyák, `fmtCompact`/`_cssVar` segédek.
- `renderWatch()` — figyelőlista a követett eszközökhöz.

### 5.8 Pénznem és formázás
`fmtCur`, `eurRate`, `fmtAgg`/`fmtAggCompact` (**az összesítők a nyelvet követik**: HU→HUF, EN→EUR, élő árfolyammal átváltva), míg az **egyedi tételek a saját devizanemükben** maradnak (`nativeToUsd`, `rateForCurrency`, `fmtUsd`). Bevitel: `parseAmount`, `formatThousands`, dátum: `toLocalDateStr`.

### 5.9 Közös UI-elemek
`showTab`, `openModal`/`closeModal`, `toggleNav`/`navOutsideClick`/`closeNav`, `syncModalScrollLock` (mobil görgetés-zár), `uiDialog`/`uiConfirm`/`uiAlert` (Promise-alapú modálok), `escHtml`, `renderHeaderDate`, `renderAll` (a modul-renderelők gyűjtője).

---

## 6. Élő árfolyam-források (összefoglaló)

| Eszköz | Forrás |
| --- | --- |
| Kripto | CoinGecko (`api.coingecko.com`) |
| Részvény + osztalék | Yahoo Finance (`query1/2.finance.yahoo.com`) |
| Deviza (USD/HUF, EUR/HUF) | Frankfurter (EKB referencia) |
| Arany | gold-api.com (XAU spot) |

Minden hívás a `fetchJsonViaProxies` láncon megy, cache-megkerüléssel (`_=Date.now()`), timeouttal és néma fallbackkel — ha egy forrás/proxy nem elérhető, a rendszer a következőt próbálja, és soha nem dob a UI-ba.

---

## 7. Reszponzivitás

Mobil-first, azzal az alapelvvel, hogy **semmi nem lóg ki vízszintesen** — a széles tartalom a saját konténerén belül görgethető. A rácsok 4→2→1 oszlopra rendeződnek; a felső fül-navigáció görgetéskor rögzül, telefonon hamburgerré csukódik; a mobil beviteli mezők 16 px betűvel (iOS-en ne nagyítson); a modálok kis képernyőn felülre igazítva, `100dvh`-val görgethetők.

---

## 8. Beüzemelés

1. Firebase-projekt + konfiguráció (`firestore.rules` telepítés).
2. A fájlok feltöltése statikus tárhelyre (Firebase Hosting / GitHub Pages / Netlify / saját szerver).
3. Regisztráció; az élő árfolyamok automatikusan frissülnek, az adat a `vaults/<uid>`-ba kerül.

Nincs build lépés; fejlesztéshez elég egy statikus fájlkiszolgáló. (Az élő árfolyamokhoz internet szükséges; internet nélkül a legutóbbi cache-elt értékekkel számol.)
