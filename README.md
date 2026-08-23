# Nettli

**Language / Nyelv:** [English](#english) · [Magyar](#magyar)

**🔗 GitHub:** <!-- Illeszd be ide a projekt repójának linkjét, pl. https://github.com/felhasznalonev/nettli --> _(link hamarosan)_

---

## English

> An account-based **personal wealth manager** — your entire net worth in one place, with live prices. A no-build web app that runs on phone, tablet and desktop alike. Data is stored per account in the cloud (**Firebase**).

Nettli tracks the full portfolio of a signed-in user: investment gold, stocks, cryptocurrency, pledged (pawned) items, loans and subscriptions. It fetches prices live, calculates profit/loss (P&L) automatically, and stores everything in Cloud Firestore, tied to the account you register. There is no build step and no framework: plain HTML, CSS and JavaScript.

### Key features

The app is organised into tabs, one per asset type:

- **Overview (dashboard)** — net worth, invested-asset value, dividend rate, portfolio rate, unrealised P&L, total liabilities, asset allocation (custom-drawn donut chart), monthly spend, monthly cash flow, dividend-tax breakdown, and **upcoming important dates** (loan, pledge and subscription due dates) in one place.
- **Watchlist** — a watch list for tracked assets.
- **Gold** — investment-gold weight, cost basis, current value and per-item P&L; sell flow with automatic P&L; **live gold price** in HUF.
- **Pledge** — amount received, current debt and the sum repayable at maturity, with automatic maturity and interest calculation; can reference specific gold items.
- **Stocks** — invested and current value, open + realised P&L, annual dividend and a **trade log**; live stock prices with native-currency → HUF conversion.
- **Crypto** — trade-based bookkeeping with fees and realised/open P&L; **live crypto prices** (CoinGecko).
- **Loans** — outstanding balance, monthly/annual instalment, number of loans, with maturity calculation.
- **Subscriptions** — monthly/annual total cost, next charge date and **price-change history** per service.
- **Account** — profile, password change, tax-rate settings, module (tab) visibility, appearance (light/dark/auto) and language (HU/EN) as pill toggles, **data export/import** (JSON backup) and a danger zone.

### Language & currency

The whole interface is fully **bilingual (Hungarian / English)**, switchable on the Account page; the language is applied live by a dictionary-based DOM translation. Currency follows the language: **summaries/statements show HUF on the Hungarian side and EUR on the English side** (converted with the live EUR/HUF rate), while **individual items keep their own currency** (e.g. HUF-bought gold stays in HUF, a USD/EUR stock stays in its native currency).

### Appearance

The visual style is the fixed **"Soft" (Lágy)** theme (airy, terracotta). Light / dark / auto (by time of day: dark 19:00–06:00) is selectable on the Account page.

### Responsive & adaptive UI

The interface is optimised for phone, tablet and desktop, with the working rule that **nothing overflows the screen horizontally — wide content becomes scrollable instead**:

- **No page-level horizontal overflow** at any width. Wide elements (data tables) scroll inside their own container.
- **Fluid breakpoints:** grids reflow from 4 → 2 → 1 columns as space shrinks.
- **Floating tab bar** centred at the top, pinned while scrolling; on phones the nav collapses into a hamburger menu.
- **Forms & cards** reflow to fewer columns; long, unbreakable strings (e-mails, tickers) wrap.
- **Mobile inputs** render at 16 px to suppress iOS auto-zoom on focus.
- **Modals** are top-aligned and scrollable on small screens (dynamic `100dvh`).

### Live price sources

Prices are pulled from public APIs through a chain of key-less CORS proxies (with cache-busting):

| Asset | Source |
| --- | --- |
| Crypto | CoinGecko (`api.coingecko.com`) |
| Stocks | Yahoo Finance (`query1/2.finance.yahoo.com`) |
| FX (USD/HUF, EUR/HUF) | Frankfurter (ECB reference rates) |
| Gold | gold-api.com (XAU spot) |

Stock dividends are tracked automatically from Yahoo's dividend history (rolling 12-month amount and payout months), and FX rates are also resolved *per trade date* for accurate historical conversion.

### Architecture & data model

- **Storage is cloud-based** via `firebase-store.js`: a wrapper around Firebase Auth (email + password) and Cloud Firestore, exposing a per-user data "vault" (`vaults/<uid>`).
- **State** is a single in-memory object, loaded from Firestore on sign-in and persisted back via `save()`.
- Because data is tied to the account in the cloud, it **syncs across devices** for the same login. Use **Account → Export data** to make a JSON backup and **Import** to move it elsewhere.

### Tech stack

- **Vanilla HTML / CSS / JavaScript** — no build step, no framework, no runtime dependencies.
- **Firebase** (Auth + Cloud Firestore) for accounts and storage (via `firebase-store.js`).
- Custom **donut chart** (HTML canvas) and number/currency formatters — no external charting library.
- **Responsive, mobile-first CSS** with a fixed "Soft" theme and light/dark/auto appearance.
- **Dictionary-based i18n** (HU/EN) with live DOM translation.

### Project structure

```
Nettli/
├── index.html         # full UI (tabs, modals, sign-in)
├── script.js          # logic: state, price fetching, P&L, i18n, currency, theme
├── style.css          # design + responsive layout
├── firebase-store.js  # Firebase Auth + Cloud Firestore data layer (vaults/{uid})
├── firebase.json      # Hosting + Firestore deploy config
├── firestore.rules    # Firestore security rules
└── README.md
```

### Setup

There is **no build step**. Set up a Firebase project (fill in the config and deploy `firestore.rules`), then either:

1. **Open `index.html` directly** in a modern browser, or
2. **Host the files on any static host** (Firebase Hosting, GitHub Pages, Netlify, your own server) and open the site.

On first use, register an account (email + password). Live prices are fetched from public APIs; your data is stored in Firestore under your account.

### Browser requirements

A modern evergreen browser (recent Chrome, Edge, Firefox or Safari). The UI uses `backdrop-filter`, CSS custom properties and dynamic viewport units (`dvh`) with graceful fallbacks, and ES2020+ JavaScript.

### A note on your data

Data is stored in Cloud Firestore, tied to the account you register, so it syncs across your devices. Use **Account → Export data** any time to create a JSON backup.

---

## Magyar

> Fiók-alapú **személyi vagyonkezelő** — a teljes vagyonod egy helyen, élő árfolyamokkal. Build lépés nélküli webalkalmazás, amely telefonon, tableten és asztali gépen egyaránt működik. Az adatok fiókonként a felhőben (**Firebase**) tárolódnak.

Egy bejelentkezett felhasználó teljes portfólióját követi: befektetési arany, részvények, kriptovaluta, zálogtételek, hitelek és előfizetések. Az árfolyamokat élőben húzza le, automatikusan számol nyereséget/veszteséget (P&L), az adatok pedig a Cloud Firestore-ban tárolódnak, a regisztrált fiókodhoz kötve. Nincs build lépés és nincs keretrendszer: tiszta HTML, CSS és JavaScript.

### Főbb funkciók

Az alkalmazás füleken keresztül szervezi a vagyonelemeket:

- **Áttekintés (dashboard)** — nettó vagyon, befektetett eszközök értéke, osztalékráta, portfólióráta, nem realizált P&L, összes kötelezettség, vagyonmegoszlás (saját rajzolt donut diagram), havi kiadás, havi pénzáramlás, osztalék-adó bontás és a **közelgő fontos dátumok** (hitel-, zálog- és előfizetés-lejáratok) egy helyen.
- **Figyelő** — figyelőlista a követett eszközökhöz.
- **Arany** — befektetési arany tömeg, bekerülési ár, aktuális érték és P&L tételenként; eladási folyamat automatikus P&L-lel; **élő aranyárfolyam** (HUF).
- **Zálog** — kézhez kapott összeg, jelenlegi tartozás, lejáratkor visszafizetendő összeg, automatikus lejárat- és kamatszámítással; konkrét aranytételekhez köthető.
- **Részvény** — befektetett és aktuális érték, nyitott + realizált P&L, éves osztalék és **kereskedési napló**; élő részvényárfolyam, natív deviza → HUF átváltással.
- **Kripto** — trade-alapú nyilvántartás díjakkal, realizált/nyitott P&L-lel; **élő kriptoárak** (CoinGecko).
- **Hitel** — fennálló tartozás, havi/éves törlesztő, hitelek száma, lejárat-számítással.
- **Szolgáltatások** — előfizetések havi/éves összköltsége, következő terhelés dátuma és **árváltozás-történet** szolgáltatásonként.
- **Fiók** — profiladatok, jelszómódosítás, adókulcs-beállítások, modulok (fülek) láthatósága, megjelenés (világos/sötét/auto) és nyelv (HU/EN) pill-kapcsolókkal, **adatok exportja/importja** (JSON biztonsági mentés) és veszélyzóna.

### Nyelv és pénznem

A felület teljesen **kétnyelvű (magyar / angol)**, a Fiók oldalon váltható; a nyelvet szótáralapú DOM-fordítás alkalmazza élőben. A pénznem a nyelvet követi: **az összesítők/kimutatások magyar oldalon HUF-ban, angol oldalon EUR-ban** jelennek meg (élő EUR/HUF árfolyammal átváltva), míg **az egyedi tételek a saját devizanemükben** maradnak (pl. a forintban vett arany HUF, egy USD/EUR részvény a natív devizájában).

### Megjelenés

A vizuális stílus a fix **„Lágy"** téma (levegős, terrakotta). Világos / sötét / automatikus (napszak szerint: 19:00–06:00 sötét) a Fiók oldalon választható.

### Reszponzív, adaptív felület

A felület telefonra, tabletre és asztali gépre optimalizált, azzal az alapelvvel, hogy **semmi nem lóg ki vízszintesen — a széles tartalom inkább görgethető lesz**:

- **Nincs oldalszintű vízszintes túllógás** semmilyen szélességen. A széles elemek (adattáblák) a saját konténerükön belül görgethetők.
- **Rugalmas töréspontok:** a rácsok 4 → 2 → 1 oszlopra rendeződnek át, ahogy fogy a hely.
- **Lebegő fül-navigáció** középen a tetején, görgetéskor rögzülve; telefonon hamburger-menüvé csukódik.
- **Űrlapok és kártyák** kevesebb oszlopra rendeződnek; a hosszú, tördelhetetlen szövegek (e-mailek, tickerek) tördelnek.
- **Mobil beviteli mezők** 16 px betűmérettel, hogy iOS-en ne nagyítson be fókuszáláskor.
- **Modálok** kis képernyőn felülre igazítva és görgethetők (dinamikus `100dvh`).

### Élő árfolyamforrások

Az árakat nyilvános API-kból, kulcs nélküli CORS-proxyk láncán át kéri le (cache-megkerüléssel):

| Eszköz | Forrás |
| --- | --- |
| Kripto | CoinGecko (`api.coingecko.com`) |
| Részvény | Yahoo Finance (`query1/2.finance.yahoo.com`) |
| Deviza (USD/HUF, EUR/HUF) | Frankfurter (EKB referencia-árfolyamok) |
| Arany | gold-api.com (XAU spot) |

A részvényosztalékokat automatikusan a Yahoo osztaléktörténetéből követi (gördülő 12 havi összeg és fizetési hónapok), a devizaárfolyamokat pedig *az adott kereskedési naphoz* is feloldja a pontos történeti átváltáshoz.

### Architektúra és adatmodell

- **A tárolás felhőalapú** a `firebase-store.js` révén: a Firebase Autht (e-mail + jelszó) és a Cloud Firestore-t burkoló réteg, amely felhasználónkénti adat-„vaultot" (`vaults/<uid>`) biztosít.
- Az **állapot** egyetlen memóriabeli objektum, amely bejelentkezéskor a Firestore-ból töltődik be, és a `save()` hívással kerül vissza.
- Mivel az adat a fiókhoz kötve a felhőben van, **eszközök között szinkronizálódik** ugyanazzal a belépéssel. A **Fiók → Adatok exportja** funkcióval készíthetsz JSON mentést, az **Import**tal pedig átviheted máshova.

### Technológia

- **Vanilla HTML / CSS / JavaScript** — build lépés, keretrendszer és futásidejű függőség nélkül.
- **Firebase** (Auth + Cloud Firestore) a fiókokhoz és tároláshoz (a `firebase-store.js` révén).
- Egyedi **donut diagram** (HTML canvas) és szám-/pénznem-formázók — nincs külső chart-könyvtár.
- **Reszponzív, mobil-first CSS** fix „Lágy" témával és világos/sötét/auto megjelenéssel.
- **Szótáralapú i18n** (HU/EN) élő DOM-fordítással.

### Fájlszerkezet

```
Nettli/
├── index.html         # teljes felület (fülek, modálok, bejelentkezés)
├── script.js          # logika: állapot, árfolyam-lekérés, P&L, i18n, pénznem, téma
├── style.css          # dizájn + reszponzív elrendezés
├── firebase-store.js  # Firebase Auth + Cloud Firestore adatréteg (vaults/{uid})
├── firebase.json      # Hosting + Firestore deploy-konfiguráció
├── firestore.rules    # Firestore biztonsági szabályok
└── README.md
```

### Beüzemelés

**Nincs build lépés.** Állíts be egy Firebase-projektet (töltsd ki a konfigurációt és telepítsd a `firestore.rules`-t), majd vagy:

1. **Nyisd meg közvetlenül az `index.html`-t** egy modern böngészőben, vagy
2. **Töltsd fel a fájlokat tetszőleges statikus tárhelyre** (Firebase Hosting, GitHub Pages, Netlify, saját szerver) és nyisd meg az oldalt.

Első használatkor regisztrálj egy fiókot (e-mail + jelszó). Az élő árfolyamok nyilvános API-kból jönnek; az adataid a Firestore-ban, a fiókodhoz kötve tárolódnak.

### Böngésző-követelmények

Modern, folyamatosan frissülő böngésző (friss Chrome, Edge, Firefox vagy Safari). A felület `backdrop-filter`-t, CSS egyedi tulajdonságokat és dinamikus nézetegységeket (`dvh`) használ elegáns tartalékokkal, valamint ES2020+ JavaScriptet.

### Megjegyzés az adatokról

Az adatok a Cloud Firestore-ban tárolódnak, a regisztrált fiókodhoz kötve, így eszközeid között szinkronizálódnak. A **Fiók → Adatok exportja** funkcióval bármikor készíthetsz JSON biztonsági mentést.
