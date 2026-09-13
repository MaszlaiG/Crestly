# Crestly

**Language / Nyelv:** [English](#english) · [Magyar](#magyar)

**📄 Design doc / Tervdokumentáció:** [`dokumentumok/`](dokumentumok/) (PDF, HU + EN)

---

## English

**Crestly** is an account-based **personal-finance & net-worth tracker** — stocks, crypto, gold, loans, pledges, income/expenses and a watchlist, summed up on one overview dashboard. Data is stored per account in **Firebase** (Auth + Firestore via REST, `vaults/<uid>`). No build step, no framework: plain HTML/CSS/JS. Hungarian UI, light/dark "Studio" design with a warm gold accent.

**Structure:** `index.html` · `css/style.css` · `js/` (firebase-store, script, fit-text) · `firebase/` (config + rules) · `dokumentumok/`. Full details: the **design document PDF** in `dokumentumok/`.

**Deploy:** enable Firebase Auth, fill the config in `index.html`, publish to any static host (GitHub Pages).

---

## Magyar

A **Crestly** fiók-alapú **személyes pénzügy- és vagyonkövető** — részvény, kripto, arany, hitelek, zálog, bevétel/kiadás és figyelőlista, egy áttekintő irányítópulton összegezve. Az adat fiókonként a **Firebase**-ben (Auth + Firestore REST, `vaults/<uid>`). Nincs build lépés, nincs keretrendszer: tiszta HTML/CSS/JS. Magyar felület, világos/sötét „Stúdió" dizájn meleg arany akcentussal.

**Szerkezet:** `index.html` · `css/style.css` · `js/` (firebase-store, script, fit-text) · `firebase/` (konfig + szabályok) · `dokumentumok/`. Részletek: a **tervdokumentáció PDF** a `dokumentumok/` mappában.

**Közzététel:** kapcsold be a Firebase Autht, töltsd ki a konfigurációt az `index.html`-ben, publikáld bármely statikus tárhelyre (GitHub Pages).
