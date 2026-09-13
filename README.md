# Crestly

**Language / Nyelv:** [English](#english) · [Magyar](#magyar)

**📄 Design doc / Tervdokumentáció:** [`dokumentumok/`](dokumentumok/) (PDF, HU + EN)

---

## English

**Crestly** is an account-based **personal-finance & net-worth tracker** — stocks, crypto, gold, loans, pledges, subscriptions and income/expenses, plus a watchlist, all summed up on one overview dashboard. Data is stored per account in **Firebase** (Auth + Firestore via REST, `vaults/<uid>`). No build step, no framework: plain HTML/CSS/JS. Hungarian UI, light/dark/auto "Studio" design with a green primary and gold accent.

**Highlights**
- **Net-worth dashboard** — total assets vs. liabilities, allocation donut, asset breakdown, monthly cash-flow and upcoming expenses at a glance.
- **Assets with live prices** — stocks (with dividend tracking and a payout calendar), crypto and physical gold; quotes are fetched live and converted to HUF.
- **Liabilities & pledges** — loans with a full **amortization schedule** and per-installment "paid" tracking; a gold **pledge** (zálog) register with ticket numbers.
- **Recurring items** — salary, subscriptions/services and loan repayments roll over every month; a running income/expense log feeds the overview.
- **Modular** — switch off the asset types you don't use in the settings and their tab disappears from the menu.
- **PDF export** — the full financial statement as a printable **PDF** (html2canvas + jsPDF).

**Tech:** vanilla HTML/CSS/JS · Firebase (Auth + Firestore via REST) · html2canvas + jsPDF · custom canvas charts · live market-price lookups.

**Structure:** `index.html` · `css/style.css` · `js/` (`script.js`, `firebase-store.js`, `fit-text.js`) · `firebase/` (`firebase.json`, `firestore.rules`, `firestore.indexes.json`) · `dokumentumok/` (design doc PDF, HU + EN).

**Deploy:** enable Firebase Auth, fill the config in `index.html`, publish to any static host (e.g. GitHub Pages). Full details: the **design document PDF** in `dokumentumok/`.

---

## Magyar

A **Crestly** fiók-alapú **személyes pénzügy- és vagyonkövető** — részvény, kripto, arany, hitelek, zálog, előfizetések és bevétel/kiadás, plusz egy figyelőlista, egyetlen áttekintő irányítópulton összegezve. Az adat fiókonként a **Firebase**-ben tárolódik (Auth + Firestore REST, `vaults/<uid>`). Nincs build lépés, nincs keretrendszer: tiszta HTML/CSS/JS. Magyar felület, világos/sötét/auto „Stúdió" dizájn zöld alapszínnel és arany akcentussal.

**Kiemelt funkciók**
- **Vagyon-irányítópult** — teljes vagyon a kötelezettségekkel szemben, vagyonmegoszlás-diagram, eszközbontás, havi pénzáramlás és közelgő kiadások egy pillantásra.
- **Eszközök élő árfolyammal** — részvények (osztalékkövetéssel és kifizetési naptárral), kripto és fizikai arany; az árfolyamok élőben lekérve és forintra váltva.
- **Kötelezettségek és zálog** — hitelek teljes **törlesztési ütemtervvel** és részletenkénti „kifizetve" követéssel; arany **zálog** nyilvántartás zálogjegy-számokkal.
- **Ismétlődő tételek** — a fizetés, az előfizetések/szolgáltatások és a hiteltörlesztők minden hónapban ismétlődnek; a folyamatos bevétel/kiadás napló táplálja az áttekintőt.
- **Moduláris** — a beállításokban kikapcsolhatod a nem használt eszköztípusokat, és a hozzájuk tartozó fül eltűnik a menüből.
- **PDF-export** — a teljes pénzügyi kimutatás nyomtatható **PDF**-ként (html2canvas + jsPDF).

**Technológia:** vanilla HTML/CSS/JS · Firebase (Auth + Firestore REST-en) · html2canvas + jsPDF · egyedi canvas diagramok · élő piaci árfolyam-lekérés.

**Szerkezet:** `index.html` · `css/style.css` · `js/` (`script.js`, `firebase-store.js`, `fit-text.js`) · `firebase/` (`firebase.json`, `firestore.rules`, `firestore.indexes.json`) · `dokumentumok/` (tervdokumentáció PDF, HU + EN).

**Közzététel:** kapcsold be a Firebase Autht, töltsd ki a konfigurációt az `index.html`-ben, publikáld bármely statikus tárhelyre (pl. GitHub Pages). Teljes leírás: a **tervdokumentáció PDF** a `dokumentumok/` mappában.
