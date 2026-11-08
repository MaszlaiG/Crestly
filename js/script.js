const THEMES = [
  {
    key: 'sunset',
    label: 'Lágy'
  }
];
function currentAppearance() {
  try {
    return (state && state.ui && state.ui.appearance) || 'auto';
  } catch (e) {
    return 'auto';
  }
}
function applyThemeByTime() {
  const mode = currentAppearance();
  let isDark;
  if (mode === 'light') isDark = false;
  else if (mode === 'dark') isDark = true;
  else {
    const h = new Date().getHours();
    isDark = h >= 19 || h < 6;
  }
  document.documentElement.classList.toggle('dark', isDark);
}
function applyTheme() {
  document.documentElement.setAttribute('data-theme', 'sunset');
  applyThemeByTime();
}
applyTheme();
setInterval(applyThemeByTime, 5 * 60 * 1000);
const I18N_HU_EN = {
  Áttekintés: 'Overview',
  Figyelő: 'Watchlist',
  Arany: 'Gold',
  Részvény: 'Stocks',
  Kripto: 'Crypto',
  Zálog: 'Pledge',
  Hitel: 'Loans',
  Szolgáltatások: 'Subscriptions',
  Fiók: 'Account',
  'Pénzügyi Áttekintés': 'Financial Overview',
  'Minden eszköz és kötelezettség egy helyen': 'All assets and liabilities in one place',
  'Teljes Vagyon': 'Net Worth',
  'Befektetett Eszközök Értéke': 'Invested Assets Value',
  'Osztalék Ráta': 'Dividend Rate',
  'Portfólió Ráta': 'Portfolio Rate',
  'Tartozás / eszköz': 'Debt / asset',
  'Nem Realizált P&L': 'Unrealised P&L',
  'Nem realizált P&L': 'Unrealised P&L',
  'Nem realizált eredmény': 'Unrealised result',
  'Összes Kötelezettség': 'Total Liabilities',
  'Közelgő Kiadások': 'Upcoming Expenses',
  'Nincs közelgő kiadás a következő napokban': 'No upcoming expenses in the coming days',
  'Havi törlesztő': 'Monthly instalment',
  Vagyonmegoszlás: 'Asset Allocation',
  'Nincs adat': 'No data',
  Eszközbontás: 'Asset Breakdown',
  Eszköz: 'Asset',
  Befektetett: 'Invested',
  'Jelenlegi érték': 'Current value',
  Arány: 'Share',
  Összesen: 'Total',
  'Havi Pénzáramlás': 'Monthly Cash Flow',
  'Bevétel — osztalék / hó': 'Income — dividend / mo',
  'Hiteltörlesztő / hó': 'Loan instalment / mo',
  'Szolgáltatások / hó': 'Subscriptions / mo',
  'Nettó havi egyenleg': 'Net monthly balance',
  'Kiadás-arány riasztás': 'Spend-ratio Alert',
  'Állítsd be, hogy a nettó fizetésedhez (alkalmazotti bevétel) viszonyítva mekkora szolgáltatás- és hitelarány számítson még biztonságosnak (zöld), figyelmeztetőnek (sárga) vagy kockázatosnak (piros) a Havi Pénzáramlásnál.':
    'Set how much of a subscription and loan ratio, relative to your net salary (employee income), counts as safe (green), a warning (yellow) or risky (red) in Monthly Cash Flow.',
  'Szolgáltatás — sárga küszöb (%)': 'Subscriptions — yellow threshold (%)',
  'Szolgáltatás — piros küszöb (%)': 'Subscriptions — red threshold (%)',
  'Hitel — sárga küszöb (%)': 'Loans — yellow threshold (%)',
  'Hitel — piros küszöb (%)': 'Loans — red threshold (%)',
  'Küszöbök mentése': 'Save thresholds',
  'Osztalék Naptár': 'Dividend Calendar',
  'Még nincs ismert osztalék-ütemezés. Frissíts (élő árfolyam), hogy a rendszer lehúzza az osztalékfizető részvények fizetési hónapjait.':
    'No known dividend schedule yet. Refresh (live prices) so the system pulls the payout months of dividend-paying stocks.',
  'Legnagyobb Pozíciók': 'Largest Positions',
  'Még nincs pozíció': 'No positions yet',
  'Osztalék adózása (becsült)': 'Dividend taxation (estimated)',
  'Nincs becsült osztalék (nincs osztalékfizető részvény).':
    'No estimated dividend (no dividend-paying stock).',
  'Fizetés adózása (becsült)': 'Salary taxation (estimated)',
  'Nincs rögzített alkalmazotti fizetés.': 'No employee salary recorded.',
  'Befektetett eszközök értéke': 'Invested assets value',
  'Havi fix kiadás (törlesztő + előfizetés)': 'Monthly fixed cost (instalment + subscriptions)',
  'Havi osztalék – nettó (becsült)': 'Monthly dividend – net (estimated)',
  'Éves osztalék – bruttó (becsült)': 'Annual dividend – gross (estimated)',
  'Éves osztalék – nettó (becsült)': 'Annual dividend – net (estimated)',
  'Összes tartozás (hitel + zálog)': 'Total debt (loans + pledges)',
  'Nyitott pozíció (bekerülési)': 'Open position (cost basis)',
  'Bekerülési (befektetett) költség': 'Cost basis (invested)',
  'Zálog (−)': 'Pledge (−)',
  'Interaktív Figyelő': 'Interactive Watchlist',
  'Élő követés: kripto, részvények és befektetési arany':
    'Live tracking: crypto, stocks and investment gold',
  'Élő árfolyam frissítés': 'Live price refresh',
  'Nincs kripto': 'No crypto',
  Részvények: 'Stocks',
  'Nincs részvény': 'No stocks',
  'Befektetési arany': 'Investment gold',
  'Nincs szabad (nem zálogba adott) aranytétel': 'No free (non-pledged) gold item',
  'Zálogban lévő arany': 'Pledged gold',
  'Nincs zálogban lévő aranytétel': 'No pledged gold item',
  '● élő': '● live',
  Várható: 'Expected',
  'Árfolyam még nem érhető el (API) — az átváltott értékek hiányozhatnak.':
    'Rate not available yet (API) — converted values may be missing.',
  Részvényportfólió: 'Stock portfolio',
  '+ Részvény rögzítése': '+ Record stock',
  'Éves osztalék': 'Annual dividend',
  Portfólió: 'Portfolio',
  Típus: 'Type',
  Db: 'Qty',
  'Átlag vételár': 'Avg. buy price',
  'Jelenlegi ár': 'Current price',
  'Éves Osztalék': 'Annual Dividend',
  Osztalék: 'Dividend',
  '← Vissza a részvényekhez': '← Back to stocks',
  Eladás: 'Sell',
  'Részvény eladása': 'Sell stock',
  'Eladott darabszám': 'Quantity sold',
  'Eladási ár / db': 'Sale price / unit',
  'Eladás dátuma': 'Sale date',
  'Eladás rögzítése': 'Record sale',
  'Téves tétel törlése': 'Delete erroneous item',
  'Részvény hozzáadása': 'Add stock',
  Deviza: 'Currency',
  Darabszám: 'Quantity',
  'Vételi ár (Ft)': 'Buy price (HUF)',
  'Vétel dátuma': 'Buy date',
  'A jelenlegi árat és az osztalékot a rendszer a ticker alapján automatikusan követi a Yahoo-ról.':
    'The current price and dividend are tracked automatically from Yahoo by ticker.',
  '+ Hozzáadás': '+ Add',
  'Részvény szerkesztése': 'Edit stock',
  'Nem fizet osztalékot': 'Pays no dividend',
  'Osztalék automatikusan követve (Yahoo)': 'Dividend tracked automatically (Yahoo)',
  'A Részvény modul ki van kapcsolva.': 'The Stocks module is turned off.',
  'Nincs nyitott vétel': 'No open buys',
  'Kriptovaluta Kereskedés': 'Cryptocurrency Trading',
  '+ Vétel rögzítése': '+ Record buy',
  'Bekerülési érték (nyitott)': 'Cost basis (open)',
  'Aktuális eladási érték': 'Current sale value',
  Hozam: 'Return',
  'a nyitott pozíción': 'on the open position',
  'Kripto Megoszlás': 'Crypto Allocation',
  'Nincs nyitott pozíció': 'No open position',
  Statisztika: 'Statistics',
  Coin: 'Coin',
  'Nincs kriptó pozíció': 'No crypto position',
  '← Vissza a kriptókhoz': '← Back to crypto',
  'Vétel rögzítése': 'Record buy',
  Mennyiség: 'Quantity',
  'Ár (Ft)': 'Price (HUF)',
  Dátum: 'Date',
  'Díj (Ft)': 'Fee (HUF)',
  'A teljes nevet és az élő árfolyamot a rendszer a coin szimbóluma alapján automatikusan lekéri (CoinGecko).':
    'The full name and live price are fetched automatically by coin symbol (CoinGecko).',
  'Vétel szerkesztése': 'Edit buy',
  'Kripto eladása': 'Sell crypto',
  'Mennyiség (db)': 'Quantity (units)',
  'Eladási ár / db (Ft)': 'Sale price / unit (HUF)',
  'Összes mennyiség': 'Total quantity',
  'Fizikai Arany': 'Physical Gold',
  '+ Aranytétel rögzítése': '+ Record gold item',
  'Összes tömeg': 'Total weight',
  'Összes vételár': 'Total purchase price',
  Aranytételek: 'Gold items',
  Megnevezés: 'Description',
  Kód: 'Code',
  Forma: 'Form',
  Tisztaság: 'Purity',
  Tömeg: 'Weight',
  Vételár: 'Purchase price',
  'Nincs eladható aranytétel': 'No sellable gold item',
  'Zálogosított Aranytételek': 'Pledged Gold Items',
  Zálogjegy: 'Pawn ticket',
  'Nincs zálogosított aranytétel': 'No pledged gold item',
  'Aranytétel eladása': 'Sell gold item',
  'Eladási ár összesen (Ft)': 'Total sale price (HUF)',
  'Aranytétel hozzáadása': 'Add gold item',
  'Megnevezés / típus': 'Description / type',
  'Kód / sorszám': 'Code / serial',
  Érme: 'Coin',
  'Rúd / tömb': 'Bar / block',
  Ékszer: 'Jewellery',
  Egyéb: 'Other',
  'Tömeg (gramm)': 'Weight (grams)',
  'Vételár összesen (Ft)': 'Total purchase price (HUF)',
  'Aranytétel szerkesztése': 'Edit gold item',
  'Minden aranytétel zálogban van': 'All gold items are pledged',
  'Korábbi arany': 'Previous gold',
  Össztömeg: 'Total weight',
  'Nincs rögzített aranytétel': 'No recorded gold item',
  'Válassz aranytételt…': 'Choose a gold item…',
  'Zálog (arany fedezetű kölcsön)': 'Pledge (gold-backed loan)',
  '+ Zálogba adás': '+ New pledge',
  'Kézhez kapott': 'Amount received',
  'Jelenlegi tartozás': 'Current debt',
  'Visszafizetendő lejáratkor': 'Repayable at maturity',
  'Zálog díja': 'Pledge fee',
  'Nincs zálogba adott tétel': 'No pledged item',
  '← Vissza a zálogokhoz': '← Back to pledges',
  'Zálogba adás': 'New pledge',
  'Aranytétel(ek) — fedezet (több is választható)': 'Gold item(s) — collateral (multiple allowed)',
  'Zálogjegy sorszáma': 'Pawn ticket number',
  'Kezelési költség (%)': 'Handling fee (%)',
  'Kölcsön összeg (Ft)': 'Loan amount (HUF)',
  'Zálogba adás dátuma': 'Pledge date',
  'Kamat (% / év)': 'Interest (% / year)',
  Futamidő: 'Term',
  '30 nap': '30 days',
  '60 nap': '60 days',
  '90 nap': '90 days',
  'THM (%)': 'APR (%)',
  'Lejárat dátuma': 'Maturity date',
  'Zálog kiváltása': 'Redeem pledge',
  'Kiváltás dátuma': 'Redemption date',
  'Kiváltási összeg (Ft)': 'Redemption amount (HUF)',
  'Kiváltás rögzítése': 'Record redemption',
  'Zálog szerkesztése': 'Edit pledge',
  'Kölcsön díja': 'Loan fee',
  'Kiváltási összeg': 'Redemption amount',
  'Hitel Nyilvántartás': 'Loan Register',
  '+ Hitel rögzítése': '+ Record loan',
  'Összes fennálló': 'Total outstanding',
  'Havi törlesztés': 'Monthly repayment',
  'Éves törlesztés': 'Annual repayment',
  'Hitelek díja': 'Loan fees',
  'Nincs rögzített hitel': 'No recorded loan',
  '← Vissza a hitelekhez': '← Back to loans',
  'Hitel hozzáadása': 'Add loan',
  'Hitel neve': 'Loan name',
  'Felvett összeg (Ft)': 'Amount borrowed (HUF)',
  'Folyósítás dátuma': 'Disbursement date',
  'Futamidő (hónap)': 'Term (months)',
  'Törlesztés napja (havonta)': 'Repayment day (monthly)',
  'Első törlesztő dátuma (opcionális)': 'First instalment date (optional)',
  'Törlesztés rendszeressége': 'Repayment frequency',
  Havi: 'Monthly',
  Negyedéves: 'Quarterly',
  Éves: 'Annual',
  'THM (% / év)': 'APR (% / year)',
  'Havi törlesztő (Ft)': 'Monthly instalment (HUF)',
  'Hitel szerkesztése': 'Edit loan',
  'Nincs rögzített tétel.': 'No recorded items.',
  'Rendszeres Szolgáltatások': 'Recurring Subscriptions',
  '+ Szolgáltatás rögzítése': '+ Record subscription',
  'Havi összköltség': 'Monthly total cost',
  'Éves összköltség': 'Annual total cost',
  'Aktív előfizetések': 'Active subscriptions',
  'Következő terhelés': 'Next charge',
  Előfizetések: 'Subscriptions',
  Szolgáltatás: 'Service',
  Díj: 'Fee',
  Ciklus: 'Cycle',
  'Terhelés napja': 'Charge day',
  'Havi vetített': 'Monthly projected',
  Státusz: 'Status',
  'Nincs rögzített szolgáltatás': 'No recorded subscription',
  'Szolgáltatás rögzítése': 'Record subscription',
  'Szolgáltatás neve': 'Service name',
  'Kategóriák (több is kiválasztható)': 'Categories (multiple allowed)',
  Víz: 'Water',
  Villany: 'Electricity',
  Gáz: 'Gas',
  Csatorna: 'Sewage',
  Telefon: 'Phone',
  Internet: 'Internet',
  Zene: 'Music',
  Streaming: 'Streaming',
  Biztosítás: 'Insurance',
  'Szoftver/Felhő': 'Software/Cloud',
  'Hosting/Domain': 'Hosting/Domain',
  'Edzés/Sport': 'Fitness/Sport',
  'Számlázási ciklus': 'Billing cycle',
  Heti: 'Weekly',
  'Terhelés napja (hónapban)': 'Charge day (of month)',
  'Ár módosítása': 'Change price',
  'Új díj (Ft)': 'New fee (HUF)',
  'Szolgáltatás szerkesztése': 'Edit subscription',
  'Profiladatok, biztonság, adózás és adatkezelés': 'Profile, security, taxation and data',
  Profiladatok: 'Profile',
  'Megjelenített név': 'Display name',
  'E-mail cím': 'Email address',
  'Adatok mentése': 'Save data',
  'Jelszó módosítása': 'Change password',
  'Jelenlegi jelszó': 'Current password',
  'Új jelszó': 'New password',
  'Új jelszó megerősítése': 'Confirm new password',
  'Használt oldalak': 'Modules in use',
  'Kapcsold ki azokat az eszköztípusokat, amiket nem használsz — a hozzájuk tartozó fül eltűnik a menüből. Az adatok nem törlődnek, bármikor visszakapcsolhatod.':
    'Turn off asset types you don’t use — their tab disappears from the menu. The data is not deleted; you can re-enable it any time.',
  Megjelenés: 'Appearance',
  'Válaszd ki, mikor legyen világos vagy sötét a felület.':
    'Choose when the interface is light or dark.',
  'Automatikus (napszak szerint)': 'Automatic (by time of day)',
  'Mindig világos': 'Always light',
  'Mindig sötét': 'Always dark',
  'Nyelv / Language': 'Language',
  Magyar: 'Magyar',
  English: 'English',
  Automatikus: 'Auto',
  Világos: 'Light',
  Sötét: 'Dark',
  'Műveleti gombok': 'Action buttons',
  'Kapcsold ki a szerkesztés vagy a törlés gombokat, ha védeni szeretnéd az adataidat a véletlen módosítástól vagy törléstől. A gombok bármikor visszakapcsolhatók.':
    'Turn off the edit or delete buttons to protect your data from accidental changes or deletion. The buttons can be re-enabled any time.',
  'Szerkesztés gombok': 'Edit buttons',
  'Törlés gombok': 'Delete buttons',
  'Adózási adatok': 'Tax details',
  'Add meg az adókulcsokat százalékban. Ezeket a rendszer a későbbi adószámításokhoz használja majd.':
    'Enter tax rates as percentages. The system will use these for later tax calculations.',
  'USA forrásadó (%)': 'US withholding tax (%)',
  'Személyi jövedelemadó – SZJA (%)': 'Personal income tax – PIT (%)',
  'Szociális hozzájárulási adó – SZOCHO (%)': 'Social contribution tax – SCT (%)',
  'Adókulcsok mentése': 'Save tax rates',
  'Alkalmazotti fizetés': 'Employee salary',
  'Add meg a bruttó fizetésed és a levonások kulcsait. A rendszer kiszámolja a nettó bevételed, valamint azt, hogy a hónap hányadik napján várható a kifizetés.':
    'Enter your gross salary and the deduction rates. The system calculates your net income and which day of the month the payment is expected.',
  'Bruttó fizetés (Ft)': 'Gross salary (HUF)',
  'Társadalombiztosítás – TB (%)': 'Social security – SS (%)',
  'Kifizetés napja (hónapban)': 'Payday (day of month)',
  'Fizetés mentése': 'Save salary',
  'Pénzügyi kimutatás': 'Financial statement',
  'Részletes kimutatás a teljes vagyonodról — nettó vagyon, eszközmegoszlás, valamint arany, részvény, kripto, hitel, zálog és előfizetés bontás, eredménnyel (P&L). A megnyíló nyomtatási ablakban válaszd célként a „PDF mentése" opciót. Tipp: előtte frissítsd az élő árfolyamokat a pontos értékekért.':
    'A detailed statement of your entire net worth — net worth, asset allocation, plus gold, stock, crypto, loan, pledge and subscription breakdowns, with profit/loss (P&L). In the print dialog that opens, choose “Save as PDF” as the destination. Tip: refresh live prices first for accurate values.',
  '📄 Kimutatás generálása (PDF)': '📄 Generate statement (PDF)',
  Adatok: 'Data',
  '⬇ Adatok letöltése (JSON biztonsági mentés)': '⬇ Download data (JSON backup)',
  '⬆ Adatok visszatöltése fájlból': '⬆ Restore data from file',
  'Az adataid ebben a böngészőben (localStorage) tárolódnak a fiókodhoz kötve — nem hagyják el az eszközt. A biztonsági mentés fájlba erősen ajánlott.':
    'Your data is stored in this browser (localStorage) tied to your account — it never leaves the device. Backing up to a file is strongly recommended.',
  Kijelentkezés: 'Sign out',
  Fiókváltás: 'Switch account',
  Veszélyzóna: 'Danger zone',
  'Az összes pénzügyi adat (arany, zálog, részvény, kripto, hitel, szolgáltatások) törlése a felhőből — nem visszavonható. Előtte töltsd le a biztonsági mentést!':
    'Delete all financial data (gold, pledge, stock, crypto, loan, subscriptions) — this cannot be undone. Download the backup first!',
  '🗑 Összes adat törlése': '🗑 Delete all data',
  'Adatok mentése és visszatöltése': 'Save and restore data',
  'Az adataid ebben a böngészőben (localStorage) tárolódnak a bejelentkezett fiókodhoz kötve — nem hagyják el az eszközt, és a böngészőadatok törlésével elveszhetnek.\n      Épp ezért érdemes időnként fájlba menteni: ez a saját biztonsági másolatod, ha véletlenül törölnél valamit, vagy exportálni szeretnéd az adataidat.':
    'Your data is stored in this browser (localStorage) tied to your signed-in account — it never leaves the device, and can be lost if you clear browser data.\n      That is why it is worth saving to a file now and then: this is your own backup if you accidentally delete something, or want to export your data.',
  '⬇ Mentés fájlba (JSON)': '⬇ Export to file (JSON)',
  '⬆ Visszatöltés fájlból': '⬆ Import from file',
  '🗑 Adatok nullázása': '🗑 Reset data',
  'A visszatöltés a jelenlegi adatokat felülírja. A nullázás minden adatot véglegesen töröl ezen az eszközön. Mindkét művelet előtt megerősítést kérek.':
    'Importing overwrites the current data. Resetting permanently deletes all data on this device. I ask for confirmation before both actions.',
  'Üdvözlünk vissza': 'Welcome back',
  'Jelentkezz be a fiókodhoz az adataid eléréséhez.':
    'Sign in to your account to access your data.',
  Jelszó: 'Password',
  Bejelentkezés: 'Sign in',
  'Elfelejtetted a jelszavad?': 'Forgot your password?',
  'Még nincs fiókod?': 'No account yet?',
  'Regisztrálj →': 'Register →',
  'Új fiók létrehozása': 'Create a new account',
  'Az adataid biztonságosan tárolódnak a felhőben, bármely eszközről elérhetők.':
    'Your data is stored securely in the cloud, reachable from any device.',
  'Jelszó megerősítése': 'Confirm password',
  'Fiók létrehozása': 'Create account',
  'Van már fiókod?': 'Already have an account?',
  '← Bejelentkezés': '← Sign in',
  Mentés: 'Save',
  Törlés: 'Delete',
  Mégsem: 'Cancel',
  Szerkesztés: 'Edit',
  Visszatöltés: 'Restore',
  'Mentés visszatöltése': 'Restore backup',
  Megerősítés: 'Confirmation',
  Értesítés: 'Notification',
  'Végleges törlés': 'Permanent deletion',
  'Részletek megtekintése': 'View details',
  'Ma esedékes': 'Due today',
  Következő: 'Next',
  'Kattints a befizetés rögzítéséhez': 'Click to record the payment',
  'Kattints a szüneteltetéshez': 'Click to pause',
  'Kattints a visszavonáshoz': 'Click to undo',
  'Kattints az aktiváláshoz': 'Click to activate',
  'Kattints a zálogban lévő aranyak részletezéséhez': 'Click to break down pledged gold',
  'Adatok lekérése…': 'Fetching data…',
  'Frissítés…': 'Refreshing…',
  '✓ Adókulcsok elmentve.': '✓ Tax rates saved.',
  '✓ Beállítás elmentve.': '✓ Setting saved.',
  '✓ Jelszó sikeresen módosítva.': '✓ Password changed successfully.',
  '✓ Megjelenés elmentve.': '✓ Appearance saved.',
  '✅ Frissítve:': '✅ Updated:',
  'most frissítve': 'just now',
  'napja frissítve': 'days ago',
  'órája frissítve': 'hours ago',
  'A két jelszó nem egyezik.': 'The two passwords do not match.',
  'A két új jelszó nem egyezik.': 'The two new passwords do not match.',
  'A jelszónak legalább 6 karakternek kell lennie.': 'The password must be at least 6 characters.',
  'Az új jelszónak min. 6 karakternek kell lennie.':
    'The new password must be at least 6 characters.',
  'Túl gyenge jelszó (min. 6 karakter).': 'Password too weak (min. 6 characters).',
  'Töltsd ki az összes jelszómezőt.': 'Fill in all password fields.',
  'A jelenlegi jelszó hibás.': 'The current password is incorrect.',
  'A jelszó módosítása nem sikerült.': 'Changing the password failed.',
  'Hibás e-mail cím vagy jelszó.': 'Invalid email or password.',
  'Hibás jelszó.': 'Incorrect password.',
  'Nincs ilyen felhasználó — regisztrálj előbb.': 'No such user — register first.',
  'Add meg az e-mail címet és a jelszót.': 'Enter the email and password.',
  'Az e-mail cím nem lehet üres.': 'The email cannot be empty.',
  'Érvénytelen e-mail cím.': 'Invalid email address.',
  'Az e-mail cím módosítása nem sikerült.': 'Changing the email failed.',
  'Ez az e-mail cím már foglalt.': 'This email is already taken.',
  'Ez az e-mail cím már regisztrálva van — jelentkezz be.':
    'This email is already registered — sign in.',
  'A regisztráció nem sikerült.': 'Registration failed.',
  'Írd be az e-mail címed, oda küldjük a visszaállító linket.':
    'Enter your email; we’ll send the reset link there.',
  'Helyi tárolás módban nincs e-mailes visszaállítás. A jelszót bejelentkezés után a Fiók oldalon módosíthatod.':
    'In local storage mode there is no email reset. You can change the password on the Account page after signing in.',
  'A művelethez nemrégiben kell bejelentkezni. Jelentkezz ki, majd be újra.':
    'This action requires a recent sign-in. Sign out, then back in.',
  'Adj meg eladott mennyiséget és eladási árat.': 'Enter the sold quantity and sale price.',
  'Adj meg tickert, darabszámot és vételi árat.': 'Enter ticker, quantity and buy price.',
  'Adj meg kiváltási összeget.': 'Enter a redemption amount.',
  'Az adókulcsok nem lehetnek negatívak.': 'Tax rates cannot be negative.',
  'Az árfolyam nem érhető el, ezért a rögzítés most nem lehetséges. Próbáld újra kicsit később.':
    'The exchange rate is unavailable, so recording is not possible right now. Try again shortly.',
  'Az árfolyam nem érhető el, ezért az eladás most nem rögzíthető. Próbáld újra kicsit később.':
    'The exchange rate is unavailable, so the sale cannot be recorded now. Try again shortly.',
  'A PDF-készítő könyvtár nem töltődött be. Ellenőrizd az internetkapcsolatot, majd próbáld újra.':
    'The PDF library failed to load. Check your internet connection, then try again.',
  'A kimutatás megnyitásához engedélyezd a felugró ablakokat ehhez az oldalhoz.':
    'Allow pop-ups for this site to open the statement.',
  'Nem sikerült a PDF elkészítése. Zárd be az ablakot és próbáld újra.':
    'Could not create the PDF. Close the window and try again.',
  'A mentés exportálása nem sikerült.': 'Exporting the backup failed.',
  'A mentés nem sikerült.': 'The export failed.',
  'A mentés visszatöltve.': 'Backup restored.',
  'Ez nem egy érvényes Crestly mentésfájl.': 'This is not a valid Crestly backup file.',
  'Hibás mentésfájl — nem JSON formátum.': 'Invalid backup file — not JSON format.',
  'Biztosan kijelentkezel?': 'Are you sure you want to sign out?',
  'Biztosan visszatöltöd ezt a mentést? A jelenlegi adatok felülíródnak ezen az eszközön.':
    'Restore this backup? Current data will be overwritten on this device.',
  'A fiókváltáshoz kijelentkeztetünk — utána más fiókkal is bejelentkezhetsz. Folytatod?':
    'Switching accounts signs you out — then you can sign in with another account. Continue?',
  'Biztosan törlöd ezt a részvénytételt (eladás rögzítése nélkül)?':
    'Delete this stock item (without recording a sale)?',
  'Biztosan törlöd ezt az aranytételt (eladás rögzítése nélkül)?':
    'Delete this gold item (without recording a sale)?',
  'Utolsó megerősítés: minden ilyen adat véglegesen törlődik. Folytatod?':
    'Final confirmation: all such data will be permanently deleted. Continue?',
  'Hiba történt:': 'An error occurred:',
  'ismeretlen frissítés': 'unknown update',
  'élő árfolyamok alapján': 'based on live prices',
  'utolsó ismert árfolyamok alapján': 'based on last known prices',
  'Visszaforgató (akkumulációs)': 'Accumulating',
  Január: 'January',
  Február: 'February',
  Március: 'March',
  Április: 'April',
  Május: 'May',
  Június: 'June',
  Július: 'July',
  Augusztus: 'August',
  Szeptember: 'September',
  Október: 'October',
  November: 'November',
  December: 'December',
  'pl. AAPL, MSFT, VOD.L': 'e.g. AAPL, MSFT, VOD.L',
  'pl. Krugerrand, 1 uncia': 'e.g. Krugerrand, 1 oz',
  'pl. AB123456': 'e.g. AB123456',
  'pl. 123456/2026': 'e.g. 123456/2026',
  'pl. Lakáshitel OTP': 'e.g. Home loan OTP',
  'pl. 60': 'e.g. 60',
  'pl. 15': 'e.g. 15',
  'pl. 5': 'e.g. 5',
  'pl. Netflix': 'e.g. Netflix',
  'pl. Maszlaigábor': 'e.g. John Smith',
  'pl. gabor@example.com': 'e.g. john@example.com',
  'min. 6 karakter': 'min. 6 characters'
};
function _i18nWalk(root, fn) {
  if (!root) return;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      const p = n.parentNode;
      if (!p) return NodeFilter.FILTER_REJECT;
      const tag = p.nodeName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA')
        return NodeFilter.FILTER_REJECT;
      return n.nodeValue && n.nodeValue.trim()
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    }
  });
  let n;
  while ((n = w.nextNode())) fn(n);
}
const _i18nText = new WeakMap();
const _i18nAttr = new WeakMap();
function translateToEn(root) {
  root = root || document.body;
  if (root.nodeType === 1 || root.nodeType === 9) {
    _i18nWalk(root, (n) => {
      const raw = n.nodeValue,
        key = raw.trim();
      if (I18N_HU_EN[key]) {
        if (!_i18nText.has(n)) _i18nText.set(n, raw);
        n.nodeValue = raw.replace(key, I18N_HU_EN[key]);
      }
    });
    const els = root.querySelectorAll ? root.querySelectorAll('[placeholder],[title]') : [];
    els.forEach((el) => {
      ['placeholder', 'title'].forEach((a) => {
        const v = el.getAttribute(a);
        if (!v) return;
        const key = v.trim();
        if (!I18N_HU_EN[key]) return;
        let store = _i18nAttr.get(el) || {};
        if (store[a] === undefined) {
          store[a] = v;
          _i18nAttr.set(el, store);
        }
        el.setAttribute(a, I18N_HU_EN[key]);
      });
    });
  } else if (root.nodeType === 3) {
    const key = (root.nodeValue || '').trim();
    if (I18N_HU_EN[key]) {
      if (!_i18nText.has(root)) _i18nText.set(root, root.nodeValue);
      root.nodeValue = root.nodeValue.replace(key, I18N_HU_EN[key]);
    }
  }
}
function restoreHu(root) {
  root = root || document.body;
  _i18nWalk(root, (n) => {
    if (_i18nText.has(n)) {
      n.nodeValue = _i18nText.get(n);
      _i18nText.delete(n);
    }
  });
  root.querySelectorAll('[placeholder],[title]').forEach((el) => {
    const store = _i18nAttr.get(el);
    if (!store) return;
    ['placeholder', 'title'].forEach((a) => {
      if (store[a] !== undefined) el.setAttribute(a, store[a]);
    });
    _i18nAttr.delete(el);
  });
}
let _i18nObserver = null;
function startI18nObserver() {
  if (_i18nObserver || typeof MutationObserver === 'undefined') return;
  _i18nObserver = new MutationObserver((muts) => {
    if (!isEn()) return;
    for (const m of muts) {
      m.addedNodes.forEach((n) => {
        if (n.nodeType === 1 || n.nodeType === 3) translateToEn(n);
      });
      if (m.type === 'attributes' && m.target && m.target.nodeType === 1) {
        const el = m.target,
          a = m.attributeName;
        if (a === 'placeholder' || a === 'title') {
          const v = el.getAttribute(a),
            key = (v || '').trim();
          if (I18N_HU_EN[key]) el.setAttribute(a, I18N_HU_EN[key]);
        }
      }
    }
  });
  _i18nObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['placeholder', 'title']
  });
}
function isEn() {
  try {
    return !!(state && state.ui && state.ui.lang === 'en');
  } catch (e) {
    return false;
  }
}
function L(hu, en) {
  return isEn() ? en : hu;
}
function LOC() {
  return isEn() ? 'en-GB' : 'hu-HU';
}
function applyLang() {
  const lang = isEn() ? 'en' : 'hu';
  try {
    document.documentElement.setAttribute('lang', lang);
  } catch (e) {}
  document
    .querySelectorAll('#ui-lang-seg button')
    .forEach((b) => b.classList.toggle('active', b.getAttribute('data-val') === lang));
  const langNote = document.getElementById('ui-lang-note');
  if (langNote)
    langNote.textContent = lang === 'en' ? 'Interface language: English' : 'Felület nyelve: Magyar';
  if (typeof renderThemeSettings === 'function') renderThemeSettings();
  if (typeof renderHeaderDate === 'function') renderHeaderDate();
  if (lang === 'en') {
    translateToEn(document.body);
    startI18nObserver();
  }
}
function setUiLang(lang) {
  lang = lang === 'en' ? 'en' : 'hu';
  if (!state.ui) state.ui = {};
  state.ui.lang = lang;
  if (typeof save === 'function') save();
  if (lang === 'hu') restoreHu(document.body);
  if (typeof renderAll === 'function') {
    try {
      renderAll();
    } catch (e) {}
  }
  applyLang();
}
const NETTLI_APP_ID = 'nettli';
let currentUid = null;
function initStore() {
  LocalStore.init(NETTLI_APP_ID);
}
initStore();
LocalStore.onAuthChange((user) => {
  const loginModal = document.getElementById('login-modal');
  const loginError = document.getElementById('login-error');
  if (loginError) loginError.textContent = '';
  if (user) {
    currentUid = LocalStore.uid();
    if (loginModal) loginModal.classList.remove('open');
    if (typeof syncModalScrollLock === 'function') syncModalScrollLock();
    const userLabel = document.getElementById('logged-in-as');
    if (userLabel) userLabel.textContent = user.email || '';
    const accName = document.getElementById('acc-name');
    const accEmail = document.getElementById('acc-email');
    if (accName) accName.value = user.name || '';
    if (accEmail) accEmail.value = user.email || '';
    migrateLocalDataIfNeeded().finally(() => {
      load().then(async () => {
        normalizeState();

        if (_dataLoaded && !vaultHasData(state)) {
          const bk = getLocalBackup();
          if (bk && bk.data && vaultHasData(bk.data)) {
            const when = new Date(bk.t).toLocaleString(LOC());
            if (
              await uiConfirm(
                'A felhőben most nincs adat, de találtam egy helyi biztonsági mentést (' +
                  when +
                  '). Visszatöltöd?',
                { title: 'Helyi mentés', confirmText: 'Visszatöltés' }
              )
            ) {
              state = bk.data;
              normalizeState();
              save();
            }
          }
        } else {
          backupLocal();
        }
        renderAll();
        renderModuleSettings();
        applyModuleVisibility();
        renderActionSettings();
        applyActionVisibility();
        applyTheme();
        renderThemeSettings();
        applyLang();
        if (typeof afterDataLoaded === 'function') afterDataLoaded();
      });
    });
  } else {
    currentUid = null;
    _dataLoaded = false;
    if (loginModal) loginModal.classList.add('open');
    if (typeof syncModalScrollLock === 'function') syncModalScrollLock();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  LocalStore.start();
});
async function loginWithEmail() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-password').value;
  const loginError = document.getElementById('login-error');
  if (!email || !pass) {
    if (loginError) loginError.textContent = 'Add meg az e-mail címet és a jelszót.';
    return;
  }
  try {
    await LocalStore.login(email, pass);
  } catch (err) {
    if (loginError) {
      loginError.style.color = '';
      loginError.textContent = hibaSzoveg(err);
    }
  }
}
function resetPassword() {
  const email = document.getElementById('login-email').value.trim();
  const loginError = document.getElementById('login-error');
  if (!email) {
    if (loginError) {
      loginError.style.color = '';
      loginError.textContent = 'Írd be az e-mail címed, oda küldjük a visszaállító linket.';
    }
    return;
  }
  LocalStore.resetPassword(email)
    .then(() => {
      if (loginError) {
        loginError.style.color = 'var(--accent)';
        loginError.textContent = 'Elküldtük a jelszó-visszaállító linket az e-mail címedre.';
      }
    })
    .catch((err) => {
      if (loginError) {
        loginError.style.color = '';
        loginError.textContent = hibaSzoveg(err);
      }
    });
}
async function registerWithEmail() {
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-password').value;
  const pass2 = document.getElementById('reg-password2').value;
  const err = document.getElementById('reg-error');
  if (!email || !pass) {
    if (err) err.textContent = 'Add meg az e-mail címet és a jelszót.';
    return;
  }
  if (pass.length < 6) {
    if (err) err.textContent = 'A jelszónak legalább 6 karakternek kell lennie.';
    return;
  }
  if (pass !== pass2) {
    if (err) err.textContent = 'A két jelszó nem egyezik.';
    return;
  }
  try {
    await LocalStore.register(email, pass);
  } catch (e) {
    if (err) err.textContent = hibaSzoveg(e);
  }
}
function authSlideTo(panel) {
  const slider = document.getElementById('auth-slider');
  if (!slider) return;
  if (panel === 'register') {
    slider.style.transform = 'translateX(-50%)';
    document.getElementById('login-error').textContent = '';
  } else {
    slider.style.transform = 'translateX(0)';
    document.getElementById('reg-error').textContent = '';
  }
}
async function logout() {
  if (
    !(await uiConfirm('Biztosan kijelentkezel?', {
      title: 'Kijelentkezés',
      confirmText: 'Kijelentkezés',
      danger: false
    }))
  )
    return;
  LocalStore.logout();
}
function hibaSzoveg(err) {
  switch (err.code) {
    case 'auth/invalid-email':
      return 'Érvénytelen e-mail cím.';
    case 'auth/user-not-found':
      return 'Nincs ilyen felhasználó — regisztrálj előbb.';
    case 'auth/wrong-password':
      return 'Hibás jelszó.';
    case 'auth/invalid-credential':
      return 'Hibás e-mail cím vagy jelszó.';
    case 'auth/email-already-in-use':
      return 'Ez az e-mail cím már regisztrálva van — jelentkezz be.';
    case 'auth/weak-password':
      return 'Túl gyenge jelszó (min. 6 karakter).';
    case 'auth/requires-recent-login':
      return 'A művelethez nemrégiben kell bejelentkezni. Jelentkezz ki, majd be újra.';
    default:
      return 'Hiba történt: ' + err.message;
  }
}
function accMsg(id, text, isError) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.style.color = isError ? 'var(--red)' : 'var(--accent)';
  if (text)
    setTimeout(() => {
      el.textContent = '';
    }, 5000);
}
async function updateProfile() {
  const user = LocalStore.currentUser;
  if (!user) return;
  const name = (document.getElementById('acc-name').value || '').trim();
  const email = (document.getElementById('acc-email').value || '').trim();
  if (!email) {
    accMsg('acc-profile-msg', 'Az e-mail cím nem lehet üres.', true);
    return;
  }
  try {
    await LocalStore.updateProfileName(name);
    if (email !== user.email) {
      await LocalStore.updateEmail(email);
      currentUid = LocalStore.uid();
    }
    const userLabel = document.getElementById('logged-in-as');
    if (userLabel) userLabel.textContent = LocalStore.currentUser.email || '';
    accMsg('acc-profile-msg', '✓ Adatok elmentve.', false);
  } catch (err) {
    accMsg('acc-profile-msg', hibaSzoveg(err), true);
  }
}
function renderTaxSettings() {
  const t = state.taxSettings || {
    us: 0,
    szja: 0,
    szocho: 0
  };
  const us = document.getElementById('acc-tax-us');
  const szja = document.getElementById('acc-tax-szja');
  const szocho = document.getElementById('acc-tax-szocho');
  if (us) us.value = t.us || '';
  if (szja) szja.value = t.szja || '';
  if (szocho) szocho.value = t.szocho || '';
}
function updateTaxSettings() {
  const us = parseFloat(document.getElementById('acc-tax-us').value) || 0;
  const szja = parseFloat(document.getElementById('acc-tax-szja').value) || 0;
  const szocho = parseFloat(document.getElementById('acc-tax-szocho').value) || 0;
  if (us < 0 || szja < 0 || szocho < 0) {
    accMsg('acc-tax-msg', 'Az adókulcsok nem lehetnek negatívak.', true);
    return;
  }
  state.taxSettings = {
    us,
    szja,
    szocho
  };
  save();
  renderAll();
  accMsg('acc-tax-msg', '✓ Adókulcsok elmentve.', false);
}
function ratioAlertDefaults() {
  return { svcYellow: 20, svcRed: 35, loanYellow: 30, loanRed: 50 };
}
function ratioColor(pct, yellow, red) {
  if (pct >= red) return 'red';
  if (pct >= yellow) return 'yellow';
  return 'green';
}
function renderRatioAlertSettings() {
  const r = state.ratioAlert || ratioAlertDefaults();
  const svcY = document.getElementById('acc-ratio-svc-yellow');
  const svcR = document.getElementById('acc-ratio-svc-red');
  const loanY = document.getElementById('acc-ratio-loan-yellow');
  const loanR = document.getElementById('acc-ratio-loan-red');
  if (svcY) svcY.value = r.svcYellow;
  if (svcR) svcR.value = r.svcRed;
  if (loanY) loanY.value = r.loanYellow;
  if (loanR) loanR.value = r.loanRed;
}
function updateRatioAlertSettings() {
  const svcYellow = parseFloat(document.getElementById('acc-ratio-svc-yellow').value) || 0;
  const svcRed = parseFloat(document.getElementById('acc-ratio-svc-red').value) || 0;
  const loanYellow = parseFloat(document.getElementById('acc-ratio-loan-yellow').value) || 0;
  const loanRed = parseFloat(document.getElementById('acc-ratio-loan-red').value) || 0;
  if (svcYellow < 0 || svcRed < 0 || loanYellow < 0 || loanRed < 0) {
    accMsg('acc-ratio-msg', 'A küszöbök nem lehetnek negatívak.', true);
    return;
  }
  if (svcYellow > svcRed || loanYellow > loanRed) {
    accMsg('acc-ratio-msg', 'A sárga küszöb nem lehet nagyobb a piros küszöbnél.', true);
    return;
  }
  state.ratioAlert = { svcYellow, svcRed, loanYellow, loanRed };
  save();
  renderAll();
  accMsg('acc-ratio-msg', '✓ Küszöbök elmentve.', false);
}
function salaryDefaults() {
  return { gross: 0, szja: 15, szocho: 0, tb: 18.5, day: 0 };
}

function salaryNetMonthly() {
  const s = state.salary;
  if (!s || !s.gross) return 0;
  const net =
    s.gross -
    (s.gross * (s.szja || 0)) / 100 -
    (s.gross * (s.szocho || 0)) / 100 -
    (s.gross * (s.tb || 0)) / 100;
  return net > 0 ? net : 0;
}

function renderSalary() {
  const s = state.salary || salaryDefaults();
  const g = document.getElementById('acc-sal-gross');
  const szja = document.getElementById('acc-sal-szja');
  const szocho = document.getElementById('acc-sal-szocho');
  const tb = document.getElementById('acc-sal-tb');
  const day = document.getElementById('acc-sal-day');
  if (g) g.value = s.gross ? Math.round(s.gross).toLocaleString('hu-HU') : '';
  if (szja) szja.value = s.szja || s.szja === 0 ? s.szja : '';
  if (szocho) szocho.value = s.szocho || s.szocho === 0 ? s.szocho : '';
  if (tb) tb.value = s.tb || s.tb === 0 ? s.tb : '';
  if (day) day.value = s.day || '';
  renderSalaryBreakdown();
  renderSalaryAdjustments();
  renderIncomeTimeline();
}

function readSalaryInputs() {
  return {
    gross: parseAmount('acc-sal-gross'),
    szja: parseFloat(document.getElementById('acc-sal-szja').value) || 0,
    szocho: parseFloat(document.getElementById('acc-sal-szocho').value) || 0,
    tb: parseFloat(document.getElementById('acc-sal-tb').value) || 0,
    day: parseInt(document.getElementById('acc-sal-day').value) || 0
  };
}

function renderSalaryBreakdown() {
  const box = document.getElementById('salary-breakdown');
  if (!box) return;
  const s = readSalaryInputs();
  const szjaAmt = (s.gross * s.szja) / 100;
  const szochoAmt = (s.gross * s.szocho) / 100;
  const tbAmt = (s.gross * s.tb) / 100;
  const net = s.gross - szjaAmt - szochoAmt - tbAmt;
  const row = (label, val, cls) =>
    `<div style="display:flex;justify-content:space-between;gap:10px;padding:5px 0;font-size:13px">
       <span style="color:var(--muted)">${label}</span>
       <span class="${cls || ''}" style="font-weight:600;white-space:nowrap">${val}</span>
     </div>`;
  const nd = nextChargeDate(s.day);
  const nextStr = nd
    ? nd.toLocaleDateString(LOC()) +
      ` <span style="color:var(--muted);font-weight:400">(${daysUntil(toLocalDateStr(nd))} ${L('nap múlva', 'days')})</span>`
    : '—';
  box.innerHTML =
    `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px 14px;margin-bottom:14px">
       ${row(L('Bruttó fizetés', 'Gross salary'), fmt(s.gross))}
       ${row(`${L('SZJA levonás', 'PIT deduction')} (${s.szja}%)`, '− ' + fmt(szjaAmt), 'red')}
       ${row(`${L('SZOCHO levonás', 'SCT deduction')} (${s.szocho}%)`, '− ' + fmt(szochoAmt), 'red')}
       ${row(`${L('TB levonás', 'Social security deduction')} (${s.tb}%)`, '− ' + fmt(tbAmt), 'red')}
       <div style="border-top:1px solid var(--border);margin:6px 0"></div>
       ${row(L('Nettó bevétel', 'Net income'), fmt(net), 'green')}
       ${row(L('Következő kifizetés', 'Next payment'), nextStr)}
     </div>`;
}
function updateSalarySettings() {
  const s = readSalaryInputs();
  if (s.szja < 0 || s.szocho < 0 || s.tb < 0) {
    accMsg('acc-sal-msg', 'A kulcsok nem lehetnek negatívak.', true);
    return;
  }
  if (s.day < 0 || s.day > 31) {
    accMsg('acc-sal-msg', 'A kifizetés napja 1 és 31 között lehet.', true);
    return;
  }
  state.salary = s;
  save();
  renderAll();
  accMsg('acc-sal-msg', '✓ Fizetési adatok elmentve.', false);
}

const INCOME_YEAR = 2026;
const MONTHS_HU = [
  'Január',
  'Február',
  'Március',
  'Április',
  'Május',
  'Június',
  'Július',
  'Augusztus',
  'Szeptember',
  'Október',
  'November',
  'December'
];
const MONTHS_HU_SHORT = [
  'Jan',
  'Feb',
  'Már',
  'Ápr',
  'Máj',
  'Jún',
  'Júl',
  'Aug',
  'Szep',
  'Okt',
  'Nov',
  'Dec'
];
function incomeAdjustmentsForMonth(monthIdx0, year) {
  return (state.salaryAdjustments || []).filter(
    (a) => (a.year || INCOME_YEAR) === year && a.month - 1 === monthIdx0
  );
}

function monthlyIncomeSeries(year) {
  const base = salaryNetMonthly();
  const totals = new Array(12).fill(0);
  const items = Array.from({ length: 12 }, () => []);
  for (let i = 0; i < 12; i++) {
    if (base > 0) {
      items[i].push({ label: 'Nettó alapfizetés', amount: base });
      totals[i] += base;
    }
    incomeAdjustmentsForMonth(i, year).forEach((a) => {
      const amt = Number(a.amount) || 0;
      if (amt !== 0) {
        items[i].push({ label: a.note || (amt >= 0 ? 'Korrekció (+)' : 'Korrekció (−)'), amount: amt });
        totals[i] += amt;
      }
    });
    if (totals[i] < 0) totals[i] = 0;
  }
  return { base, totals, items };
}

function addSalaryAdjustment() {
  const month = parseInt(document.getElementById('sal-adj-month').value) || 0;
  const type = document.getElementById('sal-adj-type').value;
  const amountRaw = parseAmount('sal-adj-amount');
  const note = (document.getElementById('sal-adj-note').value || '').trim();
  if (month < 1 || month > 12) {
    accMsg('sal-adj-msg', 'Válassz hónapot.', true);
    return;
  }
  if (!amountRaw || amountRaw <= 0) {
    accMsg('sal-adj-msg', 'Adj meg egy pozitív összeget.', true);
    return;
  }
  const amount = type === 'sub' ? -amountRaw : amountRaw;
  if (!Array.isArray(state.salaryAdjustments)) state.salaryAdjustments = [];
  state.salaryAdjustments.push({ id: uid(), year: INCOME_YEAR, month, amount, note });
  save();
  document.getElementById('sal-adj-amount').value = '';
  document.getElementById('sal-adj-note').value = '';
  renderAll();
  accMsg('sal-adj-msg', '✓ Korrekció hozzáadva.', false);
}

function deleteSalaryAdjustment(id) {
  state.salaryAdjustments = (state.salaryAdjustments || []).filter((a) => a.id !== id);
  save();
  renderAll();
}

function renderSalaryAdjustments() {
  const box = document.getElementById('salary-adjust-list');
  if (!box) return;
  const list = (state.salaryAdjustments || [])
    .filter((a) => (a.year || INCOME_YEAR) === INCOME_YEAR)
    .slice()
    .sort((a, b) => a.month - b.month);
  if (!list.length) {
    box.innerHTML =
      '<div style="color:var(--muted);font-size:12px;padding:6px 0">Még nincs korrekció. Add hozzá a prémiumot, a 13. havit, a túlórát (+) vagy a levonásokat (−).</div>';
    return;
  }
  box.innerHTML = list
    .map((a) => {
      const amt = Number(a.amount) || 0;
      const pos = amt >= 0;
      return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
        <span style="min-width:74px;font-size:12px;color:var(--muted);font-weight:600">${MONTHS_HU[a.month - 1]}</span>
        <span style="flex:1;font-size:13px;font-weight:600">${a.note ? escHtml(a.note) : pos ? 'Korrekció (+)' : 'Korrekció (−)'}</span>
        <span class="${pos ? 'green' : 'red'}" style="font-weight:700;white-space:nowrap">${pos ? '+' : '−'} ${fmtAgg(Math.abs(amt))}</span>
        <button class="btn btn-danger btn-sm js-del-btn" onclick="deleteSalaryAdjustment('${a.id}')" title="Törlés">×</button>
      </div>`;
    })
    .join('');
}

let _incTLsel = null;
function selectIncomeMonth(i) {
  _incTLsel = i;
  renderIncomeTimeline();
}
function renderIncomeTimeline() {
  const box = document.getElementById('salary-timeline');
  if (!box) return;
  const YEAR = INCOME_YEAR;
  const { totals, items } = monthlyIncomeSeries(YEAR);
  const maxV = Math.max(1, ...totals);
  const totYear = totals.reduce((a, b) => a + b, 0);
  const avg = totYear / 12;

  const today = new Date();
  let curIdx;
  if (today.getFullYear() < YEAR) curIdx = -1;
  else if (today.getFullYear() > YEAR) curIdx = 12;
  else curIdx = today.getMonth();
  const dayFrac =
    curIdx >= 0 && curIdx < 12 ? (today.getDate() - 1) / new Date(YEAR, curIdx + 1, 0).getDate() : 0;
  const todayPct = curIdx < 0 ? 0 : curIdx >= 12 ? 100 : ((curIdx + dayFrac) / 12) * 100;

  if (_incTLsel == null || _incTLsel < 0 || _incTLsel > 11)
    _incTLsel = curIdx < 0 ? 0 : curIdx > 11 ? 11 : curIdx;
  const sel = _incTLsel;

  const H = 96;
  const cols = MONTHS_HU_SHORT.map((name, i) => {
    const v = totals[i];
    const h = Math.max(v > 0 ? 2 : 0, Math.round((v / maxV) * H));
    const future = i > curIdx;
    const op = future ? 0.4 : 1;
    const dash = future ? ';outline:1px dashed var(--border2);outline-offset:-1px' : '';
    const selBg = i === sel ? 'background:var(--surface2);' : '';
    return `<div onclick="selectIncomeMonth(${i})" title="${MONTHS_HU[i]}" style="flex:1 1 0;min-width:40px;cursor:pointer;display:flex;flex-direction:column;align-items:center;border-radius:8px;padding:2px 0;${selBg}">
      <div style="height:${H}px;display:flex;align-items:flex-end;justify-content:center;width:100%">
        <div style="width:58%;max-width:22px;height:${h}px;background:var(--accent2);border-radius:3px 3px 0 0;opacity:${op}${dash}"></div>
      </div>
      <div style="height:2px;width:80%;background:var(--border2)"></div>
      <div style="font-size:10px;margin-top:4px;color:${i === curIdx ? 'var(--accent)' : 'var(--muted)'};font-weight:${i === sel || i === curIdx ? 700 : 600}">${name}</div>
    </div>`;
  }).join('');

  const chart = `<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
    <div style="position:relative;min-width:360px">
      ${curIdx > 0 ? `<div style="position:absolute;top:0;bottom:20px;left:0;width:${todayPct}%;background:var(--surface2);opacity:0.4;border-radius:6px;pointer-events:none"></div>` : ''}
      <div style="display:flex;align-items:stretch;gap:2px;position:relative">${cols}</div>
      ${
        curIdx >= 0 && curIdx < 12
          ? `<div style="position:absolute;top:0;bottom:20px;left:${todayPct}%;border-left:2px dashed var(--accent);pointer-events:none"></div>
      <div style="position:absolute;top:-4px;left:${todayPct}%;transform:translateX(-50%);font-size:9px;font-weight:700;background:var(--accent);color:#1a1206;padding:1px 6px;border-radius:7px;pointer-events:none">Ma</div>`
          : ''
      }
    </div>
  </div>`;

  const status = sel < curIdx ? 'Elmúlt' : sel === curIdx ? 'Aktuális' : 'Hátravan';
  const statusCol =
    sel === curIdx ? 'background:var(--accent);color:#1a1206' : 'background:var(--surface2);color:var(--muted)';
  const listHtml = items[sel].length
    ? items[sel]
        .slice()
        .sort((a, b) => b.amount - a.amount)
        .map((it) => {
          const pos = it.amount >= 0;
          return `<div style="display:flex;justify-content:space-between;gap:8px;font-size:12px;padding:3px 0"><span style="color:var(--muted)">${escHtml(it.label)}</span><span class="${pos ? 'green' : 'red'}" style="font-weight:600;white-space:nowrap">${pos ? '+' : '−'} ${fmtAgg(Math.abs(it.amount))}</span></div>`;
        })
        .join('')
    : '<div style="font-size:12px;color:var(--muted);padding:3px 0">Nincs rögzített bevétel erre a hónapra.</div>';

  box.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;gap:6px 16px;margin-bottom:14px;font-size:12px;align-items:center">
      <span>Éves bevétel: <strong class="green">${fmtAgg(totYear)}</strong></span>
      <span style="margin-left:auto">Havi átlag: <strong>${fmtAgg(avg)}</strong></span>
    </div>
    ${chart}
    <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:10.5px;color:var(--muted);margin-top:8px">
      <span>Tömör = elmúlt · halvány = még hátra van</span>
      <span>Kattints egy hónapra a bontásért</span>
    </div>
    <div style="margin-top:16px;border-top:1px solid var(--border);padding-top:12px">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px">
        <strong style="font-size:14px">${MONTHS_HU[sel]} ${YEAR}</strong>
        <span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:8px;${statusCol}">${status}</span>
        <span style="margin-left:auto;font-weight:700" class="green">${fmtAgg(totals[sel])}</span>
      </div>
      ${listHtml}
    </div>`;
}

function sendAccountPasswordReset() {
  const user = LocalStore.currentUser;
  if (!user || !user.email) {
    accMsg('acc-pass-msg', 'Nincs bejelentkezett fiók.', true);
    return;
  }
  LocalStore.resetPassword(user.email)
    .then(() => {
      accMsg('acc-pass-msg', '✓ Elküldtük a jelszó-visszaállító linket az e-mail címedre.', false);
    })
    .catch((err) => {
      accMsg('acc-pass-msg', hibaSzoveg(err), true);
    });
}
async function updatePassword() {
  const user = LocalStore.currentUser;
  if (!user) return;
  const cur = document.getElementById('acc-cur-pass').value;
  const next = document.getElementById('acc-new-pass').value;
  const next2 = document.getElementById('acc-new-pass2').value;
  if (!cur || !next) {
    accMsg('acc-pass-msg', 'Töltsd ki az összes jelszómezőt.', true);
    return;
  }
  if (next !== next2) {
    accMsg('acc-pass-msg', 'A két új jelszó nem egyezik.', true);
    return;
  }
  if (next.length < 6) {
    accMsg('acc-pass-msg', 'Az új jelszónak min. 6 karakternek kell lennie.', true);
    return;
  }
  try {
    await LocalStore.reauth(cur);
    await LocalStore.updatePassword(next);
    document.getElementById('acc-cur-pass').value = '';
    document.getElementById('acc-new-pass').value = '';
    document.getElementById('acc-new-pass2').value = '';
    accMsg('acc-pass-msg', '✓ Jelszó sikeresen módosítva.', false);
  } catch (err) {
    accMsg('acc-pass-msg', hibaSzoveg(err), true);
  }
}
async function switchAccount() {
  if (
    !(await uiConfirm(
      'A fiókváltáshoz kijelentkeztetünk — utána más fiókkal is bejelentkezhetsz. Folytatod?',
      {
        title: 'Fiókváltás',
        confirmText: 'Folytatom',
        danger: false
      }
    ))
  )
    return;
  LocalStore.logout();
}
function migrateLocalDataIfNeeded() {
  return Promise.resolve();
}
let state = {
  stocks: [],
  crypto: [],
  loans: [],
  pledges: [],
  gold: {
    grams: 0,
    cost: 0,
    pricePerGram: 28000
  },
  goldItems: [],
  goldSpot: 28000,
  services: [],
  taxSettings: {
    us: 0,
    szja: 0,
    szocho: 0
  },
  ratioAlert: {
    svcYellow: 20,
    svcRed: 35,
    loanYellow: 30,
    loanRed: 50
  },
  modules: {
    gold: true,
    stocks: true,
    crypto: true,
    pledge: true,
    loans: true,
    services: true
  },
  paidInstallments: {},
  salaryAdjustments: [],
  expenseReport: null
};
let priceCache = {};
let goldSpotLive = false;
let _saveTimer = null;
let _dataLoaded = false;
function vaultHasData(s) {
  if (!s || typeof s !== 'object') return false;
  const arr = (k) => Array.isArray(s[k]) && s[k].length > 0;
  if (
    arr('stocks') ||
    arr('crypto') ||
    arr('goldItems') ||
    arr('loans') ||
    arr('pledges') ||
    arr('services') ||
    arr('salaryAdjustments')
  )
    return true;
  if (s.expenseReport && Array.isArray(s.expenseReport.txns) && s.expenseReport.txns.length > 0)
    return true;
  if (s.salary && Number(s.salary.gross) > 0) return true;
  return false;
}

function backupLocal() {
  try {
    if (currentUid && vaultHasData(state)) {
      localStorage.setItem(
        'nettli_backup_' + currentUid,
        JSON.stringify({ t: Date.now(), data: state })
      );
    }
  } catch (e) {}
}
function getLocalBackup() {
  try {
    const raw = localStorage.getItem('nettli_backup_' + currentUid);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
function save(allowEmpty) {

  if (!currentUid || !_dataLoaded) return;
  backupLocal();
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => {
    try {
      LocalStore.saveVault(state, { allowEmpty: !!allowEmpty });
    } catch (e) {
      console.error('[Crestly] mentés hiba:', e);
    }
  }, 600);
}
function normalizeState() {
  if (!state.paidInstallments) state.paidInstallments = {};
  if (!state.pledges) state.pledges = [];
  if (!state.goldItems) state.goldItems = [];
  if (!state.stocks) state.stocks = [];
  if (!state.crypto) state.crypto = [];
  if (!state.loans) state.loans = [];
  if (!state.goldSpot) state.goldSpot = (state.gold && state.gold.pricePerGram) || 28000;
  if (!state.services) state.services = [];
  if (!state.taxSettings || typeof state.taxSettings !== 'object')
    state.taxSettings = {
      us: 0,
      szja: 0,
      szocho: 0
    };
  state.taxSettings.us = Number(state.taxSettings.us) || 0;
  state.taxSettings.szja = Number(state.taxSettings.szja) || 0;
  state.taxSettings.szocho = Number(state.taxSettings.szocho) || 0;
  if (!state.salary || typeof state.salary !== 'object')
    state.salary = {
      gross: 0,
      szja: 15,
      szocho: 0,
      tb: 18.5,
      day: 0
    };
  state.salary.gross = Number(state.salary.gross) || 0;
  state.salary.szja = Number(state.salary.szja) || 0;
  state.salary.szocho = Number(state.salary.szocho) || 0;
  state.salary.tb = Number(state.salary.tb) || 0;
  state.salary.day = Number(state.salary.day) || 0;
  if (!state.modules || typeof state.modules !== 'object')
    state.modules = {
      gold: true,
      stocks: true,
      crypto: true,
      pledge: true,
      loans: true,
      services: true
    };
  ['gold', 'stocks', 'crypto', 'pledge', 'loans', 'services'].forEach((k) => {
    if (state.modules[k] === undefined) state.modules[k] = true;
  });
  if (!state.ui || typeof state.ui !== 'object') state.ui = {};
  if (state.ui.editBtns === undefined) state.ui.editBtns = true;
  if (state.ui.delBtns === undefined) state.ui.delBtns = true;
  state.ui.theme = 'sunset';
  if (!state.ui.appearance) state.ui.appearance = 'auto';
  if (state.ui.lang !== 'en') state.ui.lang = 'hu';
  if (state.usdHuf) usdHuf = state.usdHuf;
  if (state.eurHuf) eurHuf = state.eurHuf;
  if (state.fxUpdatedAt) fxUpdatedAt = state.fxUpdatedAt;
  if (state.fxQuoteDate) fxQuoteDate = state.fxQuoteDate;
  if (fxUpdatedAt && isNaN(Date.parse(fxUpdatedAt))) fxUpdatedAt = null;
}
function load() {
  if (!currentUid) return Promise.resolve();
  _dataLoaded = false;
  let loadFailed = false;
  return LocalStore.loadVault()
    .catch((e) => {
      console.error('[Crestly] betöltés hiba:', e);
      loadFailed = true;
      return null;
    })
    .then((d) => {
      if (d && typeof d === 'object') state = d;
    })
    .then(() => {
      if (!state.paidInstallments) state.paidInstallments = {};
      if (!state.pledges) state.pledges = [];
      if (!state.goldItems) state.goldItems = [];
      if (!state.goldSpot) state.goldSpot = (state.gold && state.gold.pricePerGram) || 28000;
      if (!state.services) state.services = [];
      if (state.usdHuf) usdHuf = state.usdHuf;
      if (state.eurHuf) eurHuf = state.eurHuf;
      if (state.fxUpdatedAt) fxUpdatedAt = state.fxUpdatedAt;
      if (state.gold && state.gold.grams > 0 && state.goldItems.length === 0) {
        state.goldItems.push({
          id: uid(),
          name: 'Korábbi arany',
          form: 'egyéb',
          purity: '999.9',
          grams: state.gold.grams,
          cost: state.gold.cost,
          date: ''
        });
        state.gold = {
          grams: 0,
          cost: 0,
          pricePerGram: state.goldSpot
        };
      }
      const bizKeys = ['bizIncome', 'bizExpense', 'orders', 'bizTaxRate'];

      if (!loadFailed) _dataLoaded = true;
      if (_dataLoaded && bizKeys.some((k) => k in state)) {
        bizKeys.forEach((k) => delete state[k]);
        try {
          LocalStore.saveVault(state);
        } catch (e) {
          console.error('[Crestly] üzleti adatok törlése hiba:', e);
        }
      }
    });
}
function exportData() {
  try {
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nettli-mentes-' + now() + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (e) {
    uiAlert('A mentés exportálása nem sikerült.');
    console.error('[Crestly] export error:', e);
  }
}
function generateFinancialReport() {
  const mod = state.modules || {};
  const useGold = mod.gold !== false,
    useStocks = mod.stocks !== false,
    useCrypto = mod.crypto !== false;
  const usePledge = mod.pledge !== false,
    useLoans = mod.loans !== false,
    useServices = mod.services !== false;
  const esc = escHtml;
  const spot = state.goldSpot || 28000;
  const neg = (n) => (n > 0 ? '−' : '') + fmtAgg(n);
  const pl = (n, pct) =>
    `<span class="${n >= 0 ? 'pos' : 'neg'}">${n >= 0 ? '+' : ''}${fmtAgg(n)}${pct != null && isFinite(pct) ? ` (${n >= 0 ? '+' : ''}${pct.toFixed(1)}%)` : ''}</span>`;
  const goldRows = state.goldItems.map((g) => {
    const val = goldItemValue(g, spot);
    const c = g.cost || 0;
    return {
      g,
      val,
      cost: c,
      pl: val - c,
      plPct: c ? ((val - c) / c) * 100 : null
    };
  });
  const goldVal = useGold ? goldRows.reduce((a, r) => a + r.val, 0) : 0;
  const goldCost = useGold ? goldRows.reduce((a, r) => a + r.cost, 0) : 0;
  const goldPL = goldVal - goldCost;
  const stGroups = {};
  state.stocks.forEach((s) => {
    (stGroups[s.ticker] = stGroups[s.ticker] || []).push(s);
  });
  const stockRows = Object.entries(stGroups)
    .map(([ticker, lots]) => {
      const first = lots[0];
      const price = getLivePrice(ticker) || first.price;
      const cur = first.currency || 'HUF';
      const fxr = rateForCurrency(cur);
      let qty = 0,
        invN = 0,
        invHist = 0;
      lots.forEach((l) => {
        qty += l.qty;
        invHist += l.qty * l.avg;
        const avgN = l.avgNative != null ? l.avgNative : fxr ? l.avg / fxr : l.avg;
        invN += l.qty * avgN;
      });
      const invUsd = nativeToUsd(invN, cur);
      const invHuf = invUsd !== null && fxReady() ? invUsd * usdHuf : invHist;
      const curHuf = qty * price;
      const divYield = stockDivYield(first, price);
      const annualDiv = stockIsCash(first) ? (curHuf * divYield) / 100 : 0;
      return {
        ticker,
        name: first.name || '',
        qty,
        avgHuf: qty ? invHuf / qty : 0,
        priceHuf: price,
        invHuf,
        curHuf,
        pl: curHuf - invHuf,
        plPct: invHuf ? ((curHuf - invHuf) / invHuf) * 100 : null,
        annualDiv
      };
    })
    .sort((a, b) => b.curHuf - a.curHuf);
  const stockVal = useStocks ? stockRows.reduce((a, r) => a + r.curHuf, 0) : 0;
  const stockCost = useStocks ? stockRows.reduce((a, r) => a + r.invHuf, 0) : 0;
  const stockPL = stockVal - stockCost;
  const annualDiv = useStocks ? annualStockDividendHuf() : 0;
  const _dtb = dividendTaxBreakdown(annualDiv);
  const divUsPct = _dtb.usPct,
    divSzjaPct = _dtb.szjaPct,
    divSzochoPct = _dtb.szochoPct;
  const divUsAmt = _dtb.usAmt,
    divAfterUs = _dtb.afterUs;
  const divSzjaAmt = _dtb.szjaAmt,
    divSzochoAmt = _dtb.szochoAmt,
    divNet = _dtb.net;
  const coins = calcCryptoPL();
  const cryptoRows = Object.entries(coins)
    .map(([coin, c]) => {
      const openQty = c.buys.reduce((a, b) => a + b.qty, 0);
      if (openQty <= 0) return null;
      const openCost = c.buys.reduce((a, b) => a + b.qty * b.price, 0);
      const live = getLivePrice(coin);
      const curVal = live ? openQty * live : openCost;
      return {
        coin,
        qty: openQty,
        avgHuf: openCost / openQty,
        priceHuf: live || openCost / openQty,
        invHuf: openCost,
        curHuf: curVal,
        pl: curVal - openCost,
        plPct: openCost ? ((curVal - openCost) / openCost) * 100 : null
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.curHuf - a.curHuf);
  const cryptoVal = useCrypto ? cryptoRows.reduce((a, r) => a + r.curHuf, 0) : 0;
  const cryptoCost = useCrypto ? cryptoRows.reduce((a, r) => a + r.invHuf, 0) : 0;
  const cryptoPL = cryptoVal - cryptoCost;
  const loanRows = state.loans.map((l) => ({
    l,
    remaining: calcRemaining(l)
  }));
  const totalLoan = useLoans ? loanRows.reduce((a, r) => a + r.remaining, 0) : 0;
  const loanOrig = useLoans ? state.loans.reduce((a, l) => a + (l.orig || 0), 0) : 0;
  const monthlyLoan = useLoans ? state.loans.reduce((a, l) => a + (l.monthly || 0), 0) : 0;
  const pledgeRows = state.pledges.map((p) => ({
    p,
    d: calcPledgeDebt(p)
  }));
  const totalPledge = usePledge ? pledgeTotalDebt() : 0;
  const pledgePrincipal = pledgeRows.reduce((a, r) => a + (r.d.principal || 0), 0);
  const pledgeRepay = pledgeRows.reduce((a, r) => a + (r.d.totalRepay || 0), 0);
  const svcRows = state.services
    .filter((s) => s.active)
    .map((s) => ({
      s,
      monthly: serviceMonthlyCost(s),
      next: nextChargeDate(s.day)
    }));
  const svcMonthly = useServices ? svcRows.reduce((a, r) => a + r.monthly, 0) : 0;
  const currentValue = stockVal + goldVal + cryptoVal;
  const investedCost = stockCost + goldCost + cryptoCost;
  const unrealPL = currentValue - investedCost;
  const totalLiab = totalLoan + totalPledge;
  const netWorth = currentValue - totalLiab;
  const totalMonthly = monthlyLoan + svcMonthly;
  const share = (v) => (currentValue > 0 ? ((v / currentValue) * 100).toFixed(1) + '%' : '—');
  let acctName = '',
    acctEmail = '';
  try {
    acctName = (document.getElementById('acc-name') || {}).value || '';
  } catch (e) {}
  try {
    acctEmail = (document.getElementById('acc-email') || {}).value || '';
  } catch (e) {}
  try {
    if (!acctEmail && typeof LocalStore !== 'undefined' && LocalStore.currentUser)
      acctEmail = LocalStore.currentUser.email || '';
  } catch (e) {}
  const dt = new Date();
  const genStr = dt.toLocaleString('hu-HU');
  const pad = (x) => String(x).padStart(2, '0');
  const dateFile = `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
  const priceNote = goldSpotLive ? 'élő árfolyamok alapján' : 'utolsó ismert árfolyamok alapján';
  const tbl = (head, body, foot) =>
    `<table><thead><tr>${head}</tr></thead><tbody>${body || `<tr><td colspan="20" class="muted" style="text-align:center;padding:14px">Nincs rögzített tétel.</td></tr>`}</tbody>${foot ? `<tfoot>${foot}</tfoot>` : ''}</table>`;
  const sumItem = (lbl, val, cls) =>
    `<div class="sum-item"><span class="lbl">${lbl}</span><span class="val ${cls || ''}">${val}</span></div>`;
  const summaryHtml = `<div class="summary">
    ${sumItem('Teljes vagyon', fmtAgg(netWorth), netWorth >= 0 ? 'pos' : 'neg')}
    ${sumItem('Befektetett eszközök értéke', fmtAgg(currentValue))}
    ${sumItem('Bekerülési (befektetett) költség', fmtAgg(investedCost))}
    ${sumItem('Nem realizált eredmény', pl(unrealPL, investedCost > 0 ? (unrealPL / investedCost) * 100 : null))}
    ${sumItem('Összes tartozás (hitel + zálog)', fmtAgg(totalLiab))}
    ${sumItem('Havi fix kiadás (törlesztő + előfizetés)', fmtAgg(totalMonthly))}
    ${
      useStocks
        ? `${sumItem('Éves osztalék – bruttó (becsült)', fmtAgg(annualDiv), 'gold')}
    ${sumItem('Éves osztalék – nettó (becsült)', fmtAgg(divNet), 'gold')}
    ${sumItem('Havi osztalék – nettó (becsült)', fmtAgg(divNet / 12), 'gold')}`
        : ''
    }
  </div>`;
  const allocHtml = tbl(
    `<th>Tétel</th><th class="num">Érték</th><th class="num">Arány</th>`,
    `${useGold ? `<tr><td>Arany</td><td class="num">${fmtAgg(goldVal)}</td><td class="num">${share(goldVal)}</td></tr>` : ''}
     ${useStocks ? `<tr><td>Részvény</td><td class="num">${fmtAgg(stockVal)}</td><td class="num">${share(stockVal)}</td></tr>` : ''}
     ${useCrypto ? `<tr><td>Kripto</td><td class="num">${fmtAgg(cryptoVal)}</td><td class="num">${share(cryptoVal)}</td></tr>` : ''}
     <tr class="subtotal"><td>Befektetett eszközök összesen</td><td class="num">${fmtAgg(currentValue)}</td><td class="num">100%</td></tr>
     ${useLoans ? `<tr><td>Hitel</td><td class="num neg">${neg(totalLoan)}</td><td class="num muted">—</td></tr>` : ''}
     ${usePledge ? `<tr><td>Zálog</td><td class="num neg">${neg(totalPledge)}</td><td class="num muted">—</td></tr>` : ''}`,
    `<tr><td>Teljes vagyon</td><td class="num ${netWorth >= 0 ? 'pos' : 'neg'}">${fmtAgg(netWorth)}</td><td></td></tr>`
  );
  const goldBody = goldRows
    .map(
      (r) => `<tr>
    <td>${esc(r.g.name || 'Arany')}</td><td>${esc(r.g.code || '—')}</td><td>${esc(r.g.form || '—')}</td><td>${esc(r.g.purity || '—')}</td>
    <td class="num">${fmtNum(r.g.grams)}</td><td class="num">${fmtAgg(r.cost)}</td><td class="num">${fmtAgg(r.val)}</td><td class="num">${pl(r.pl, r.plPct)}</td>
  </tr>`
    )
    .join('');
  const goldHtml = tbl(
    `<th>Megnevezés</th><th>Kód</th><th>Forma</th><th>Tisztaság</th><th class="num">Tömeg (g)</th><th class="num">Bekerülés</th><th class="num">Jelenlegi érték</th><th class="num">Eredmény</th>`,
    goldBody,
    goldRows.length
      ? `<tr><td colspan="5">Összesen</td><td class="num">${fmtAgg(goldCost)}</td><td class="num">${fmtAgg(goldVal)}</td><td class="num">${pl(goldPL, goldCost ? (goldPL / goldCost) * 100 : null)}</td></tr>`
      : ''
  );
  const stockBody = stockRows
    .map(
      (r) => `<tr>
    <td><strong>${esc(r.ticker)}</strong></td><td>${esc(r.name || '—')}</td><td class="num">${fmtNum(r.qty)}</td>
    <td class="num">${fmtAgg(r.avgHuf)}</td><td class="num">${fmtAgg(r.priceHuf)}</td><td class="num">${fmtAgg(r.invHuf)}</td>
    <td class="num">${fmtAgg(r.curHuf)}</td><td class="num">${pl(r.pl, r.plPct)}</td><td class="num gold">${fmtAgg(r.annualDiv)}</td>
  </tr>`
    )
    .join('');
  const stockHtml = tbl(
    `<th>Ticker</th><th>Név</th><th class="num">Db</th><th class="num">Átlag vételár</th><th class="num">Jelenlegi ár</th><th class="num">Befektetett</th><th class="num">Jelenlegi érték</th><th class="num">Eredmény</th><th class="num">Éves osztalék</th>`,
    stockBody,
    stockRows.length
      ? `<tr><td colspan="5">Összesen</td><td class="num">${fmtAgg(stockCost)}</td><td class="num">${fmtAgg(stockVal)}</td><td class="num">${pl(stockPL, stockCost ? (stockPL / stockCost) * 100 : null)}</td><td class="num gold">${fmtAgg(annualDiv)}</td></tr>`
      : ''
  );
  const divTaxHtml =
    annualDiv > 0
      ? tbl(
          `<th>Tétel</th><th class="num">Adókulcs</th><th class="num">Levont adó</th><th class="num">Összeg</th>`,
          `<tr><td>Bruttó éves osztalék</td><td class="num muted">—</td><td class="num muted">—</td><td class="num">${fmtAgg(annualDiv)}</td></tr>
     <tr><td>USA forrásadó (a bruttóból)</td><td class="num">${divUsPct}%</td><td class="num neg">${neg(divUsAmt)}</td><td class="num muted">—</td></tr>
     <tr class="subtotal"><td>USA forrásadó után</td><td class="num"></td><td class="num"></td><td class="num">${fmtAgg(divAfterUs)}</td></tr>
     <tr><td>SZJA (az USA-adó utáni összegből)</td><td class="num">${divSzjaPct}%</td><td class="num neg">${neg(divSzjaAmt)}</td><td class="num muted">—</td></tr>
     <tr><td>SZOCHO (az USA-adó utáni összegből)</td><td class="num">${divSzochoPct}%</td><td class="num neg">${neg(divSzochoAmt)}</td><td class="num muted">—</td></tr>`,
          `<tr><td>Nettó éves osztalék</td><td class="num"></td><td class="num neg">${neg(divUsAmt + divSzjaAmt + divSzochoAmt)}</td><td class="num pos">${fmtAgg(divNet)}</td></tr>`
        )
      : '';
  const cryptoBody = cryptoRows
    .map(
      (r) => `<tr>
    <td><strong>${esc(r.coin)}</strong></td><td class="num">${fmtNum(r.qty)}</td><td class="num">${fmtAgg(r.avgHuf)}</td>
    <td class="num">${fmtAgg(r.priceHuf)}</td><td class="num">${fmtAgg(r.invHuf)}</td><td class="num">${fmtAgg(r.curHuf)}</td><td class="num">${pl(r.pl, r.plPct)}</td>
  </tr>`
    )
    .join('');
  const cryptoHtml = tbl(
    `<th>Coin</th><th class="num">Db</th><th class="num">Átlag vételár</th><th class="num">Jelenlegi ár</th><th class="num">Befektetett</th><th class="num">Jelenlegi érték</th><th class="num">Eredmény</th>`,
    cryptoBody,
    cryptoRows.length
      ? `<tr><td colspan="4">Összesen</td><td class="num">${fmtAgg(cryptoCost)}</td><td class="num">${fmtAgg(cryptoVal)}</td><td class="num">${pl(cryptoPL, cryptoCost ? (cryptoPL / cryptoCost) * 100 : null)}</td></tr>`
      : ''
  );
  const loanBody = loanRows
    .map(
      (r) => `<tr>
    <td>${esc(r.l.name || '—')}</td><td class="num">${fmtAgg(r.l.orig)}</td><td class="num">${fmtAgg(r.l.monthly)}</td>
    <td class="num">${r.l.rate ? r.l.rate + '%' : '—'}</td><td class="num">${fmtAgg(r.remaining)}</td><td class="num">${esc(r.l.end || '—')}</td>
  </tr>`
    )
    .join('');
  const loanHtml = tbl(
    `<th>Név</th><th class="num">Eredeti összeg</th><th class="num">Havi törlesztő</th><th class="num">Kamat</th><th class="num">Hátralévő tartozás</th><th class="num">Lejárat</th>`,
    loanBody,
    loanRows.length
      ? `<tr><td>Összesen</td><td class="num">${fmtAgg(loanOrig)}</td><td class="num">${fmtAgg(monthlyLoan)}</td><td></td><td class="num">${fmtAgg(totalLoan)}</td><td></td></tr>`
      : ''
  );
  const pledgeBody = pledgeRows
    .map(
      (r) => `<tr>
    <td>${esc(r.p.ticketNo || '—')}</td><td>${esc(r.p.goldNames && r.p.goldNames.length ? r.p.goldNames.join(', ') : '—')}</td>
    <td class="num">${fmtAgg(r.d.principal)}</td><td class="num">${fmtAgg(r.d.cashReceived)}</td><td class="num">${fmtAgg(r.d.currentDebt)}</td>
    <td class="num">${fmtAgg(r.d.totalRepay)}</td><td class="num">${esc(r.p.end || '—')}</td>
  </tr>`
    )
    .join('');
  const pledgeHtml = tbl(
    `<th>Zálogjegy</th><th>Fedezet</th><th class="num">Kölcsön</th><th class="num">Kézhez kapott</th><th class="num">Jelenlegi tartozás</th><th class="num">Visszafizetendő</th><th class="num">Lejárat</th>`,
    pledgeBody,
    pledgeRows.length
      ? `<tr><td colspan="2">Összesen</td><td class="num">${fmtAgg(pledgePrincipal)}</td><td></td><td class="num">${fmtAgg(totalPledge)}</td><td class="num">${fmtAgg(pledgeRepay)}</td><td></td></tr>`
      : ''
  );
  const svcBody = svcRows
    .map((r) => {
      const cat = Array.isArray(r.s.cat) ? r.s.cat.join(', ') : r.s.cat || '';
      return `<tr>
      <td>${esc(r.s.name || '—')}</td><td class="muted">${esc(cat || '—')}</td><td class="num">${fmtCur(r.s.amount, r.s.currency || 'HUF')}</td>
      <td>${esc(CYCLE_LABEL[r.s.cycle] || r.s.cycle || '—')}</td><td class="num">${fmtAgg(r.monthly)}</td><td class="num">${r.next ? r.next.toLocaleDateString(LOC()) : '—'}</td>
    </tr>`;
    })
    .join('');
  const svcHtml = tbl(
    `<th>Név</th><th>Kategória</th><th class="num">Összeg</th><th>Ciklus</th><th class="num">Havi költség</th><th class="num">Köv. terhelés</th>`,
    svcBody,
    svcRows.length
      ? `<tr><td colspan="4">Havi összesen</td><td class="num">${fmtAgg(svcMonthly)}</td><td class="num muted">${fmtAgg(svcMonthly * 12)}/év</td></tr>`
      : ''
  );
  const html = `<!doctype html><html lang="hu"><head><meta charset="utf-8">
<title>Crestly_penzugyi_kimutatas_${dateFile}</title>
<style>
*{box-sizing:border-box}
body{font-family:-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:#1c1c1c;margin:0;background:#eceae4;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.doc{max-width:840px;margin:0 auto;background:#fff;padding:34px 40px}
h1{font-size:22px;margin:0 0 2px}
.brand{color:#B8873A;font-weight:700;letter-spacing:.5px;font-size:12px;text-transform:uppercase;margin-bottom:10px}
.meta{color:#666;font-size:11.5px;margin-bottom:6px;line-height:1.6}
h2{font-size:13px;text-transform:uppercase;letter-spacing:.6px;color:#B8873A;border-bottom:2px solid #e6e0d4;padding-bottom:6px;margin:28px 0 12px}
table{width:100%;border-collapse:collapse;font-size:11.5px}
th,td{text-align:left;padding:7px 8px;border-bottom:1px solid #efefef}
th{color:#999;font-weight:600;font-size:10px;text-transform:uppercase;letter-spacing:.4px}
td.num,th.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
tfoot td{font-weight:700;border-top:2px solid #ddd;border-bottom:none;background:#faf7f1}
tr.subtotal td{font-weight:700;border-top:1px solid #ddd;background:#faf9f6}
.pos{color:#1a7f4b}.neg{color:#b23b2e}.muted{color:#999}.gold{color:#B8873A}
.summary{display:grid;grid-template-columns:repeat(2,1fr);gap:0 28px}
.sum-item{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:9px 0;border-bottom:1px solid #f1f1f1;font-size:12.5px}
.sum-item .lbl{color:#555}.sum-item .val{font-weight:700;white-space:nowrap}
section{margin-bottom:6px}
thead{display:table-header-group}
tr{page-break-inside:avoid}
footer{margin-top:30px;padding-top:12px;border-top:1px solid #eee;color:#999;font-size:10px;line-height:1.6}
#vm-loader{position:fixed;inset:0;z-index:9999;background:#eceae4;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;font-size:15px;color:#555}
#vm-loader .spin{width:34px;height:34px;border:3px solid #d8d2c6;border-top-color:#B8873A;border-radius:50%;animation:vmspin 0.8s linear infinite}
@keyframes vmspin{to{transform:rotate(360deg)}}
@media print{body{background:#fff}.no-print{display:none!important}.doc{max-width:none;padding:0}@page{size:A4;margin:14mm}}
</style>
<script src="https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.2/dist/html2pdf.bundle.min.js"></script>
</head>
<body>
<div id="vm-loader"><div class="spin"></div><div>Kimutatás készítése…</div></div>
<div class="doc">
  <div class="brand">Crestly</div>
  <h1>Pénzügyi kimutatás</h1>
  <div class="meta">
    Készült: ${esc(genStr)}${acctName ? ` &nbsp;·&nbsp; ${esc(acctName)}` : ''}${acctEmail ? ` &nbsp;·&nbsp; ${esc(acctEmail)}` : ''}<br>
    Minden érték HUF-ban, a ${priceNote}. A részvény- és kriptoárfolyamok HUF-ra átváltva.
  </div>

  <section><h2>Összefoglaló</h2>${summaryHtml}</section>
  <section><h2>Vagyonmegoszlás</h2>${allocHtml}</section>
  ${divTaxHtml ? `<section><h2>Osztalék adózása (becsült)</h2>${divTaxHtml}</section>` : ''}
  ${useGold ? `<section><h2>Arany</h2>${goldHtml}</section>` : ''}
  ${useStocks ? `<section><h2>Részvények</h2>${stockHtml}</section>` : ''}
  ${useCrypto ? `<section><h2>Kripto</h2>${cryptoHtml}</section>` : ''}
  ${useLoans ? `<section><h2>Hitelek</h2>${loanHtml}</section>` : ''}
  ${usePledge ? `<section><h2>Zálog</h2>${pledgeHtml}</section>` : ''}
  ${useServices ? `<section><h2>Előfizetések / szolgáltatások</h2>${svcHtml}</section>` : ''}

  <footer>
    Ez a kimutatás tájékoztató jellegű, a Crestly alkalmazásban rögzített adatokból és az utolsó lekért árfolyamokból készült. Nem minősül pénzügyi tanácsadásnak vagy hivatalos elszámolásnak. A pontos, naprakész értékekért frissítsd az élő árfolyamokat a kimutatás előtt.
  </footer>
</div>
<script>
(function(){
  var loader=document.getElementById('vm-loader');
  function msg(t){ if(loader){ loader.innerHTML='<div style="max-width:340px;text-align:center;line-height:1.55">'+t+'</div>'; } }
  var waited=0;
  function run(){
    if(typeof html2pdf==='undefined'){
      waited+=150;
      if(waited>12000){ msg('A PDF-készítő könyvtár nem töltődött be. Ellenőrizd az internetkapcsolatot, majd próbáld újra.'); return; }
      setTimeout(run,150); return;
    }
    var el=document.querySelector('.doc');
    var opt={
      margin:[17,10,15,10],
      filename:'Crestly_penzugyi_kimutatas_${dateFile}.pdf',
      image:{type:'jpeg',quality:0.98},
      html2canvas:{scale:2,backgroundColor:'#ffffff',useCORS:true},
      jsPDF:{unit:'mm',format:'a4',orientation:'portrait'},
      pagebreak:{mode:['css','legacy'],avoid:['section','tr']}
    };
    html2pdf().set(opt).from(el).toPdf().get('pdf').then(function(pdf){
      var total=pdf.internal.getNumberOfPages();
      var pw=pdf.internal.pageSize.getWidth();
      var ph=pdf.internal.pageSize.getHeight();
      for(var i=1;i<=total;i++){
        pdf.setPage(i);
        pdf.setFont('helvetica','bold'); pdf.setFontSize(10); pdf.setTextColor(184,135,58);
        pdf.text('Crestly', pw/2, 9, {align:'center'});
        pdf.setDrawColor(228,222,210); pdf.setLineWidth(0.2); pdf.line(10,11.5,pw-10,11.5);
        pdf.setFont('helvetica','normal'); pdf.setFontSize(8.5); pdf.setTextColor(150,150,150);
        pdf.text(i+' / '+total, pw/2, ph-6, {align:'center'});
      }
      try { pdf.setProperties({ title:'Crestly penzugyi kimutatas ${dateFile}' }); } catch(e){}
      var url=URL.createObjectURL(pdf.output('blob'));
      document.body.innerHTML='';
      document.body.style.margin='0';
      var f=document.createElement('iframe');
      f.src=url;
      f.setAttribute('style','position:fixed;inset:0;width:100%;height:100%;border:0;background:#fff');
      f.setAttribute('title','Pénzügyi kimutatás');
      document.body.appendChild(f);
    }).catch(function(){ msg('Nem sikerült a PDF elkészítése. Zárd be az ablakot és próbáld újra.'); });
  }
  run();
})();
</script>
</body></html>`;
  const w = window.open('', '_blank');
  if (!w) {
    uiAlert('A kimutatás megnyitásához engedélyezd a felugró ablakokat ehhez az oldalhoz.');
    return;
  }
  w.document.open();
  w.document.write(html);
  w.document.close();
  w.focus();
}
function importData(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    let data;
    try {
      data = JSON.parse(reader.result);
    } catch (e) {
      uiAlert('Hibás mentésfájl — nem JSON formátum.');
      input.value = '';
      return;
    }
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      uiAlert('Ez nem egy érvényes Crestly mentésfájl.');
      input.value = '';
      return;
    }
    if (
      !(await uiConfirm(
        'Biztosan visszatöltöd ezt a mentést? A jelenlegi adatok felülíródnak ezen az eszközön.',
        {
          title: 'Mentés visszatöltése',
          confirmText: 'Visszatöltés'
        }
      ))
    ) {
      input.value = '';
      return;
    }
    state = data;
    _dataLoaded = true;
    normalizeState();
    save();
    renderAll();
    closeModal('data-modal');
    uiAlert('A mentés visszatöltve.');
    input.value = '';
  };
  reader.readAsText(file);
}
async function resetAllData() {
  if (
    !(await uiConfirm(
      'Biztosan törlöd az ÖSSZES adatot ebből a böngészőből (részvény, kripto, arany, hitel, zálog, szolgáltatás)? Ez a művelet nem visszavonható — előtte érdemes fájlba menteni!'
    ))
  )
    return;
  if (
    !(await uiConfirm('Utolsó megerősítés: minden ilyen adat véglegesen törlődik. Folytatod?', {
      title: 'Végleges törlés',
      confirmText: 'Végleges törlés'
    }))
  )
    return;
  const reset = {
    stocks: [],
    crypto: [],
    loans: [],
    pledges: [],
    gold: {
      grams: 0,
      cost: 0,
      pricePerGram: state.goldSpot || 28000
    },
    goldItems: [],
    services: [],
    paidInstallments: {}
  };
  ['bizIncome', 'bizExpense', 'orders', 'bizTaxRate'].forEach((k) => delete state[k]);
  Object.assign(state, reset);
  try {

    try {
      localStorage.removeItem('nettli_backup_' + currentUid);
    } catch (e) {}
    if (currentUid) await LocalStore.saveVault(state, { allowEmpty: true });
  } catch (e) {
    console.error('[Crestly] reset error:', e);
  }
  location.reload();
}
const fmt = (n) => {
  if (n === undefined || n === null || isNaN(n)) return '0 Ft';
  return Math.round(n).toLocaleString('hu-HU') + ' Ft';
};
const fmtNum = (n) =>
  parseFloat(n.toFixed(5)).toLocaleString('hu-HU', {
    maximumFractionDigits: 5
  });
function fmtCur(n, cur) {
  if (n === undefined || n === null || isNaN(n)) n = 0;
  if (cur === 'USD')
    return (
      '$' +
      n.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    );
  if (cur === 'EUR')
    return (
      '€' +
      n.toLocaleString('hu-HU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    );
  return Math.round(n).toLocaleString('hu-HU') + ' Ft';
}
const EUR_HUF_FALLBACK = 400;
const USD_HUF_FALLBACK = 370;
function eurRate() {
  return eurHuf && isFinite(eurHuf) && eurHuf > 0 ? eurHuf : EUR_HUF_FALLBACK;
}
function usdRate() {
  return usdHuf && isFinite(usdHuf) && usdHuf > 0 ? usdHuf : USD_HUF_FALLBACK;
}

function svRate(cur) {
  if (cur === 'USD') return usdRate();
  if (cur === 'EUR') return eurRate();
  return 1;
}

function serviceAmountHuf(s) {
  return (s.amount || 0) * svRate(s.currency || 'HUF');
}
function fmtAgg(huf) {
  if (huf === undefined || huf === null || isNaN(huf)) huf = 0;
  if (isEn()) {
    const eur = Math.round(huf / eurRate());
    return (eur < 0 ? '-€' : '€') + Math.abs(eur).toLocaleString('en-GB');
  }
  return Math.round(huf).toLocaleString('hu-HU') + ' Ft';
}
function fmtAggCompact(huf) {
  if (!isEn()) return fmtCompact(huf) + ' Ft';
  const eur = huf / eurRate();
  const a = Math.abs(eur),
    sign = eur < 0 ? '-' : '';
  let body;
  if (a >= 1e9) body = (a / 1e9).toFixed(2) + 'B';
  else if (a >= 1e6) body = (a / 1e6).toFixed(2) + 'M';
  else if (a >= 1e3) body = Math.round(a / 1e3) + 'k';
  else body = String(Math.round(a));
  return sign + '€' + body;
}
function nativeToUsd(v, cur) {
  if (!v) return 0;
  if (cur === 'USD') return v;
  if (cur === 'EUR') return eurHuf && usdHuf ? (v * eurHuf) / usdHuf : null;
  if (cur === 'HUF') return usdHuf ? v / usdHuf : null;
  return null;
}
function stockInvestedUsd() {
  const groups = {};
  state.stocks.forEach((s) => {
    (groups[s.ticker] = groups[s.ticker] || []).push(s);
  });
  let total = 0,
    ok = true;
  Object.values(groups).forEach((lots) => {
    const cur = lots[0].currency || 'HUF';
    const rate = rateForCurrency(cur);
    let invN = 0;
    lots.forEach((l) => {
      const avgN = l.avgNative != null ? l.avgNative : rate ? l.avg / rate : l.avg;
      invN += l.qty * avgN;
    });
    const u = nativeToUsd(invN, cur);
    if (u === null) {
      ok = false;
      return;
    }
    total += u;
  });
  return ok ? total : null;
}
function stockInvestedHuf() {
  const usd = stockInvestedUsd();
  if (usd === null || !fxReady()) return null;
  return usd * usdHuf;
}
function fmtUsd(v, withSign) {
  if (v === null || v === undefined || !isFinite(v)) return '';
  const s = fmtCur(Math.abs(v), 'USD');
  return withSign ? (v >= 0 ? '+' : '-') + s : s;
}
function rateForCurrency(cur) {
  if (cur === 'HUF' || !cur) return 1;
  if (cur === 'USD') return fxReady() ? usdHuf : null;
  if (cur === 'EUR') return eurHuf && isFinite(eurHuf) && eurHuf > 0 ? eurHuf : null;
  return 1;
}
function formatThousands(el) {
  const caretFromEnd = el.value.length - el.selectionStart;
  const digits = el.value.replace(/\D/g, '');
  el.value = digits ? parseInt(digits, 10).toLocaleString('hu-HU') : '';
  const newPos = Math.max(0, el.value.length - caretFromEnd);
  el.setSelectionRange(newPos, newPos);
}

function formatMoney(el) {
  const caretFromEnd = el.value.length - el.selectionStart;
  let s = el.value.replace(/[^\d.,]/g, '').replace(/\./g, ',');
  const i = s.indexOf(',');
  let out;
  if (i === -1) {
    const intDigits = s.replace(/,/g, '');
    out = intDigits ? parseInt(intDigits, 10).toLocaleString('hu-HU') : '';
  } else {
    const intDigits = s.slice(0, i).replace(/,/g, '');
    const decDigits = s.slice(i + 1).replace(/,/g, '').slice(0, 2);
    const intPart = intDigits ? parseInt(intDigits, 10).toLocaleString('hu-HU') : '0';
    out = intPart + ',' + decDigits;
  }
  el.value = out;
  const newPos = Math.max(0, el.value.length - caretFromEnd);
  el.setSelectionRange(newPos, newPos);
}
function parseMoney(id) {
  const el = document.getElementById(id);
  if (!el) return 0;
  let v = (el.value || '').replace(/[\s ]/g, '').replace(/\./g, ',');
  const i = v.indexOf(',');
  let intp, decp = '';
  if (i === -1) {
    intp = v.replace(/[^\d]/g, '');
  } else {
    intp = v.slice(0, i).replace(/[^\d]/g, '');
    decp = v.slice(i + 1).replace(/[^\d]/g, '').slice(0, 2);
  }
  const num = parseFloat((intp || '0') + (decp ? '.' + decp : ''));
  return isFinite(num) ? num : 0;
}
function parseAmount(id) {
  const el = document.getElementById(id);
  if (!el) return 0;
  const digits = (el.value || '').replace(/\s|\u00a0/g, '').replace(/\D/g, '');
  return parseFloat(digits) || 0;
}
function toLocalDateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
const now = () => toLocalDateStr(new Date());
const uid = () => Math.random().toString(36).slice(2, 9);
const COINGECKO_ID_MAP = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  BNB: 'binancecoin',
  SOL: 'solana',
  XRP: 'ripple',
  ADA: 'cardano',
  DOGE: 'dogecoin',
  DOT: 'polkadot',
  MATIC: 'matic-network',
  LTC: 'litecoin',
  LINK: 'chainlink',
  AVAX: 'avalanche-2',
  UNI: 'uniswap',
  ATOM: 'cosmos',
  XLM: 'stellar',
  ALGO: 'algorand',
  VET: 'vechain',
  FIL: 'filecoin',
  TRX: 'tron',
  NEAR: 'near',
  OP: 'optimism',
  ARB: 'arbitrum',
  SHIB: 'shiba-inu',
  PEPE: 'pepe',
  TON: 'the-open-network',
  SUI: 'sui',
  APT: 'aptos',
  INJ: 'injective-protocol',
  FTM: 'fantom'
};
let usdHuf = null;
let eurHuf = null;
let fxUpdatedAt = null;
let fxQuoteDate = null;
function fxReady() {
  return !!(usdHuf && isFinite(usdHuf) && usdHuf > 0);
}
async function fetchUsdHuf() {
  await fetchFxRates();
}
async function fetchCryptoPricesHuf(tickers) {
  if (!tickers.length) return {};
  const ids = tickers.map((t) => COINGECKO_ID_MAP[t.toUpperCase()] || t.toLowerCase()).join(',');
  try {
    const r = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
    );
    const data = await r.json();
    const result = {};
    tickers.forEach((t) => {
      const id = COINGECKO_ID_MAP[t.toUpperCase()] || t.toLowerCase();
      if (data[id] && data[id].usd) {
        if (fxReady()) result[t.toUpperCase()] = data[id].usd * usdHuf;
      }
    });
    return result;
  } catch (e) {
    return {};
  }
}
const CORS_PROXIES = [
  {
    build: (u) => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
    parse: (r) => r.json()
  },
  {
    build: (u) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
    parse: (r) => r.json()
  },
  {
    build: (u) => `https://api.allorigins.win/get?url=${encodeURIComponent(u)}`,
    parse: async (r) => {
      const outer = await r.json();
      return JSON.parse(outer.contents);
    }
  }
];
async function fetchJsonViaProxies(targetUrl, timeoutMs = 6000) {
  for (const proxy of CORS_PROXIES) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      const r = await fetch(proxy.build(targetUrl), {
        signal: controller.signal,
        cache: 'no-store'
      });
      clearTimeout(timer);
      if (!r.ok) continue;
      const data = await proxy.parse(r);
      if (data) return data;
    } catch (e) {}
  }
  return null;
}
async function fetchStockPriceHuf(ticker, currency) {
  try {
    const hosts = ['query1.finance.yahoo.com', 'query2.finance.yahoo.com'];
    let price = null,
      quoteCur = null;
    for (const host of hosts) {
      const url = `https://${host}/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=1d&_=${Date.now()}`;
      const data = await fetchJsonViaProxies(url);
      const meta = data?.chart?.result?.[0]?.meta;
      price = meta?.regularMarketPrice;
      if (price) {
        quoteCur = (meta.currency || '').toUpperCase() || null;
        break;
      }
    }
    if (!price) return null;
    let cur = quoteCur || currency;
    if (cur === 'GBp') {
      price = price / 100;
      cur = 'GBP';
    }
    if (cur === 'HUF') return price;
    const rate = rateForCurrency(cur) ?? rateForCurrency(currency);
    if (!rate) return null;
    return price * rate;
  } catch (e) {
    return null;
  }
}
let refreshing = false;
async function fetchStockDividendInfo(ticker) {
  try {
    const hosts = ['query1.finance.yahoo.com', 'query2.finance.yahoo.com'];
    for (const host of hosts) {
      const url = `https://${host}/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=2y&events=div&_=${Date.now()}`;
      const data = await fetchJsonViaProxies(url);
      const divs = data?.chart?.result?.[0]?.events?.dividends;
      if (divs) {
        const list = Object.values(divs)
          .filter((d) => d && typeof d.amount === 'number')
          .sort((a, b) => a.date - b.date);
        if (!list.length) continue;
        const nowSec = Date.now() / 1000;
        const byMonth = {};
        list.forEach((d) => {
          if (d.date >= nowSec - 460 * 24 * 3600) {
            const m = new Date(d.date * 1000).getMonth() + 1;
            byMonth[m] = d.amount;
          }
        });
        const paymentsLastYear = list.filter((d) => d.date >= nowSec - 365 * 24 * 3600).length;
        if (paymentsLastYear >= 10) {
          const lastAmt = list[list.length - 1].amount;
          for (let m = 1; m <= 12; m++) byMonth[m] = lastAmt;
        }
        const annual = Object.values(byMonth).reduce((a, v) => a + v, 0);
        if (annual > 0 || Object.keys(byMonth).length)
          return {
            annual,
            byMonth
          };
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}
const PRICE_REFRESH_MS = 10 * 60 * 1000;
let lastPriceRefreshAt = 0;
function maybeRefreshPrices() {
  if (!currentUid) return;
  if (document.hidden) return;
  if (refreshing) {
    if (Date.now() - lastPriceRefreshAt > 3 * 60 * 1000) refreshing = false;
    else return;
  }
  if (Date.now() - lastPriceRefreshAt < PRICE_REFRESH_MS) return;
  refreshAllPrices();
}
setInterval(maybeRefreshPrices, 60 * 1000);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) maybeRefreshPrices();
});
async function backfillCryptoNative() {
  if (!Array.isArray(state.crypto) || !state.crypto.length) return;
  let changed = false;
  for (const t of state.crypto) {
    if (t.priceNative != null) continue;
    const cur = t.currency || 'HUF';
    if (cur === 'HUF') {
      t.priceNative = t.price;
      t.feeNative = t.fee || 0;
      changed = true;
      continue;
    }
    const r = await fxRateForDate(cur, t.date);
    if (!r) continue;
    t.priceNative = t.price / r;
    t.feeNative = (t.fee || 0) / r;
    changed = true;
  }
  if (changed) {
    save();
    renderCrypto();
  }
}
async function refreshAllPrices() {
  if (refreshing) return;
  refreshing = true;
  lastPriceRefreshAt = Date.now();
  setRefreshStatus('Frissítés…');
  await fetchUsdHuf();
  const cryptoTickers = [...new Set(state.crypto.map((c) => c.coin.toUpperCase()))];
  if (cryptoTickers.length) {
    const prices = await fetchCryptoPricesHuf(cryptoTickers);
    Object.entries(prices).forEach(([ticker, price]) => {
      priceCache[ticker] = {
        price,
        updatedAt: new Date().toLocaleTimeString(LOC())
      };
    });
    for (const sym of cryptoTickers) {
      const hasName = state.crypto.some((c) => c.coin.toUpperCase() === sym && c.name);
      if (!hasName) {
        const nm = await resolveCryptoName(sym);
        if (nm)
          state.crypto.forEach((c) => {
            if (c.coin.toUpperCase() === sym && !c.name) c.name = nm;
          });
      }
    }
  }
  const failedTickers = [];
  const divInfoCache = {};
  const nameCache = {};
  for (const s of state.stocks) {
    const ticker = s.ticker.toUpperCase();
    const price = await fetchStockPriceHuf(s.ticker, s.currency);
    if (price) {
      priceCache[ticker] = {
        price,
        updatedAt: new Date().toLocaleTimeString(LOC())
      };
      s.price = price;
    } else if (!failedTickers.includes(ticker)) {
      failedTickers.push(ticker);
    }
    if (!s.name) {
      if (!(ticker in nameCache)) nameCache[ticker] = await resolveTicker(s.ticker);
      const r = nameCache[ticker];
      if (r && r.name) s.name = r.name;
    }
    if (s.divAuto && (s.divType || 'cash') === 'cash') {
      if (!(ticker in divInfoCache)) divInfoCache[ticker] = await fetchStockDividendInfo(s.ticker);
      const info = divInfoCache[ticker];
      if (info) {
        s.divAnnualNative = info.annual;
        s.divByMonthNative = info.byMonth;
      }
    }
  }
  if (state.goldItems && state.goldItems.length) {
    const gp = await fetchGoldSpotHuf();
    if (gp) {
      state.goldSpot = Math.round(gp);
      goldSpotLive = true;
      document
        .querySelectorAll('.refresh-status-gold')
        .forEach((el) => (el.textContent = '✅ ' + new Date().toLocaleTimeString(LOC())));
    }
  }
  save();
  refreshing = false;
  const okMsg = '✅ Frissítve: ' + new Date().toLocaleTimeString(LOC());
  setRefreshStatus(
    failedTickers.length ? `${okMsg} — ⚠ nem sikerült: ${failedTickers.join(', ')}` : okMsg
  );
  renderAll();
}
function setRefreshStatus(msg) {
  document.querySelectorAll('.refresh-status').forEach((el) => (el.textContent = msg));
}
function getLivePrice(ticker) {
  return priceCache[ticker.toUpperCase()]?.price || null;
}
const MODULE_TABS = {
  gold: 'gold',
  stocks: 'portfolio',
  crypto: 'crypto',
  pledge: 'pledge',
  loans: 'loan',
  services: 'services'
};
function applyModuleVisibility() {
  const m = state.modules || {};
  let activeHidden = false;
  Object.keys(MODULE_TABS).forEach((key) => {
    const btn = document.querySelector('.header-nav button[data-tab="' + MODULE_TABS[key] + '"]');
    if (!btn) return;
    const enabled = m[key] !== false;
    btn.style.display = enabled ? '' : 'none';
    if (!enabled && btn.classList.contains('active')) activeHidden = true;
  });
  document.querySelectorAll('[data-watch-module]').forEach((el) => {
    const key = el.getAttribute('data-watch-module');
    el.style.display = m[key] !== false ? '' : 'none';
  });
  if (activeHidden) showTab('dashboard');
}
function renderModuleSettings() {
  const m = state.modules || {};
  const set = (id, key) => {
    const el = document.getElementById(id);
    if (el) el.checked = m[key] !== false;
  };
  set('mod-gold', 'gold');
  set('mod-stocks', 'stocks');
  set('mod-crypto', 'crypto');
  set('mod-pledge', 'pledge');
  set('mod-loans', 'loans');
  set('mod-services', 'services');
}
function renderThemeSettings() {
  const appearance = (state.ui && state.ui.appearance) || 'auto';
  document
    .querySelectorAll('#ui-appearance-seg button')
    .forEach((b) => b.classList.toggle('active', b.getAttribute('data-val') === appearance));
  const note = document.getElementById('ui-appearance-note');
  if (note) {
    if (appearance === 'auto') {
      const h = new Date().getHours();
      const isDark = h >= 19 || h < 6;
      note.textContent = L(
        'Automatikus: 19:00 és 06:00 között sötét, egyébként világos. Most ' +
          (isDark ? 'sötét' : 'világos') +
          ' változat aktív.',
        'Auto: dark between 19:00 and 06:00, light otherwise. ' +
          (isDark ? 'Dark' : 'Light') +
          ' variant active now.'
      );
    } else if (appearance === 'dark') {
      note.textContent = L(
        'Mindig sötét változat, a napszaktól függetlenül.',
        'Always dark, regardless of time of day.'
      );
    } else {
      note.textContent = L(
        'Mindig világos változat, a napszaktól függetlenül.',
        'Always light, regardless of time of day.'
      );
    }
  }
}
function setAppearance(val) {
  if (['auto', 'light', 'dark'].indexOf(val) < 0) return;
  state.ui = Object.assign({}, state.ui, {
    appearance: val
  });
  save();
  applyThemeByTime();
  renderThemeSettings();
  accMsg('acc-theme-msg', '✓ Megjelenés elmentve.', false);
}
function applyActionVisibility() {
  const ui = state.ui || {};
  document.body.classList.toggle('hide-edit-btns', ui.editBtns === false);
  document.body.classList.toggle('hide-del-btns', ui.delBtns === false);
}
function renderActionSettings() {
  const ui = state.ui || {};
  const e = document.getElementById('ui-edit-btns');
  if (e) e.checked = ui.editBtns !== false;
  const d = document.getElementById('ui-del-btns');
  if (d) d.checked = ui.delBtns !== false;
}
function updateActionButtons() {
  const val = (id) => {
    const el = document.getElementById(id);
    return el ? el.checked : true;
  };
  state.ui = Object.assign({}, state.ui, {
    editBtns: val('ui-edit-btns'),
    delBtns: val('ui-del-btns')
  });
  save();
  applyActionVisibility();
  accMsg('acc-ui-msg', '✓ Beállítás elmentve.', false);
}
function updateModules() {
  const val = (id) => {
    const el = document.getElementById(id);
    return el ? el.checked : true;
  };
  state.modules = {
    gold: val('mod-gold'),
    stocks: val('mod-stocks'),
    crypto: val('mod-crypto'),
    pledge: val('mod-pledge'),
    loans: val('mod-loans'),
    services: val('mod-services')
  };
  save();
  applyModuleVisibility();
  renderAll();
  accMsg('acc-mod-msg', '✓ Beállítás elmentve.', false);
}
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach((t) => t.classList.remove('active'));
  document.querySelectorAll('.header-nav button').forEach((b) => b.classList.remove('active'));
  const tab = document.getElementById('tab-' + id);
  if (tab) tab.classList.add('active');
  const activeBtn = document.querySelector('.header-nav button[data-tab="' + id + '"]');
  if (activeBtn) {
    activeBtn.classList.add('active');
    const label = document.getElementById('nav-current-label');
    if (label) label.textContent = activeBtn.textContent.trim();
  }
  closeNav();
  if (typeof closeLoanDetail === 'function') closeLoanDetail();
  if (typeof closeStockDetail === 'function') closeStockDetail();
  if (typeof closeCryptoDetail === 'function') closeCryptoDetail();
  if (typeof closePledgeDetail === 'function') closePledgeDetail();
  renderAll();
}
function toggleNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('hamburger-btn');
  const open = nav.classList.toggle('open');
  if (btn) btn.classList.toggle('open', open);
  if (open) {
    setTimeout(() => document.addEventListener('click', navOutsideClick), 0);
  } else {
    document.removeEventListener('click', navOutsideClick);
  }
}
function navOutsideClick(e) {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('hamburger-btn');
  if (nav && !nav.contains(e.target) && btn && !btn.contains(e.target)) {
    closeNav();
  }
}
function closeNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('hamburger-btn');
  if (nav) nav.classList.remove('open');
  if (btn) btn.classList.remove('open');
  document.removeEventListener('click', navOutsideClick);
}
let _bodyScrollY = 0;
function syncModalScrollLock() {
  const rm = document.getElementById('redeem-modal');
  const redeemOpen = !!rm && rm.style.display && rm.style.display !== 'none';
  const anyOpen = !!document.querySelector('.modal.open') || redeemOpen;
  const locked = document.body.classList.contains('modal-open');
  if (anyOpen && !locked) {
    _bodyScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.top = `-${_bodyScrollY}px`;
    document.body.classList.add('modal-open');
  } else if (!anyOpen && locked) {
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo(0, _bodyScrollY);
  }
}
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
  syncModalScrollLock();
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
  syncModalScrollLock();
}
function updateStockLabels() {
  const cur = document.getElementById('st-currency').value;
  const sym = cur === 'HUF' ? 'Ft' : cur;
  document.getElementById('st-avg-label').textContent = `Vételi ár (${sym})`;
  const info = document.getElementById('st-fx-info');
  if (cur !== 'HUF') {
    info.style.display = 'block';
    const rate = rateForCurrency(cur);
    info.innerHTML = rate
      ? `Az árak a vétel dátumához tartozó (történeti) árfolyammal lesznek HUF-ra váltva. Mai árfolyam: 1 ${cur} ≈ <span id="st-fx-rate">${Math.round(rate)}</span> Ft`
      : `<span style="color:var(--red)">Az árfolyam még nem érhető el — a rögzítés előtt frissítsd az árfolyamot.</span>`;
  } else {
    info.style.display = 'none';
  }
}
function updateCryptoLabels() {
  const cur = document.getElementById('cr-currency').value;
  const sym = cur === 'HUF' ? 'Ft' : cur;
  document.getElementById('cr-price-label').textContent = `Ár (${sym})`;
  document.getElementById('cr-fee-label').textContent = `Díj (${sym})`;
  const info = document.getElementById('cr-fx-info');
  if (cur !== 'HUF') {
    const rate = rateForCurrency(cur);
    info.style.display = 'block';
    document.getElementById('cr-fx-cur').textContent = cur;
    document.getElementById('cr-fx-rate').textContent = rate ? Math.round(rate) : '—';
  } else {
    info.style.display = 'none';
  }
}
function fxRateIsSane(usd, eur) {
  return (
    usd &&
    isFinite(usd) &&
    usd > 150 &&
    usd < 900 &&
    (!eur || (isFinite(eur) && eur > 150 && eur < 1000))
  );
}
async function fetchFxRates() {
  const url = 'https://api.frankfurter.dev/v1/latest?from=USD&to=HUF,EUR';
  let d = null;
  try {
    const r = await fetch(url + '&_=' + Date.now(), {
      cache: 'no-store'
    });
    if (r.ok) d = await r.json();
  } catch (e) {}
  if (!d || !d.rates || !d.rates.HUF) {
    try {
      d = await fetchJsonViaProxies(url);
    } catch (e) {
      d = null;
    }
  }
  if (!d || !d.rates || !d.rates.HUF) return false;
  const newUsd = d.rates.HUF;
  const newEur = d.rates.EUR ? newUsd / d.rates.EUR : null;
  if (!newUsd || !isFinite(newUsd) || newUsd <= 0) return false;
  if (!fxRateIsSane(newUsd, newEur)) return false;
  usdHuf = newUsd;
  eurHuf = newEur;
  fxUpdatedAt = new Date().toISOString();
  fxQuoteDate = d.date || null;
  state.usdHuf = usdHuf;
  state.eurHuf = eurHuf;
  state.fxUpdatedAt = fxUpdatedAt;
  state.fxQuoteDate = fxQuoteDate;
  save();
  updateFxLabel();
  return true;
}
function fxAgeHours() {
  if (!fxUpdatedAt) return null;
  const t = Date.parse(fxUpdatedAt);
  if (isNaN(t)) return null;
  return (Date.now() - t) / 36e5;
}
function updateFxLabel() {
  const el = document.getElementById('fx-info');
  if (!el) return;
  if (!fxReady()) {
    el.innerHTML =
      '<span style="color:var(--red)">Árfolyam még nem érhető el (API) — az átváltott értékek hiányozhatnak.</span>';
    return;
  }
  const age = fxAgeHours();
  const stale = age === null || age > 24;
  const rate = usdHuf.toLocaleString('hu-HU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  let when;
  if (age === null) when = L('ismeretlen frissítés', 'unknown update');
  else if (age < 1) when = L('most frissítve', 'just now');
  else if (age < 24) when = Math.round(age) + L(' órája frissítve', 'h ago');
  else when = Math.round(age / 24) + L(' napja frissítve', 'd ago');
  const quote = fxQuoteDate ? ` · ${L('EKB jegyzés:', 'ECB quote:')} ${fxQuoteDate}` : '';
  el.innerHTML =
    `<span${stale ? ' style="color:var(--red)"' : ''}>1 USD = ${rate} Ft</span>` +
    `<span style="color:var(--muted)"> · ${when}${quote}</span>`;
}
let fxHistoryCache = {};
async function fxRateForDate(currency, dateStr) {
  if (currency === 'HUF') return 1;
  const today = now();
  if (!dateStr || dateStr >= today) {
    return rateForCurrency(currency);
  }
  if (!fxHistoryCache[dateStr]) {
    try {
      const r = await fetch(`https://api.frankfurter.dev/v1/${dateStr}?from=USD&to=HUF,EUR`);
      const d = await r.json();
      if (d.rates?.HUF) {
        const usd = d.rates.HUF;
        const eur = d.rates.EUR ? usd / d.rates.EUR : eurHuf;
        fxHistoryCache[dateStr] = {
          usd,
          eur
        };
      }
    } catch (e) {}
  }
  const h = fxHistoryCache[dateStr];
  if (!h) return rateForCurrency(currency);
  return currency === 'USD' ? h.usd : h.eur;
}
async function resolveTicker(query) {
  const q = (query || '').trim();
  if (!q) return null;
  try {
    const hosts = ['query1.finance.yahoo.com', 'query2.finance.yahoo.com'];
    for (const host of hosts) {
      const url = `https://${host}/v1/finance/search?q=${encodeURIComponent(q)}&quotesCount=6&newsCount=0&_=${Date.now()}`;
      const data = await fetchJsonViaProxies(url);
      const quotes = (data && data.quotes) || [];
      const best =
        quotes.find((x) => x.symbol && (x.quoteType === 'EQUITY' || x.quoteType === 'ETF')) ||
        quotes.find((x) => x.symbol);
      if (best && best.symbol)
        return {
          symbol: best.symbol.toUpperCase(),
          name: best.longname || best.shortname || q
        };
    }
    return null;
  } catch (e) {
    return null;
  }
}
let stockEditId = null;
function openStockAdd() {
  stockEditId = null;
  ['st-name', 'st-qty', 'st-avg'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const cur = document.getElementById('st-currency');
  if (cur) cur.value = 'USD';
  const dt = document.getElementById('st-date');
  if (dt) dt.value = now();
  const msg = document.getElementById('st-add-msg');
  if (msg) msg.textContent = '';
  const t = document.getElementById('stock-modal-title');
  if (t) t.textContent = 'Részvény hozzáadása';
  const b = document.getElementById('st-add-btn');
  if (b) b.textContent = '+ Hozzáadás';
  openModal('stock-modal');
}
function openStockEdit(id) {
  const s = state.stocks.find((x) => x.id === id);
  if (!s) return;
  stockEditId = id;
  const rate = rateForCurrency(s.currency || 'HUF');
  const avgN = s.avgNative != null ? s.avgNative : rate ? s.avg / rate : s.avg;
  document.getElementById('st-name').value = s.ticker || '';
  document.getElementById('st-qty').value = s.qty || '';
  const cur = document.getElementById('st-currency');
  if (cur) cur.value = s.currency || 'USD';
  document.getElementById('st-avg').value = avgN || '';
  const dt = document.getElementById('st-date');
  if (dt) dt.value = s.buyDate || now();
  const msg = document.getElementById('st-add-msg');
  if (msg) msg.textContent = '';
  const t = document.getElementById('stock-modal-title');
  if (t) t.textContent = 'Részvény szerkesztése';
  const b = document.getElementById('st-add-btn');
  if (b) b.textContent = 'Mentés';
  openModal('stock-modal');
}
async function addStock() {
  const ticker = (document.getElementById('st-name').value || '').trim().toUpperCase();
  const qty = parseFloat(document.getElementById('st-qty').value) || 0;
  const currency = document.getElementById('st-currency').value;
  const avgNative = parseFloat(document.getElementById('st-avg').value) || 0;
  const buyDate = document.getElementById('st-date').value || now();
  const msg = document.getElementById('st-add-msg');
  const btn = document.getElementById('st-add-btn');
  const setMsg = (t, c) => {
    if (msg) {
      msg.textContent = t;
      msg.style.color = c || 'var(--muted)';
    }
  };
  if (!ticker || !qty || !avgNative) {
    setMsg('Adj meg tickert, darabszámot és vételi árat.', 'var(--red)');
    return;
  }
  if (btn) btn.disabled = true;
  setMsg('Adatok lekérése…');
  let name = '';
  try {
    const r = await resolveTicker(ticker);
    if (r && r.name) name = r.name;
  } catch (e) {}
  const fxRate = await fxRateForDate(currency, buyDate);
  if (!fxRate) {
    setMsg(
      'Az árfolyam nem érhető el, ezért a rögzítés most nem lehetséges. Próbáld újra kicsit később.',
      'var(--red)'
    );
    if (btn) btn.disabled = false;
    return;
  }
  const avg = avgNative * fxRate;
  if (stockEditId) {
    const s = state.stocks.find((x) => x.id === stockEditId);
    if (s)
      Object.assign(s, {
        ticker,
        name: name || s.name || '',
        qty,
        avg,
        avgNative,
        currency,
        buyDate
      });
  } else {
    state.stocks.push({
      id: uid(),
      ticker,
      name,
      qty,
      avg,
      avgNative,
      price: avg,
      divYield: null,
      divType: 'cash',
      divAuto: true,
      currency,
      buyDate
    });
  }
  save();
  stockEditId = null;
  document.getElementById('st-name').value = '';
  document.getElementById('st-qty').value = '';
  document.getElementById('st-avg').value = '';
  document.getElementById('st-date').value = now();
  setMsg('');
  if (btn) {
    btn.disabled = false;
    btn.textContent = '+ Hozzáadás';
  }
  const t = document.getElementById('stock-modal-title');
  if (t) t.textContent = 'Részvény hozzáadása';
  closeModal('stock-modal');
  renderAll();
  refreshAllPrices();
}
async function deleteStock(id) {
  const l = state.stocks.find((x) => x.id === id);
  if (!l) return;
  const label = `${l.ticker} — ${fmtNum(l.qty)} db${l.buyDate ? ' (' + l.buyDate + ')' : ''}`;
  if (!(await uiConfirm(`Biztosan törlöd ezt a tételt?\n\n${label}`))) return;
  state.stocks = state.stocks.filter((s) => s.id !== id);
  save();
  renderAll();
}
let stockSellId = null;
function openStockSell(id) {
  const s = state.stocks.find((x) => x.id === id);
  if (!s) return;
  stockSellId = id;
  const cur = s.currency || 'HUF';
  const rate = rateForCurrency(cur);
  const avgN = s.avgNative != null ? s.avgNative : rate ? s.avg / rate : s.avg;
  const liveHuf = getLivePrice(s.ticker) || s.price;
  const curPriceN = rate ? liveHuf / rate : liveHuf;
  const sym = cur === 'HUF' ? 'Ft' : cur;
  document.getElementById('ss-info').innerHTML =
    `<strong style="color:var(--text);font-size:14px">${s.ticker}</strong>${s.name ? ' · ' + escHtml(s.name) : ''} · ${L('elérhető:', 'available:')} <strong style="color:var(--accent2)">${fmtNum(s.qty)}</strong> ${L('db', 'pcs')} · ${L('átlagár:', 'avg. price:')} ${fmtCur(avgN, cur)}`;
  document.getElementById('ss-price-label').textContent =
    `${L('Eladási ár / db', 'Sale price / unit')} (${sym})`;
  document.getElementById('ss-qty').value = s.qty;
  document.getElementById('ss-price').value = curPriceN ? curPriceN.toFixed(2) : '';
  document.getElementById('ss-date').value = now();
  document.getElementById('ss-error').style.display = 'none';
  updateStockSalePL();
  openModal('stock-sale-modal');
}
function updateStockSalePL() {
  const s = state.stocks.find((x) => x.id === stockSellId);
  if (!s) return;
  const cur = s.currency || 'HUF';
  const rate = rateForCurrency(cur);
  const avgN = s.avgNative != null ? s.avgNative : rate ? s.avg / rate : s.avg;
  const qty = parseFloat(document.getElementById('ss-qty').value) || 0;
  const price = parseFloat(document.getElementById('ss-price').value) || 0;
  const plN = qty * (price - avgN);
  const el = document.getElementById('ss-pl');
  if (el)
    el.innerHTML = `Eredmény (P&L): <strong class="${plN >= 0 ? 'green' : 'red'}">${plN >= 0 ? '+' : ''}${fmtCur(plN, cur)}</strong>`;
}
async function confirmStockSell() {
  const s = state.stocks.find((x) => x.id === stockSellId);
  if (!s) return;
  const qty = parseFloat(document.getElementById('ss-qty').value) || 0;
  const priceNative = parseFloat(document.getElementById('ss-price').value) || 0;
  const errEl = document.getElementById('ss-error');
  if (!qty || !priceNative) {
    errEl.textContent = 'Adj meg eladott mennyiséget és eladási árat.';
    errEl.style.display = 'block';
    return;
  }
  if (qty > s.qty + 1e-9) {
    errEl.textContent = `Legfeljebb ${fmtNum(s.qty)} db adható el.`;
    errEl.style.display = 'block';
    return;
  }
  s.qty -= qty;
  if (s.qty <= 1e-9) state.stocks = state.stocks.filter((x) => x.id !== s.id);
  save();
  closeModal('stock-sale-modal');
  stockSellId = null;
  renderAll();
}
async function deleteStockFromSale() {
  if (!stockSellId) return;
  if (!(await uiConfirm('Biztosan törlöd ezt a részvénytételt (eladás rögzítése nélkül)?'))) return;
  state.stocks = state.stocks.filter((x) => x.id !== stockSellId);
  save();
  closeModal('stock-sale-modal');
  stockSellId = null;
  renderAll();
}
function stockDivYield(s, currentPrice) {
  if (s.divAuto && s.divAnnualNative != null && currentPrice) {
    const rate = rateForCurrency(s.currency || 'HUF');
    return ((s.divAnnualNative * rate) / currentPrice) * 100;
  }
  if (s.divYield != null) return s.divYield;
  return s.div && currentPrice ? (s.div / currentPrice) * 100 : 0;
}
function stockIsCash(s) {
  return (s.divType || 'cash') === 'cash';
}
function stockPaysNoDiv(s) {
  return s.divType === 'none';
}
function stockTypeShort(s) {
  if (s.divAuto) {
    const y = stockDivYield(s, getLivePrice(s.ticker) || s.price);
    return y > 0 ? 'Dist' : '—';
  }
  const t = s.divType || 'cash';
  if (t === 'cash') return 'Dist';
  if (t === 'acc') return 'Acc';
  return '—';
}
const DIV_MONTHS_SET = {
  1: [1, 4, 7, 10],
  2: [2, 5, 8, 11],
  3: [3, 6, 9, 12]
};
const MONTH_ABBR = [
  '',
  'Jan',
  'Feb',
  'Már',
  'Ápr',
  'Máj',
  'Jún',
  'Júl',
  'Aug',
  'Szep',
  'Okt',
  'Nov',
  'Dec'
];
function stockDivFreqLabel(s) {
  if (s.divAuto) return 'Osztalék automatikusan követve (Yahoo)';
  if (stockPaysNoDiv(s)) return 'Nem fizet osztalékot';
  if (!stockIsCash(s)) return 'Visszaforgató (akkumulációs)';
  const f = s.divFreq || 'yearly';
  if (f === 'monthly') return 'Havonta';
  if (f === 'quarterly') {
    const set = DIV_MONTHS_SET[s.divMonths || '3'] || DIV_MONTHS_SET['3'];
    return 'Negyedévente (' + set.map((m) => MONTH_ABBR[m]).join(', ') + ')';
  }
  return 'Évente';
}
function annualStockDividendHuf() {
  return state.stocks.reduce((a, s) => {
    if (!stockIsCash(s)) return a;
    const cp = getLivePrice(s.ticker) || s.price;
    return a + s.qty * cp * (stockDivYield(s, cp) / 100);
  }, 0);
}
function dividendTaxBreakdown(gross) {
  const t = state.taxSettings || {
    us: 0,
    szja: 0,
    szocho: 0
  };
  const usPct = Number(t.us) || 0;
  const szjaPct = Number(t.szja) || 0;
  const szochoPct = Number(t.szocho) || 0;
  const g = Number(gross) || 0;
  const usAmt = (g * usPct) / 100;
  const afterUs = g - usAmt;
  const szjaAmt = (afterUs * szjaPct) / 100;
  const szochoAmt = (afterUs * szochoPct) / 100;
  const net = Math.max(0, afterUs - szjaAmt - szochoAmt);
  const totalTax = usAmt + szjaAmt + szochoAmt;
  return {
    gross: g,
    usPct,
    usAmt,
    afterUs,
    szjaPct,
    szjaAmt,
    szochoPct,
    szochoAmt,
    net,
    totalTax
  };
}
function netDividend(gross) {
  return dividendTaxBreakdown(gross).net;
}
function renderStocks() {
  const tbody = document.getElementById('stock-tbody');
  updateFxLabel();
  document.getElementById('stock-refresh-bar').innerHTML = '';
  if (!state.stocks.length) {
    tbody.innerHTML =
      '<tr><td colspan="10" style="color:var(--muted);text-align:center;padding:20px">Nincs részvény</td></tr>';
    document.getElementById('st-sum-invested').textContent = fmtAgg(0);
    document.getElementById('st-sum-current').textContent = fmtAgg(0);
    const plEl0 = document.getElementById('st-sum-pl');
    plEl0.textContent = fmtAgg(0);
    plEl0.className = 'stat-value';
    document.getElementById('st-sum-pl-card').className = 'card card-stat-dark';
    document.getElementById('st-sum-div').textContent = fmtAgg(0);
    ['st-sum-invested-usd', 'st-sum-current-usd', 'st-sum-pl-usd', 'st-sum-div-usd'].forEach(
      (id) => {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
      }
    );
    return;
  }
  const groups = {};
  state.stocks.forEach((s) => {
    (groups[s.ticker] = groups[s.ticker] || []).push(s);
  });
  let totalInvested = 0,
    totalCurrent = 0,
    totalDiv = 0;
  const groupArr = Object.entries(groups)
    .map(([ticker, lots]) => {
      const first = lots[0];
      const cur = first.currency || 'HUF';
      const rate = rateForCurrency(cur);
      const currentPriceHuf = getLivePrice(ticker) || first.price;
      let qty = 0,
        invHuf = 0,
        invN = 0;
      lots.forEach((l) => {
        qty += l.qty;
        invHuf += l.qty * l.avg;
        const avgN = l.avgNative != null ? l.avgNative : rate ? l.avg / rate : l.avg;
        invN += l.qty * avgN;
      });
      const currentHuf = qty * currentPriceHuf;
      const divYield = stockDivYield(first, currentPriceHuf);
      totalInvested += invHuf;
      totalCurrent += currentHuf;
      totalDiv += stockIsCash(first) ? (currentHuf * divYield) / 100 : 0;
      const avgN = qty ? invN / qty : 0;
      const curPriceN = rate ? currentPriceHuf / rate : currentPriceHuf;
      const currentN = qty * curPriceN;
      const plN = currentN - invN;
      const plPct = invN ? (plN / invN) * 100 : 0;
      const annualDivN = stockIsCash(first) ? (currentN * divYield) / 100 : 0;
      return {
        ticker,
        first,
        lots,
        cur,
        qty,
        avgN,
        curPriceN,
        investedN: invN,
        currentN,
        plN,
        plPct,
        annualDivN,
        divYield,
        currentHuf
      };
    })
    .sort((a, b) => b.currentHuf - a.currentHuf);
  tbody.innerHTML = groupArr
    .map((g) => {
      const s = g.first;
      return `
      <tr style="cursor:pointer" onclick="openStockDetail('${g.ticker}')">
        <td>
          <strong>${g.ticker}</strong>
          ${s.name ? `<div style="font-size:10px;color:var(--muted)">${escHtml(s.name)}</div>` : ''}
          <div style="font-size:10px;color:var(--muted);margin-top:2px">${g.lots.length} vétel ›</div>
        </td>
        <td><span class="badge ${stockTypeShort(s) === 'Dist' ? 'badge-green' : 'badge-gray'}" title="${stockDivFreqLabel(s)}">${stockTypeShort(s)}</span></td>
        <td>${fmtNum(g.qty)}</td>
        <td>${fmtCur(g.avgN, g.cur)}</td>
        <td>${fmtCur(g.curPriceN, g.cur)}</td>
        <td>${fmtCur(g.investedN, g.cur)}</td>
        <td><strong>${fmtCur(g.currentN, g.cur)}</strong></td>
        <td class="${g.plN >= 0 ? 'green' : 'red'}" style="font-weight:500">${g.plN >= 0 ? '+' : ''}${fmtCur(g.plN, g.cur)} <span style="font-size:10px">(${g.plPct.toFixed(1)}%)</span></td>
        <td class="yellow">${fmtCur(g.annualDivN, g.cur)}</td>
        <td>${g.divYield.toFixed(2)}%</td>
      </tr>
    `;
    })
    .join('');
  let usdInvN = 0,
    usdCurN = 0,
    usdDivN = 0,
    usdOk = true;
  groupArr.forEach((g) => {
    const i = nativeToUsd(g.investedN, g.cur);
    const c = nativeToUsd(g.currentN, g.cur);
    const d = nativeToUsd(g.annualDivN, g.cur);
    if (i === null || c === null || d === null) {
      usdOk = false;
      return;
    }
    usdInvN += i;
    usdCurN += c;
    usdDivN += d;
  });
  const usdPLN = usdCurN - usdInvN;
  const canHuf = usdOk && fxReady();
  const hufInvested = canHuf ? usdInvN * usdHuf : null;
  const hufCurrent = canHuf ? usdCurN * usdHuf : null;
  const hufPL = canHuf ? usdPLN * usdHuf : null;
  const hufDiv = canHuf ? usdDivN * usdHuf : null;
  const setBig = (id, val, withSign) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = val === null ? '—' : (withSign && val >= 0 ? '+' : '') + fmtAgg(val);
  };
  setBig('st-sum-invested', hufInvested);
  setBig('st-sum-current', hufCurrent);
  setBig('st-sum-pl', hufPL, true);
  const plEl = document.getElementById('st-sum-pl');
  plEl.className = 'stat-value ' + (hufPL === null ? '' : hufPL >= 0 ? 'green' : 'red');
  document.getElementById('st-sum-pl-card').className =
    'card ' +
    (hufPL === null ? 'card-stat-dark' : hufPL >= 0 ? 'card-stat-green' : 'card-stat-red');
  const setSub = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  };
  setSub('st-sum-invested-usd', usdOk ? fmtUsd(usdInvN) : '');
  setSub('st-sum-current-usd', usdOk ? fmtUsd(usdCurN) : '');
  setSub('st-sum-pl-usd', usdOk ? fmtUsd(usdPLN, true) : '');
  document.getElementById('st-sum-div').textContent = hufDiv === null ? '—' : fmtAgg(hufDiv);
  setSub('st-sum-div-usd', usdOk ? fmtUsd(usdDivN) : '');
  renderDividendCalendar();
  if (_openStockTicker) {
    const dv = document.getElementById('stock-detail-view');
    if (dv && dv.style.display !== 'none') {
      if (groups[_openStockTicker]) {
        const c = document.getElementById('stock-detail-content');
        if (c) c.innerHTML = buildStockDetailHTML(_openStockTicker);
      } else {
        closeStockDetail();
      }
    }
  }
}
let _openStockTicker = null;
function manualDivMonthMap(s) {
  if (!stockIsCash(s) || s.divAuto) return null;
  const priceHuf = getLivePrice(s.ticker) || s.price;
  const rate = rateForCurrency(s.currency || 'HUF');
  const priceN = rate ? priceHuf / rate : priceHuf;
  const yieldPct = stockDivYield(s, priceHuf);
  const annualPerShareN = (priceN * yieldPct) / 100;
  if (annualPerShareN <= 0) return null;
  const freq = s.divFreq || 'yearly';
  let months;
  if (freq === 'monthly') months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  else if (freq === 'quarterly') months = DIV_MONTHS_SET[s.divMonths || '3'] || DIV_MONTHS_SET['3'];
  else months = [12];
  const perPayment = annualPerShareN / months.length;
  const map = {};
  months.forEach((m) => (map[m] = perPayment));
  return map;
}
function renderDividendCalendar() {
  const targets = ['div-calendar', 'div-calendar-dash']
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  if (!targets.length) return;
  const setHtml = (html) =>
    targets.forEach((el) => {
      el.innerHTML = html;
    });
  const monthNames = [
    'Január',
    'Február',
    'Március',
    'Április',
    'Május',
    'Június',
    'Július',
    'Augusztus',
    'Szeptember',
    'Október',
    'November',
    'December'
  ];
  const groups = {};
  state.stocks.forEach((s) => {
    (groups[s.ticker] = groups[s.ticker] || []).push(s);
  });
  const byMonth = {};
  for (let m = 1; m <= 12; m++) byMonth[m] = [];
  let anyData = false;
  Object.entries(groups).forEach(([ticker, lots]) => {
    const first = lots[0];
    if (!stockIsCash(first)) return;
    const qty = lots.reduce((a, l) => a + l.qty, 0);
    const cur = first.currency || 'HUF';
    const monthMap =
      first.divAuto && first.divByMonthNative ? first.divByMonthNative : manualDivMonthMap(first);
    if (!monthMap) return;
    const monthCount = Object.keys(monthMap).length;
    Object.entries(monthMap).forEach(([m, perShareN]) => {
      const usd = nativeToUsd(perShareN * qty, cur);
      if (usd === null || !fxReady()) return;
      const amountHuf = Math.round(usd * usdHuf);
      if (amountHuf > 0) {
        byMonth[+m].push({
          ticker,
          amountHuf,
          monthCount
        });
        anyData = true;
      }
    });
  });
  if (!anyData) {
    setHtml(
      '<div style="color:var(--muted);font-size:12px;padding:8px 0">Még nincs ismert osztalék-ütemezés. Frissíts (élő árfolyam), hogy a rendszer lehúzza az osztalékfizető részvények fizetési hónapjait.</div>'
    );
    return;
  }
  const grandTotal = Object.values(byMonth).reduce(
    (a, arr) => a + arr.reduce((x, i) => x + i.amountHuf, 0),
    0
  );
  setHtml(
    `<div style="font-size:11px;color:var(--muted);margin-bottom:12px">${L('Éves osztalék összesen:', 'Total annual dividend:')} <strong class="yellow">${fmtAgg(grandTotal)}</strong> ${L('(a jelenlegi pozíciók és a legutóbbi kifizetések alapján)', '(based on current positions and the latest payouts)')}</div>` +
      `<div class="div-cal-grid">` +
      monthNames
        .map((name, i) => {
          const m = i + 1;
          const items = byMonth[m].sort(
            (a, b) => b.monthCount - a.monthCount || b.amountHuf - a.amountHuf
          );
          const total = items.reduce((a, x) => a + x.amountHuf, 0);
          const active = items.length > 0;
          return `<div style="border:1px solid var(--border);border-radius:10px;padding:11px;${active ? '' : 'opacity:0.45'}">
        <div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 6px;margin-bottom:${active ? '8px' : '0'}">
          <span style="font-weight:700;font-size:12px">${name}</span>
          <span class="yellow" style="font-weight:700;font-size:12px;white-space:nowrap;margin-left:auto">${active ? fmtAgg(total) : '—'}</span>
        </div>
        ${items.map((x) => `<div style="display:flex;justify-content:space-between;font-size:11px;margin-top:4px;gap:6px"><span style="font-weight:600">${x.ticker}</span><span style="color:var(--muted);white-space:nowrap">${fmtAgg(x.amountHuf)}</span></div>`).join('')}
      </div>`;
        })
        .join('') +
      `</div>`
  );
}
function openStockDetail(ticker) {
  if (!state.stocks.some((s) => s.ticker === ticker)) return;
  _openStockTicker = ticker;
  const lv = document.getElementById('stock-list-view');
  const dv = document.getElementById('stock-detail-view');
  const addBtn = document.getElementById('stock-add-btn');
  if (lv) lv.style.display = 'none';
  if (dv) dv.style.display = 'block';
  if (addBtn) addBtn.style.display = 'none';
  const c = document.getElementById('stock-detail-content');
  if (c) c.innerHTML = buildStockDetailHTML(ticker);
}
function closeStockDetail() {
  _openStockTicker = null;
  const lv = document.getElementById('stock-list-view');
  const dv = document.getElementById('stock-detail-view');
  const addBtn = document.getElementById('stock-add-btn');
  if (lv) lv.style.display = 'block';
  if (dv) dv.style.display = 'none';
  if (addBtn) addBtn.style.display = '';
}
function sellCurrentStock() {
  if (!_openStockTicker) return;
  const lots = state.stocks
    .filter((s) => s.ticker === _openStockTicker)
    .sort((a, b) => (a.buyDate || '').localeCompare(b.buyDate || ''));
  if (lots.length) openStockSell(lots[0].id);
}
function buildStockDetailHTML(ticker) {
  const lots = state.stocks.filter((s) => s.ticker === ticker);
  if (!lots.length) return '';
  const first = lots[0];
  const cur = first.currency || 'HUF';
  const rate = rateForCurrency(cur);
  const currentPriceHuf = getLivePrice(ticker) || first.price;
  const curPriceN = rate ? currentPriceHuf / rate : currentPriceHuf;
  let totQty = 0,
    totInvHuf = 0,
    totInvN = 0,
    totCurHuf = 0;
  const rowsHtml = [...lots]
    .sort((a, b) => (a.buyDate || '').localeCompare(b.buyDate || ''))
    .map((l) => {
      const invHuf = l.qty * l.avg;
      const avgN = l.avgNative != null ? l.avgNative : rate ? l.avg / rate : l.avg;
      const invN = l.qty * avgN;
      const curN = l.qty * curPriceN;
      const curHuf = l.qty * currentPriceHuf;
      const plN = curN - invN;
      const plPct = invN ? (plN / invN) * 100 : 0;
      totQty += l.qty;
      totInvHuf += invHuf;
      totInvN += invN;
      totCurHuf += curHuf;
      return `<tr>
      <td style="color:var(--muted)">${l.buyDate || '—'}</td>
      <td>${fmtNum(l.qty)}</td>
      <td>${fmtCur(avgN, cur)}</td>
      <td>${fmtCur(invN, cur)}</td>
      <td class="cyan">${fmtCur(curN, cur)}</td>
      <td class="${plN >= 0 ? 'green' : 'red'}">${plN >= 0 ? '+' : ''}${fmtCur(plN, cur)} <span style="font-size:10px">(${plPct.toFixed(1)}%)</span></td>
      <td><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-sm btn-secondary js-edit-btn" onclick="openStockEdit('${l.id}')" title="Szerkesztés">✎</button><button class="btn btn-sm btn-secondary js-del-btn" onclick="deleteStock('${l.id}')">Téves rögzítés</button></div></td>
    </tr>`;
    })
    .join('');
  const avgN = totQty ? totInvN / totQty : 0;
  const totPLHuf = totCurHuf - totInvHuf;
  const totPLN = rate ? totPLHuf / rate : totPLHuf;
  const totCurN = rate ? totCurHuf / rate : totCurHuf;
  const totPLPct = totInvHuf ? (totPLHuf / totInvHuf) * 100 : 0;
  const divYield = stockDivYield(first, currentPriceHuf);
  const annualDivHuf = stockIsCash(first) ? (totCurHuf * divYield) / 100 : 0;
  const typeShort = stockTypeShort(first);
  const liveBadge = getLivePrice(ticker) ? '<span class="badge badge-green">● élő</span>' : '';
  const box = (label, val, cls) =>
    `<div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">${label}</div><div class="${cls || ''}" style="font-family:var(--display);font-size:16px;font-weight:700">${val}</div></div>`;
  return `
    <div class="card">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:4px">
        <div style="font-family:var(--display);font-size:20px;font-weight:700">${ticker}</div>
        <span class="badge ${typeShort === 'Dist' ? 'badge-green' : 'badge-gray'}" title="${stockDivFreqLabel(first)}">${typeShort}</span>
        ${liveBadge}
      </div>
      <div style="color:var(--muted);font-size:12px;margin-bottom:18px">${first.name ? escHtml(first.name) + ' &nbsp;|&nbsp; ' : ''}${lots.length} vétel &nbsp;|&nbsp; ${cur}</div>

      <div class="grid g4" style="margin-bottom:20px">
        ${box('Összes mennyiség', fmtNum(totQty))}
        ${box('Befektetett', fmtCur(totInvN, cur))}
        ${box('P&L', `${totPLN >= 0 ? '+' : ''}${fmtCur(totPLN, cur)} (${totPLPct.toFixed(1)}%)`, totPLN >= 0 ? 'green' : 'red')}
        ${box('Éves osztalék', rateForCurrency(cur) ? fmtCur(annualDivHuf / rateForCurrency(cur), cur) : fmt(annualDivHuf), 'yellow')}
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:20px;font-size:12px;margin-bottom:20px;padding-top:16px;border-top:1px solid var(--border)">
        <div><span style="color:var(--muted)">Átlag vételár: </span><strong>${fmtCur(avgN, cur)}</strong></div>
        <div><span style="color:var(--muted)">Jelenlegi ár: </span><strong>${fmtCur(curPriceN, cur)}</strong></div>
        <div><span style="color:var(--muted)">Jelenlegi érték: </span><strong class="cyan">${fmtCur(totCurN, cur)}</strong></div>
        <div><span style="color:var(--muted)">Osztalékhozam: </span><strong>${divYield.toFixed(2)}%${first.divAuto ? ' (auto)' : ''}</strong></div>
      </div>

      <div class="card-title" style="margin-bottom:12px">Vételek</div>
      <div class="scroll-table">
        <table>
          <thead><tr><th>Vétel dátuma</th><th>Db</th><th>Vételár</th><th>Befektetett</th><th>Jelenlegi érték</th><th>P&amp;L</th><th></th></tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    </div>
  `;
}
async function resolveCryptoName(coin) {
  const sym = (coin || '').trim().toUpperCase();
  if (!sym) return '';
  try {
    const r = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(sym)}`
    );
    const data = await r.json();
    const coins = (data && data.coins) || [];
    const knownId = COINGECKO_ID_MAP[sym];
    let best = knownId ? coins.find((c) => c.id === knownId) : null;
    if (!best) best = coins.find((c) => (c.symbol || '').toUpperCase() === sym);
    if (!best) best = coins[0];
    return best ? best.name || '' : '';
  } catch (e) {
    return '';
  }
}
let cryptoEditId = null;
function openCryptoAdd() {
  cryptoEditId = null;
  ['cr-coin', 'cr-qty', 'cr-price', 'cr-fee'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const cur = document.getElementById('cr-currency');
  if (cur) cur.value = 'USD';
  const dt = document.getElementById('cr-date');
  if (dt) dt.value = now();
  const t = document.getElementById('crypto-modal-title');
  if (t) t.textContent = 'Vétel rögzítése';
  const b = document.getElementById('crypto-submit-btn');
  if (b) b.textContent = '+ Vétel rögzítése';
  openModal('crypto-modal');
}
function openCryptoEdit(id) {
  const tr = state.crypto.find((x) => x.id === id);
  if (!tr) return;
  if (tr.type && tr.type !== 'buy') return;
  cryptoEditId = id;
  const rate = rateForCurrency(tr.currency || 'HUF');
  const toN = (v) => (rate ? v / rate : v);
  document.getElementById('cr-coin').value = tr.coin || '';
  const cur = document.getElementById('cr-currency');
  if (cur) cur.value = tr.currency || 'USD';
  document.getElementById('cr-qty').value = tr.qty || '';
  document.getElementById('cr-price').value = toN(tr.price) || '';
  document.getElementById('cr-fee').value = tr.fee ? toN(tr.fee) : '';
  const dt = document.getElementById('cr-date');
  if (dt) dt.value = tr.date || now();
  const t = document.getElementById('crypto-modal-title');
  if (t) t.textContent = 'Vétel szerkesztése';
  const b = document.getElementById('crypto-submit-btn');
  if (b) b.textContent = 'Mentés';
  openModal('crypto-modal');
}
async function addCryptoTrade() {
  const coin = document.getElementById('cr-coin').value.trim().toUpperCase();
  const type = 'buy';
  const currency = document.getElementById('cr-currency').value;
  const qty = parseFloat(document.getElementById('cr-qty').value) || 0;
  const priceNative = parseFloat(document.getElementById('cr-price').value) || 0;
  const feeNative = parseFloat(document.getElementById('cr-fee').value) || 0;
  const date = document.getElementById('cr-date').value || now();
  if (!coin || !qty || !priceNative) return;
  const name = await resolveCryptoName(coin);
  const fxRate = await fxRateForDate(currency, date);
  if (!fxRate) {
    uiAlert(
      'Az árfolyam nem érhető el, ezért a rögzítés most nem lehetséges. Próbáld újra kicsit később.'
    );
    return;
  }
  const price = priceNative * fxRate;
  const fee = feeNative * fxRate;
  if (cryptoEditId) {
    const tr = state.crypto.find((x) => x.id === cryptoEditId);
    if (tr)
      Object.assign(tr, {
        coin,
        name: name || tr.name,
        type,
        qty,
        price,
        date,
        fee,
        currency
      });
  } else {
    state.crypto.push({
      id: uid(),
      coin,
      name,
      type,
      qty,
      price,
      priceNative,
      fee,
      feeNative,
      date,
      currency
    });
  }
  save();
  cryptoEditId = null;
  ['cr-coin', 'cr-qty', 'cr-price', 'cr-fee'].forEach(
    (id) => (document.getElementById(id).value = '')
  );
  const b = document.getElementById('crypto-submit-btn');
  if (b) b.textContent = '+ Vétel rögzítése';
  const t = document.getElementById('crypto-modal-title');
  if (t) t.textContent = 'Vétel rögzítése';
  closeModal('crypto-modal');
  renderAll();
  refreshAllPrices();
}
async function deleteCryptoTrade(id) {
  const t = state.crypto.find((x) => x.id === id);
  if (!t) return;
  const kind = t.type === 'sell' ? 'eladás' : 'vétel';
  const label = `${t.coin} — ${kind}, ${fmtNum(t.qty)} db${t.date ? ' (' + t.date + ')' : ''}`;
  if (!(await uiConfirm(`Biztosan törlöd ezt a tételt?\n\n${label}`))) return;
  state.crypto = state.crypto.filter((c) => c.id !== id);
  save();
  renderAll();
}
function openCryptoItemsModal() {
  renderCryptoItemsModal();
  openModal('crypto-items-modal');
}
function renderCryptoItemsModal() {
  const tbody = document.getElementById('crypto-items-tbody');
  if (!tbody) return;
  const rows = state.crypto.slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  if (!rows.length) {
    tbody.innerHTML =
      '<tr><td colspan="7" style="color:var(--muted)">Nincs rögzített kripto tétel.</td></tr>';
    return;
  }
  tbody.innerHTML = rows
    .map((t) => {
      const kind = t.type === 'sell' ? 'Eladás' : 'Vétel';
      const src = t.source === 'bybit' ? 'ByBit' : 'Kézi';
      return `<tr>
        <td><input type="checkbox" class="ci-check" data-id="${escHtml(t.id)}" data-source="${escHtml(
        t.source || ''
      )}"></td>
        <td>${escHtml(t.date || '')}</td>
        <td>${escHtml(t.coin || '')}</td>
        <td>${kind}</td>
        <td>${fmtNum(t.qty)}</td>
        <td>${src}</td>
        <td><button class="btn btn-sm btn-danger" onclick="deleteCryptoTrade('${escHtml(
          t.id
        )}').then(renderCryptoItemsModal)">✕</button></td>
      </tr>`;
    })
    .join('');
}
function toggleAllCryptoItems(checked) {
  document.querySelectorAll('#crypto-items-tbody .ci-check').forEach((cb) => (cb.checked = checked));
}
function selectBybitCryptoItems() {
  document.querySelectorAll('#crypto-items-tbody .ci-check').forEach((cb) => {
    cb.checked = cb.dataset.source === 'bybit';
  });
}
async function deleteSelectedCryptoItems() {
  const ids = Array.from(document.querySelectorAll('#crypto-items-tbody .ci-check:checked')).map(
    (cb) => cb.dataset.id
  );
  if (!ids.length) {
    uiAlert(L('Nincs kijelölt tétel.', 'No items selected.'));
    return;
  }
  if (
    !(await uiConfirm(
      `Biztosan törlöd a kijelölt ${ids.length} tételt? Ez nem visszavonható.`,
      { title: 'Tételek törlése', confirmText: 'Törlés' }
    ))
  )
    return;
  const idSet = new Set(ids);
  state.crypto = state.crypto.filter((c) => !idSet.has(c.id));
  save();
  renderAll();
  renderCryptoItemsModal();
}
let sellCoin = null;
let sellMaxQty = 0;
function openSellModal(coin) {
  const coins = calcCryptoPL();
  const c = coins[coin];
  const openQty = c ? c.buys.reduce((a, b) => a + b.qty, 0) : 0;
  if (openQty <= 0) return;
  sellCoin = coin;
  sellMaxQty = openQty;
  document.getElementById('sell-coin-info').innerHTML =
    `<strong style="color:var(--text);font-size:14px">${coin}</strong> — elérhető mennyiség: <strong style="color:var(--accent2)">${fmtNum(openQty)}</strong> db`;
  document.getElementById('sell-date').value = now();
  ['sell-qty', 'sell-price', 'sell-fee'].forEach((id) => (document.getElementById(id).value = ''));
  document.getElementById('sell-currency').value = 'HUF';
  document.getElementById('sell-error').style.display = 'none';
  updateSellLabels();
  document.getElementById('sell-modal').style.display = 'flex';
}
function closeSellModal() {
  document.getElementById('sell-modal').style.display = 'none';
  sellCoin = null;
}
function updateSellLabels() {
  const cur = document.getElementById('sell-currency').value;
  const sym = cur === 'HUF' ? 'Ft' : cur;
  document.getElementById('sell-price-label').textContent = `Eladási ár / db (${sym})`;
  document.getElementById('sell-fee-label').textContent = `Díj (${sym})`;
  const info = document.getElementById('sell-fx-info');
  if (cur !== 'HUF') {
    const rate = rateForCurrency(cur);
    info.style.display = 'block';
    info.innerHTML = rate
      ? `Az ár és a díj az eladás dátumához tartozó (történeti) árfolyammal lesz HUF-ra váltva. Mai árfolyam: 1 ${cur} ≈ ${Math.round(rate)} Ft`
      : `<span style="color:var(--red)">Az árfolyam még nem érhető el — az eladás előtt frissítsd az árfolyamot.</span>`;
  } else {
    info.style.display = 'none';
  }
}
async function confirmSell() {
  if (!sellCoin) return;
  const currency = document.getElementById('sell-currency').value;
  const qty = parseFloat(document.getElementById('sell-qty').value) || 0;
  const priceNative = parseFloat(document.getElementById('sell-price').value) || 0;
  const feeNative = parseFloat(document.getElementById('sell-fee').value) || 0;
  const date = document.getElementById('sell-date').value || now();
  const errEl = document.getElementById('sell-error');
  if (!qty || !priceNative) {
    errEl.textContent = 'Adj meg eladott mennyiséget és eladási árat.';
    errEl.style.display = 'block';
    return;
  }
  if (qty > sellMaxQty + 1e-9) {
    errEl.textContent = `Legfeljebb ${fmtNum(sellMaxQty)} db ${sellCoin} adható el.`;
    errEl.style.display = 'block';
    return;
  }
  const fxRate = await fxRateForDate(currency, date);
  if (!fxRate) {
    errEl.textContent =
      'Az árfolyam nem érhető el, ezért az eladás most nem rögzíthető. Próbáld újra kicsit később.';
    errEl.style.display = 'block';
    return;
  }
  const price = priceNative * fxRate;
  const fee = feeNative * fxRate;
  state.crypto.push({
    id: uid(),
    coin: sellCoin,
    type: 'sell',
    qty,
    price,
    priceNative,
    fee,
    feeNative,
    date,
    currency
  });
  save();
  closeSellModal();
  renderAll();
}
function calcCryptoPL() {
  const coins = {};
  state.crypto.forEach((t) => {
    if (!coins[t.coin])
      coins[t.coin] = {
        buys: [],
        realized: 0,
        realizedN: 0,
        fees: 0,
        cur: t.currency || 'HUF',
        nativeOk: true
      };
    coins[t.coin].fees += t.fee;
    const pN = t.priceNative != null ? t.priceNative : null;
    if (pN === null) coins[t.coin].nativeOk = false;
    if (t.type === 'buy') {
      coins[t.coin].buys.push({
        qty: t.qty,
        price: t.price,
        priceN: pN
      });
    } else {
      let remaining = t.qty;
      let costBasis = 0,
        costBasisN = 0;
      while (remaining > 0 && coins[t.coin].buys.length) {
        const buy = coins[t.coin].buys[0];
        const used = Math.min(remaining, buy.qty);
        costBasis += used * buy.price;
        costBasisN += used * (buy.priceN || 0);
        buy.qty -= used;
        remaining -= used;
        if (buy.qty <= 0) coins[t.coin].buys.shift();
      }
      coins[t.coin].realized += t.qty * t.price - costBasis;
      coins[t.coin].realizedN += t.qty * (pN || 0) - costBasisN;
    }
  });
  return coins;
}
function renderCrypto() {
  document.getElementById('crypto-refresh-bar').innerHTML = '';
  updateCryptoLabels();
  const coins = calcCryptoPL();
  let totalRealized = 0,
    totalOpen = 0,
    totalLiveOpen = 0,
    totalFees = 0;
  let usdOpen = 0,
    usdLiveOpen = 0,
    usdRealized = 0,
    usdOk = fxReady();
  Object.entries(coins).forEach(([coin, c]) => {
    const livePrice = getLivePrice(coin);
    const openQty = c.buys.reduce((a, b) => a + b.qty, 0);
    const openCost = c.buys.reduce((a, b) => a + b.qty * b.price, 0);
    totalRealized += c.realized;
    totalOpen += openCost;
    totalLiveOpen += livePrice ? openQty * livePrice : openCost;
    totalFees += c.fees;
    if (usdOk) {
      if (!c.nativeOk) {
        usdOk = false;
        return;
      }
      const openCostN = c.buys.reduce((a, b) => a + b.qty * (b.priceN || 0), 0);
      const oUsd = nativeToUsd(openCostN, c.cur);
      const rUsd = nativeToUsd(c.realizedN, c.cur);
      if (oUsd === null || rUsd === null) {
        usdOk = false;
        return;
      }
      usdOpen += oUsd;
      usdRealized += rUsd;
      usdLiveOpen += livePrice ? (openQty * livePrice) / usdHuf : oUsd;
    }
  });
  const usdPL = usdRealized + (usdLiveOpen - usdOpen);
  const canHuf = usdOk && fxReady();
  const setSub = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  };
  document.getElementById('cr-open').textContent = canHuf
    ? fmtAgg(usdOpen * usdHuf)
    : fmtAgg(totalOpen);
  setSub('cr-open-usd', usdOk ? fmtUsd(usdOpen) : '');
  const totalPL = canHuf ? usdPL * usdHuf : totalRealized + (totalLiveOpen - totalOpen);
  const plEl = document.getElementById('cr-pl');
  plEl.textContent = (totalPL >= 0 ? '+' : '') + fmtAgg(totalPL);
  plEl.className = 'stat-value ' + (totalPL >= 0 ? 'green' : 'red');
  document.getElementById('cr-pl-card').className =
    'card ' + (totalPL >= 0 ? 'card-stat-green' : 'card-stat-red');
  setSub('cr-pl-usd', usdOk ? fmtUsd(usdPL, true) : '');
  const liveOpenEl = document.getElementById('cr-live-open');
  if (liveOpenEl) {
    const liveHufShown = canHuf ? usdLiveOpen * usdHuf : totalLiveOpen;
    liveOpenEl.innerHTML =
      `<div class="stat-value cyan">${fmtAgg(liveHufShown)}</div>` +
      (usdOk ? `<div class="stat-sub">${escHtml(fmtUsd(usdLiveOpen))}</div>` : '');
  }
  const nameMap = {},
    coinCur = {},
    coinLastDate = {},
    coinBuyCount = {};
  state.crypto.forEach((t) => {
    if (t.name) nameMap[t.coin] = t.name;
    if (!coinCur[t.coin]) coinCur[t.coin] = t.currency || 'HUF';
    if (t.type === 'buy') {
      coinBuyCount[t.coin] = (coinBuyCount[t.coin] || 0) + 1;
      if (!coinLastDate[t.coin] || (t.date || '') > coinLastDate[t.coin])
        coinLastDate[t.coin] = t.date || '';
    }
  });
  const holdingsBody = document.getElementById('crypto-holdings-tbody');
  if (holdingsBody) {
    const rows = Object.entries(coins)
      .map(([coin, c]) => {
        const openQty = c.buys.reduce((a, b) => a + b.qty, 0);
        if (openQty <= 0) return null;
        const openCostHuf = c.buys.reduce((a, b) => a + b.qty * b.price, 0);
        const liveHuf = getLivePrice(coin);
        const curPriceHuf = liveHuf || openCostHuf / openQty;
        const curValHuf = openQty * curPriceHuf;
        const cur = coinCur[coin] || 'HUF';
        const rate = rateForCurrency(cur);
        const openCostN = rate ? openCostHuf / rate : openCostHuf;
        const avgN = openCostN / openQty;
        const curPriceN = rate ? curPriceHuf / rate : curPriceHuf;
        const curValN = rate ? curValHuf / rate : curValHuf;
        const plN = curValN - openCostN;
        const plPct = openCostN ? (plN / openCostN) * 100 : 0;
        return {
          coin,
          openQty,
          avgN,
          curPriceN,
          openCostN,
          curValN,
          plN,
          plPct,
          cur,
          curValHuf
        };
      })
      .filter(Boolean)
      .sort((a, b) => b.curValHuf - a.curValHuf);
    holdingsBody.innerHTML =
      rows
        .map(
          (r) => `<tr style="cursor:pointer" onclick="openCryptoDetail('${r.coin}')">
        <td>
          <strong>${r.coin}</strong>${nameMap[r.coin] ? `<div style="font-size:10px;color:var(--muted)">${escHtml(nameMap[r.coin])}</div>` : ''}
          <div style="font-size:10px;color:var(--muted);margin-top:2px">${coinBuyCount[r.coin] || 0} vétel ›</div>
        </td>
        <td>${fmtNum(r.openQty)}</td>
        <td>${fmtCur(r.avgN, r.cur)}</td>
        <td>${fmtCur(r.curPriceN, r.cur)}</td>
        <td>${fmtCur(r.openCostN, r.cur)}</td>
        <td><strong>${fmtCur(r.curValN, r.cur)}</strong></td>
        <td class="${r.plN >= 0 ? 'green' : 'red'}" style="font-weight:500">${r.plN >= 0 ? '+' : ''}${fmtCur(r.plN, r.cur)} <span style="font-size:10px">(${r.plPct.toFixed(1)}%)</span></td>
      </tr>`
        )
        .join('') ||
      '<tr><td colspan="7" style="color:var(--muted);text-align:center;padding:20px">Nincs kriptó pozíció</td></tr>';
  }
  const unrealPct = totalOpen > 0 ? ((totalLiveOpen - totalOpen) / totalOpen) * 100 : 0;
  const yEl = document.getElementById('cr-yield');
  if (yEl) {
    if (totalOpen > 0) {
      yEl.textContent = (unrealPct >= 0 ? '+' : '') + unrealPct.toFixed(1) + '%';
      yEl.className = 'stat-value ' + (unrealPct >= 0 ? 'green' : 'red');
      const yc = document.getElementById('cr-yield-card');
      if (yc) yc.className = 'card ' + (unrealPct >= 0 ? 'card-stat-green' : 'card-stat-red');
    } else {
      yEl.textContent = '—';
      yEl.className = 'stat-value';
    }
  }
  const coinStats = [];
  Object.entries(coins).forEach(([coin, c]) => {
    const openQty = c.buys.reduce((a, b) => a + b.qty, 0);
    if (openQty <= 0) return;
    const openCost = c.buys.reduce((a, b) => a + b.qty * b.price, 0);
    const live = getLivePrice(coin);
    const curVal = live ? openQty * live : openCost;
    const pl = curVal - openCost;
    const plPct = openCost ? (pl / openCost) * 100 : 0;
    const cur = c.cur || 'HUF';
    const fxr = rateForCurrency(cur);
    const curValN = cur === 'HUF' ? curVal : fxr ? curVal / fxr : null;
    coinStats.push({
      coin,
      curVal,
      openCost,
      pl,
      plPct,
      cur,
      curValN
    });
  });
  const allocEl = document.getElementById('crypto-allocation');
  if (allocEl) {
    const totalVal = coinStats.reduce((a, s) => a + s.curVal, 0);
    if (!coinStats.length || totalVal <= 0) {
      allocEl.innerHTML =
        '<div style="color:var(--muted);font-size:12px;padding:10px 0">Nincs nyitott pozíció</div>';
    } else {
      const palette = [
        '#C08A2E',
        '#3FA36C',
        '#4FA7BD',
        '#8B6690',
        '#C24A3A',
        '#B8873A',
        '#6E8B3D',
        '#B0703A'
      ];
      const n = coinStats.length;
      const cols = n > 5 ? 2 : n > 1 ? 3 : 1;
      const colCls = cols === 2 ? 'g2' : cols === 3 ? 'g3' : '';
      const gridStyle = 'gap:11px 18px' + (cols === 1 ? ';grid-template-columns:1fr' : '');
      allocEl.innerHTML =
        `<div class="grid ${colCls}" style="${gridStyle}">` +
        [...coinStats]
          .sort((a, b) => b.curVal - a.curVal)
          .map((s, i) => {
            const color = palette[i % palette.length];
            const share = (s.curVal / totalVal) * 100;
            return `<div>
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;margin-bottom:4px">
            <span><strong style="color:${color}">${s.coin}</strong> <strong style="margin-left:5px">${share.toFixed(1)}%</strong></span>
            <span style="color:var(--muted);font-size:11px;white-space:nowrap">${s.curValN === null ? '—' : fmtCur(s.curValN, s.cur)}</span>
          </div>
          <div class="progress-bar" style="height:6px"><div class="progress-fill" style="width:${share}%;background:${color}"></div></div>
        </div>`;
          })
          .join('') +
        `</div>`;
    }
  }
  const statsEl = document.getElementById('crypto-stats');
  if (statsEl) {
    if (!coinStats.length) {
      statsEl.innerHTML =
        '<div style="color:var(--muted);font-size:12px;padding:10px 0">Nincs nyitott pozíció</div>';
    } else {
      let best = coinStats[0],
        worst = coinStats[0];
      coinStats.forEach((s) => {
        if (s.plPct > best.plPct) best = s;
        if (s.plPct < worst.plPct) worst = s;
      });
      const avgPct = coinStats.reduce((a, s) => a + s.plPct, 0) / coinStats.length;
      const perfCell = (s) =>
        `${s.coin} <span class="${s.plPct >= 0 ? 'green' : 'red'}">${s.plPct >= 0 ? '+' : ''}${s.plPct.toFixed(1)}%</span>`;
      statsEl.innerHTML = `
        <div class="tax-row"><span style="color:var(--muted)">Coinok száma</span><span>${coinStats.length} db</span></div>
        <div class="tax-row"><span style="color:var(--muted)">Legjobb teljesítő</span><span>${perfCell(best)}</span></div>
        <div class="tax-row"><span style="color:var(--muted)">Leggyengébb teljesítő</span><span>${perfCell(worst)}</span></div>
        <div class="tax-row"><span style="color:var(--muted)">Átlagos hozam</span><span class="${avgPct >= 0 ? 'green' : 'red'}">${avgPct >= 0 ? '+' : ''}${avgPct.toFixed(1)}%</span></div>
      `;
    }
  }
  if (_openCryptoCoin) {
    const dv = document.getElementById('crypto-detail-view');
    if (dv && dv.style.display !== 'none') {
      const stillOpen = state.crypto.some((t) => t.coin === _openCryptoCoin && t.type === 'buy');
      if (stillOpen) {
        const c = document.getElementById('crypto-detail-content');
        if (c) c.innerHTML = buildCryptoDetailHTML(_openCryptoCoin);
      } else {
        closeCryptoDetail();
      }
    }
  }
}
let _openCryptoCoin = null;
function openCryptoDetail(coin) {
  if (!state.crypto.some((t) => t.coin === coin)) return;
  _openCryptoCoin = coin;
  const lv = document.getElementById('crypto-list-view');
  const dv = document.getElementById('crypto-detail-view');
  const addBtn = document.getElementById('crypto-add-btn');
  if (lv) lv.style.display = 'none';
  if (dv) dv.style.display = 'block';
  if (addBtn) addBtn.style.display = 'none';
  const c = document.getElementById('crypto-detail-content');
  if (c) c.innerHTML = buildCryptoDetailHTML(coin);
}
function closeCryptoDetail() {
  _openCryptoCoin = null;
  const lv = document.getElementById('crypto-list-view');
  const dv = document.getElementById('crypto-detail-view');
  const addBtn = document.getElementById('crypto-add-btn');
  if (lv) lv.style.display = 'block';
  if (dv) dv.style.display = 'none';
  if (addBtn) addBtn.style.display = '';
}
function sellCurrentCrypto() {
  if (_openCryptoCoin) openSellModal(_openCryptoCoin);
}
function buildCryptoDetailHTML(coin) {
  const trades = state.crypto.filter((t) => t.coin === coin);
  if (!trades.length) return '';
  const c = calcCryptoPL()[coin] || {
    buys: [],
    realized: 0,
    fees: 0
  };
  const openQty = c.buys.reduce((a, b) => a + b.qty, 0);
  const openCostHuf = c.buys.reduce((a, b) => a + b.qty * b.price, 0);
  const liveHuf = getLivePrice(coin);
  const curPriceHuf = liveHuf || (openQty ? openCostHuf / openQty : 0);
  const curValHuf = openQty * curPriceHuf;
  const cur = (trades.find((t) => t.currency) || {}).currency || 'HUF';
  const rate = rateForCurrency(cur);
  const toN = (v) => (rate ? v / rate : v);
  const openCostN = toN(openCostHuf);
  const avgN = openQty ? openCostN / openQty : 0;
  const curPriceN = toN(curPriceHuf);
  const curValN = toN(curValHuf);
  const openPLN = curValN - openCostN;
  const openPLPct = openCostN ? (openPLN / openCostN) * 100 : 0;
  const name = (trades.find((t) => t.name) || {}).name || '';
  const liveBadge = liveHuf ? '<span class="badge badge-green">● élő</span>' : '';
  const box = (label, val, cls) =>
    `<div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">${label}</div><div class="${cls || ''}" style="font-family:var(--display);font-size:16px;font-weight:700">${val}</div></div>`;
  const lots = [];
  [...trades]
    .sort((a, b) => (a.date || '').localeCompare(b.date || ''))
    .forEach((t) => {
      if (t.type === 'buy') {
        lots.push({
          id: t.id,
          qty: t.qty,
          price: t.price,
          date: t.date
        });
      } else {
        let rem = t.qty;
        while (rem > 1e-12 && lots.length) {
          const lot = lots[0];
          const used = Math.min(rem, lot.qty);
          lot.qty -= used;
          rem -= used;
          if (lot.qty <= 1e-12) lots.shift();
        }
      }
    });
  const lotsHtml =
    lots
      .map((l) => {
        const priceN = toN(l.price);
        const invN = toN(l.qty * l.price);
        const valN = toN(l.qty * curPriceHuf);
        const plN = valN - invN;
        const plPct = invN ? (plN / invN) * 100 : 0;
        return `<tr>
      <td style="color:var(--muted)">${l.date || '—'}</td>
      <td>${fmtNum(l.qty)}</td>
      <td>${fmtCur(priceN, cur)}</td>
      <td>${fmtCur(invN, cur)}</td>
      <td class="cyan">${fmtCur(valN, cur)}</td>
      <td class="${plN >= 0 ? 'green' : 'red'}">${plN >= 0 ? '+' : ''}${fmtCur(plN, cur)} <span style="font-size:10px">(${plPct.toFixed(1)}%)</span></td>
      <td><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-sm btn-secondary js-edit-btn" onclick="openCryptoEdit('${l.id}')" title="Szerkesztés">✎</button><button class="btn btn-sm btn-secondary js-del-btn" onclick="deleteCryptoTrade('${l.id}')">Téves rögzítés</button></div></td>
    </tr>`;
      })
      .join('') ||
    '<tr><td colspan="7" style="color:var(--muted);text-align:center;padding:16px">Nincs nyitott vétel</td></tr>';
  return `
    <div class="card">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:4px">
        <div style="font-family:var(--display);font-size:20px;font-weight:700">${coin}</div>
        ${liveBadge}
      </div>
      <div style="color:var(--muted);font-size:12px;margin-bottom:18px">${name ? escHtml(name) + ' &nbsp;|&nbsp; ' : ''}${lots.length} vétel &nbsp;|&nbsp; ${cur}</div>

      <div class="grid g4" style="margin-bottom:20px">
        ${box('Összes mennyiség', fmtNum(openQty))}
        ${box('Befektetett', fmtCur(openCostN, cur))}
        ${box('Jelenlegi érték', fmtCur(curValN, cur), 'cyan')}
        ${box('P&L', `${openPLN >= 0 ? '+' : ''}${fmtCur(openPLN, cur)} (${openPLPct.toFixed(1)}%)`, openPLN >= 0 ? 'green' : 'red')}
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:20px;font-size:12px;margin-bottom:20px;padding-top:16px;border-top:1px solid var(--border)">
        <div><span style="color:var(--muted)">Átlag vételár: </span><strong>${fmtCur(avgN, cur)}</strong></div>
        <div><span style="color:var(--muted)">Jelenlegi ár: </span><strong>${fmtCur(curPriceN, cur)}</strong></div>
      </div>

      <div class="card-title" style="margin-bottom:12px">Vételek</div>
      <div class="scroll-table">
        <table>
          <thead><tr><th>Vétel dátuma</th><th>Db</th><th>Vételár</th><th>Befektetett</th><th>Jelenlegi érték</th><th>P&amp;L</th><th></th></tr></thead>
          <tbody>${lotsHtml}</tbody>
        </table>
      </div>
    </div>
  `;
}
function calcLoanEndDate() {
  const start = document.getElementById('ln-start').value;
  const months = parseInt(document.getElementById('ln-months').value) || 0;
  const payday = parseInt(document.getElementById('ln-payday').value) || 0;
  const firstPayment = document.getElementById('ln-first').value || '';
  if (!start || !months) {
    document.getElementById('ln-end-info').textContent = '';
    return;
  }
  const tmp = {
    start,
    months,
    payday,
    firstPayment
  };
  const first = getFirstPaymentDate(tmp);
  const last = getPaymentDate(tmp, months - 1);
  const endStr = toLocalDateStr(last);
  document.getElementById('ln-end').value = endStr;
  document.getElementById('ln-end-info').innerHTML =
    `${L('Első törlesztő:', 'First instalment:')} <strong>${first.toLocaleDateString(LOC())}</strong><br>${L('Lejárat:', 'Maturity:')} <strong>${last.toLocaleDateString(LOC())}</strong>`;
}
function openLoanDetail(id) {
  const l = state.loans.find((x) => x.id === id);
  if (!l) return;
  document.getElementById('loan-list-view').style.display = 'none';
  document.getElementById('loan-detail-view').style.display = 'block';
  const laBtn = document.getElementById('loan-add-btn');
  if (laBtn) laBtn.style.display = 'none';
  document.getElementById('loan-detail-content').innerHTML = buildLoanDetailHTML(l);
}
function closeLoanDetail() {
  document.getElementById('loan-list-view').style.display = 'block';
  document.getElementById('loan-detail-view').style.display = 'none';
  const laBtn = document.getElementById('loan-add-btn');
  if (laBtn) laBtn.style.display = '';
}
function getFirstPaymentDate(l) {
  if (l.firstPayment) {
    const [fy, fm, fd] = l.firstPayment.split('-').map(Number);
    if (fy && fm && fd) return new Date(fy, fm - 1, fd);
  }
  const start = new Date(l.start);
  const payday = l.payday || start.getDate();
  const d = new Date(start.getFullYear(), start.getMonth() + 2, 1);
  const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(payday, last));
  return d;
}
function getPaymentDate(l, i) {
  const first = getFirstPaymentDate(l);
  const payday = l.payday || first.getDate();
  const d = new Date(first.getFullYear(), first.getMonth() + i, 1);
  const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(payday, last));
  return d;
}
function buildLoanDetailHTML(l) {
  const monthlyRate = l.rate / 100 / 12;
  const paidSet = state.paidInstallments[l.id] || {};
  let balance = l.orig;
  const rows = [];
  for (let i = 0; i < l.months; i++) {
    const d = getPaymentDate(l, i);
    const payment = l.monthly;
    const interest = monthlyRate > 0 ? balance * monthlyRate : 0;
    const principal = payment - interest;
    balance = Math.max(0, balance - principal);
    const isPaid = !!paidSet[i + 1];
    rows.push({
      idx: i + 1,
      date: d,
      interest,
      principal,
      payment,
      balance,
      isPaid
    });
  }
  const firstUnpaidIdx = rows.find((r) => !r.isPaid)?.idx ?? null;
  const paidCount = rows.filter((r) => r.isPaid).length;
  const totalPaid = rows.filter((r) => r.isPaid).reduce((a, r) => a + r.payment, 0);
  const totalInterestPaid = rows.filter((r) => r.isPaid).reduce((a, r) => a + r.interest, 0);
  const remaining = rows.filter((r) => !r.isPaid).length;
  const totalLeft = rows.filter((r) => !r.isPaid).reduce((a, r) => a + r.payment, 0);
  const lastPaid = [...rows].reverse().find((r) => r.isPaid);
  const currentBalance = lastPaid ? lastPaid.balance : l.orig;
  const totalRepay = rows.reduce((a, r) => a + r.payment, 0);
  const loanFee = totalRepay - l.orig;
  const tableRows = rows
    .map((r) => {
      const isNext = r.idx === firstUnpaidIdx;
      let rowStyle = '';
      if (isNext) rowStyle = 'background:rgba(60,122,140,0.08);';
      else if (r.isPaid) rowStyle = 'opacity:0.55;';
      let statusBadge;
      if (r.isPaid) {
        statusBadge = `<span class="badge badge-green" style="cursor:pointer" title="Kattints a visszavonáshoz" onclick="toggleInstallment('${l.id}', ${r.idx})">✓ Fizetve</span>`;
      } else if (isNext) {
        statusBadge = `<span class="badge badge-cyan" style="cursor:pointer;font-weight:600" title="Kattints a befizetés rögzítéséhez" onclick="toggleInstallment('${l.id}', ${r.idx})">→ Következő (kattints)</span>`;
      } else {
        statusBadge =
          '<span class="badge" style="background:rgba(107,114,128,0.15);color:var(--muted)">Várható</span>';
      }
      return `<tr style="${rowStyle}">
      <td style="color:var(--muted)">${r.idx}.</td>
      <td>${r.date.toLocaleDateString(LOC())}</td>
      <td>${fmt(r.payment)}</td>
      <td style="color:var(--muted)">${fmt(r.principal)}</td>
      <td style="color:var(--muted)">${fmt(r.interest)}</td>
      <td class="${r.isPaid ? 'green' : 'red'}">${fmt(r.balance)}</td>
      <td>${statusBadge}</td>
    </tr>`;
    })
    .join('');
  return `
    <div class="card" style="margin-bottom:16px">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px">
        <div style="font-family:var(--display);font-size:22px;font-weight:800">${l.name}</div>
      </div>
      <div style="color:var(--muted);font-size:12px">
        Folyósítva: ${l.start} &nbsp;|&nbsp; Lejárat: ${l.end} &nbsp;|&nbsp; ${l.months} hónap &nbsp;|&nbsp; Kamat: ${l.rate}% &nbsp;|&nbsp; THM: ${l.thm}%
      </div>
    </div>

    <div class="grid g4" style="margin-bottom:16px">
      <div class="card">
        <div class="card-title">Felvett összeg</div>
        <div class="stat-value">${fmt(l.orig)}</div>
      </div>
      <div class="card">
        <div class="card-title">Fennálló tartozás</div>
        <div class="stat-value red">${fmt(currentBalance)}</div>
        <div class="stat-sub">${paidCount} / ${l.months} részlet fizetve</div>
      </div>
      <div class="card">
        <div class="card-title">Eddig visszafizetve</div>
        <div class="stat-value green">${fmt(totalPaid)}</div>
        <div class="stat-sub">ebből kamat: ${fmt(totalInterestPaid)}</div>
      </div>
      <div class="card">
        <div class="card-title">Még hátralévő</div>
        <div class="stat-value yellow">${fmt(totalLeft)}</div>
        <div class="stat-sub">${remaining} részlet</div>
      </div>
    </div>

    <div class="grid g3" style="margin-bottom:16px">
      <div class="card">
        <div class="card-title">Teljes visszafizetendő</div>
        <div class="stat-value cyan">${fmt(totalRepay)}</div>
        <div class="stat-sub">${l.months} részlet összege</div>
      </div>
      <div class="card">
        <div class="card-title">Hitel díja (kamat + költség)</div>
        <div class="stat-value red">${fmt(loanFee)}</div>
        <div class="stat-sub">Visszafizetendő − felvett összeg</div>
      </div>
      <div class="card">
        <div class="card-title">Túlfizetés aránya</div>
        <div class="stat-value yellow">${l.orig ? ((loanFee / l.orig) * 100).toFixed(1) : 0}%</div>
        <div class="stat-sub">A felvett összeghez képest</div>
      </div>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="card-title">Visszafizetési előrehaladás</div>
      <div class="progress-wrap">
        <div class="progress-label">
          <span>${paidCount} részlet fizetve (${((paidCount / l.months) * 100).toFixed(1)}%)</span>
          <span style="color:var(--muted)">${remaining} részlet van még hátra</span>
        </div>
        <div class="progress-bar" style="height:10px">
          <div class="progress-fill" style="width:${((paidCount / l.months) * 100).toFixed(1)}%;background:var(--accent)"></div>
        </div>
      </div>
    </div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div class="card-title" style="margin-bottom:0">Havi törlesztési ütemterv</div>
        <span style="font-size:11px;color:var(--muted)">Kattints a "Következő" gombra a befizetés rögzítéséhez</span>
      </div>
      <div class="scroll-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Dátum</th>
              <th>Törlesztő</th>
              <th>Tőke</th>
              <th>Kamat</th>
              <th>Maradék tőke</th>
              <th>Állapot</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    </div>
  `;
}
function toggleInstallment(loanId, idx) {
  if (!state.paidInstallments[loanId]) state.paidInstallments[loanId] = {};
  if (state.paidInstallments[loanId][idx]) {
    delete state.paidInstallments[loanId][idx];
  } else {
    state.paidInstallments[loanId][idx] = true;
  }
  save();
  const l = state.loans.find((x) => x.id === loanId);
  if (l) document.getElementById('loan-detail-content').innerHTML = buildLoanDetailHTML(l);
}
function calcRemaining(l) {
  if (!l.monthly || !l.orig) return l.orig;
  const paidSet = state.paidInstallments[l.id] || {};
  const paidCount = Object.keys(paidSet).length;
  if (paidCount === 0) return l.orig;
  const monthlyRate = l.rate / 100 / 12;
  let balance = l.orig;
  let lastPaidBalance = l.orig;
  for (let i = 0; i < l.months; i++) {
    const interest = monthlyRate > 0 ? balance * monthlyRate : 0;
    const principal = monthlyRate > 0 ? l.monthly - interest : l.orig / l.months;
    balance = Math.max(0, balance - principal);
    if (paidSet[i + 1]) lastPaidBalance = balance;
  }
  return Math.max(0, lastPaidBalance);
}
let loanEditId = null;
function loanInterestPaid(l) {
  const paidSet = state.paidInstallments[l.id] || {};
  const monthlyRate = l.rate / 100 / 12;
  let balance = l.orig,
    interestPaid = 0;
  for (let i = 0; i < l.months; i++) {
    const interest = monthlyRate > 0 ? balance * monthlyRate : 0;
    const principal = l.monthly - interest;
    balance = Math.max(0, balance - principal);
    if (paidSet[i + 1]) interestPaid += interest;
  }
  return interestPaid;
}
function resetLoanForm() {
  [
    'ln-name',
    'ln-orig',
    'ln-start',
    'ln-months',
    'ln-payday',
    'ln-first',
    'ln-rate',
    'ln-thm',
    'ln-monthly',
    'ln-end'
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const freq = document.getElementById('ln-frequency');
  if (freq) freq.value = 'monthly';
  const info = document.getElementById('ln-end-info');
  if (info) info.textContent = '';
}
function openLoanAdd() {
  loanEditId = null;
  resetLoanForm();
  const t = document.getElementById('loan-modal-title');
  if (t) t.textContent = 'Hitel hozzáadása';
  const b = document.getElementById('loan-submit-btn');
  if (b) b.textContent = '+ Hozzáadás';
  openModal('loan-modal');
}
function openLoanEdit(id) {
  const l = state.loans.find((x) => x.id === id);
  if (!l) return;
  loanEditId = id;
  const setVal = (elId, v) => {
    const el = document.getElementById(elId);
    if (el) el.value = v === undefined || v === null ? '' : v;
  };
  setVal('ln-name', l.name);
  setVal('ln-orig', l.orig ? l.orig.toLocaleString('hu-HU') : '');
  setVal('ln-start', l.start);
  setVal('ln-months', l.months);
  setVal('ln-payday', l.payday);
  setVal('ln-first', l.firstPayment || '');
  setVal('ln-frequency', l.freq || 'monthly');
  setVal('ln-rate', l.rate);
  setVal('ln-thm', l.thm);
  setVal('ln-monthly', l.monthly ? l.monthly.toLocaleString('hu-HU') : '');
  setVal('ln-end', l.end);
  const t = document.getElementById('loan-modal-title');
  if (t) t.textContent = 'Hitel szerkesztése';
  const b = document.getElementById('loan-submit-btn');
  if (b) b.textContent = 'Mentés';
  closeLoanDetail();
  openModal('loan-modal');
  calcLoanEndDate();
}
function saveLoan() {
  const name = document.getElementById('ln-name').value.trim();
  const orig = parseAmount('ln-orig');
  const start = document.getElementById('ln-start').value;
  const months = parseInt(document.getElementById('ln-months').value) || 0;
  const payday = parseInt(document.getElementById('ln-payday').value) || 0;
  const firstPayment = document.getElementById('ln-first').value || '';
  const freq = document.getElementById('ln-frequency').value;
  const rate = parseFloat(document.getElementById('ln-rate').value) || 0;
  const thm = parseFloat(document.getElementById('ln-thm').value) || 0;
  const monthly = parseAmount('ln-monthly');
  if (!name || !orig) return;
  const tmp = {
    start,
    months,
    payday,
    firstPayment
  };
  const end =
    start && months
      ? toLocalDateStr(getPaymentDate(tmp, months - 1))
      : document.getElementById('ln-end').value;
  if (loanEditId) {
    const l = state.loans.find((x) => x.id === loanEditId);
    if (l)
      Object.assign(l, {
        name,
        orig,
        start,
        months,
        payday,
        firstPayment,
        freq,
        rate,
        thm,
        monthly,
        end
      });
  } else {
    state.loans.push({
      id: uid(),
      name,
      orig,
      start,
      months,
      payday,
      firstPayment,
      freq,
      rate,
      thm,
      monthly,
      end
    });
  }
  save();
  loanEditId = null;
  resetLoanForm();
  closeModal('loan-modal');
  renderAll();
}
async function deleteLoan(id) {
  const l = state.loans.find((x) => x.id === id);
  if (!l) return;
  const paid = Object.keys(state.paidInstallments[id] || {}).length;
  const extra = paid ? `\n\nA(z) ${paid} befizetettként jelölt részlet is törlődik.` : '';
  if (!(await uiConfirm(`Biztosan törlöd ezt a hitelt?\n\n${l.name}${extra}`))) return;
  state.loans = state.loans.filter((x) => x.id !== id);
  if (state.paidInstallments[id]) delete state.paidInstallments[id];
  save();
  renderAll();
}
const FREQ_LABEL = {
  monthly: 'Havi',
  quarterly: 'Negyedéves',
  yearly: 'Éves'
};
function renderLoans() {
  const container = document.getElementById('loan-cards');
  let totalRemain = 0,
    totalMonthly = 0,
    sumOrig = 0,
    sumRepayAll = 0,
    sumInterestPaid = 0;
  if (!state.loans.length) {
    container.innerHTML =
      '<div class="card" style="color:var(--muted);text-align:center;padding:32px">Nincs rögzített hitel</div>';
  } else {
    const ordered = [...state.loans].sort((a, b) => (a.start || '').localeCompare(b.start || ''));
    container.innerHTML = ordered
      .map((l) => {
        const remain = calcRemaining(l);
        const pct = l.orig ? ((l.orig - remain) / l.orig) * 100 : 0;
        const paidCount = Object.keys(state.paidInstallments[l.id] || {}).length;
        totalRemain += remain;
        totalMonthly += l.monthly;
        sumOrig += l.orig;
        sumRepayAll += l.monthly * l.months;
        sumInterestPaid += loanInterestPaid(l);
        let nextPayment = '—';
        const paidSet = state.paidInstallments[l.id] || {};
        if (l.start && l.months) {
          let nextIdx = null;
          for (let i = 0; i < l.months; i++) {
            if (!paidSet[i + 1]) {
              nextIdx = i;
              break;
            }
          }
          if (nextIdx !== null) nextPayment = getPaymentDate(l, nextIdx).toLocaleDateString(LOC());
          else nextPayment = 'Visszafizetve ✓';
        }
        const remainCount = Math.max(0, l.months - paidCount);
        const totalRepay = l.monthly * l.months;
        const loanFee = totalRepay - l.orig;
        return `
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px">
            <div>
              <div style="font-family:var(--display);font-size:17px;font-weight:700;cursor:pointer;color:var(--accent2);text-decoration:underline dotted" onclick="openLoanDetail('${l.id}')" title="Részletek megtekintése">${l.name}</div>
              <div style="color:var(--muted);font-size:11px;margin-top:2px">
                Folyósítva: ${l.start || '—'} &nbsp;|&nbsp; Lejárat: ${l.end || '—'} &nbsp;|&nbsp; ${paidCount}/${l.months} részlet fizetve (még ${remainCount})
              </div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn btn-secondary btn-sm js-edit-btn" onclick="openLoanEdit('${l.id}')" title="Szerkesztés">✎</button>
              <button class="btn btn-danger btn-sm js-del-btn" onclick="deleteLoan('${l.id}')" title="Törlés">×</button>
            </div>
          </div>

          <div class="grid g4" style="margin-bottom:16px">
            <div>
              <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">Felvett összeg</div>
              <div style="font-family:var(--display);font-size:16px;font-weight:700">${fmt(l.orig)}</div>
            </div>
            <div>
              <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">Fennálló tartozás</div>
              <div style="font-family:var(--display);font-size:16px;font-weight:700" class="red">${fmt(remain)}</div>
            </div>
            <div>
              <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">Havi törlesztő</div>
              <div style="font-family:var(--display);font-size:16px;font-weight:700">${fmt(l.monthly)}</div>
            </div>
            <div>
              <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">Visszafizetve</div>
              <div style="font-family:var(--display);font-size:16px;font-weight:700" class="green">${fmt(l.orig - remain)}</div>
            </div>
          </div>

          <div class="progress-wrap" style="margin-bottom:16px">
            <div class="progress-label">
              <span>Visszafizetve: ${pct.toFixed(1)}%</span>
              <span style="color:var(--muted)">${fmt(l.orig - remain)} / ${fmt(l.orig)}</span>
            </div>
            <div class="progress-bar" style="height:8px">
              <div class="progress-fill" style="width:${pct}%;background:var(--accent)"></div>
            </div>
          </div>

          <div style="display:flex;flex-wrap:wrap;gap:20px;font-size:12px">
            <div><span style="color:var(--muted)">Kamat: </span><strong>${l.rate}% / év</strong></div>
            <div><span style="color:var(--muted)">THM: </span><strong>${l.thm}%</strong></div>
            <div><span style="color:var(--muted)">Futamidő: </span><strong>${l.months} hónap</strong></div>
            <div><span style="color:var(--muted)">Teljes visszafizetendő: </span><strong class="cyan">${fmt(totalRepay)}</strong></div>
            <div><span style="color:var(--muted)">Hitel díja: </span><strong class="red">${fmt(loanFee)}</strong></div>
            <div><span style="color:var(--muted)">Törlesztés: </span><strong>${FREQ_LABEL[l.freq] || 'Havi'}, minden hónap ${l.payday ? l.payday + '.' : '—'}</strong></div>
            <div><span style="color:var(--muted)">Következő törlesztés: </span><strong class="cyan">${nextPayment}</strong></div>
          </div>
        </div>
      `;
      })
      .join('');
  }
  document.getElementById('ln-sum-remain').textContent = fmtAgg(totalRemain);
  document.getElementById('ln-sum-monthly').textContent = fmtAgg(totalMonthly);
  document.getElementById('ln-sum-yearly').textContent = fmtAgg(totalMonthly * 12);
  const lnFeeTotal = sumRepayAll - sumOrig;
  const lnFeeEl = document.getElementById('ln-sum-fee');
  lnFeeEl.textContent = fmtAgg(lnFeeTotal);
  lnFeeEl.className = 'stat-value red';
  const lnFeeSubEl = document.getElementById('ln-sum-fee-sofar');
  if (lnFeeSubEl)
    lnFeeSubEl.textContent = `${L('Eddig kifizetve:', 'Paid so far:')} ${fmtAgg(sumInterestPaid)}`;
}
const PURITY_FACTOR = {
  999.9: 0.9999,
  916: 0.916,
  750: 0.75,
  585: 0.585,
  egyéb: 1
};
function goldItemValue(item, spot) {
  const factor = PURITY_FACTOR[item.purity] ?? 1;
  return item.grams * spot * factor;
}
let goldEditId = null;
async function deleteGold(id) {
  const g = state.goldItems.find((x) => x.id === id);
  if (!g) return;
  const inPledge = state.pledges.some(
    (p) => !p.redeemed && (Array.isArray(p.goldIds) ? p.goldIds.includes(id) : p.goldId === id)
  );
  const msg = inPledge
    ? `A(z) "${g.name}" tétel jelenleg zálogban van. Ha törlöd, a zálogtétel fedezete hiányos lesz. Biztosan törlöd?`
    : `Biztosan törlöd a(z) "${g.name}" tételt?`;
  if (!(await uiConfirm(msg))) return;
  state.goldItems = state.goldItems.filter((x) => x.id !== id);
  save();
  renderAll();
}
function openGoldAdd() {
  goldEditId = null;
  ['gd-name', 'gd-code', 'gd-grams', 'gd-cost'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('gd-date').value = now();
  const t = document.getElementById('gold-modal-title');
  if (t) t.textContent = 'Aranytétel hozzáadása';
  const b = document.getElementById('gold-submit-btn');
  if (b) b.textContent = '+ Hozzáadás';
  openModal('gold-modal');
}
function openGoldEdit(id) {
  const g = state.goldItems.find((x) => x.id === id);
  if (!g) return;
  goldEditId = id;
  const setV = (elId, v) => {
    const el = document.getElementById(elId);
    if (el) el.value = v === undefined || v === null ? '' : v;
  };
  setV('gd-name', g.name);
  setV('gd-code', g.code);
  setV('gd-form', g.form);
  setV('gd-purity', g.purity);
  setV('gd-grams', g.grams);
  setV('gd-cost', g.cost ? g.cost.toLocaleString('hu-HU') : '');
  setV('gd-date', g.date);
  const t = document.getElementById('gold-modal-title');
  if (t) t.textContent = 'Aranytétel szerkesztése';
  const b = document.getElementById('gold-submit-btn');
  if (b) b.textContent = 'Mentés';
  openModal('gold-modal');
}
function addGold() {
  const name = document.getElementById('gd-name').value.trim();
  const code = document.getElementById('gd-code').value.trim();
  const form = document.getElementById('gd-form').value;
  const purity = document.getElementById('gd-purity').value;
  const grams = parseFloat(document.getElementById('gd-grams').value) || 0;
  const cost = parseAmount('gd-cost');
  const date = document.getElementById('gd-date').value || now();
  if (!grams) return;
  if (goldEditId) {
    const g = state.goldItems.find((x) => x.id === goldEditId);
    if (g)
      Object.assign(g, {
        name: name || 'Arany',
        code,
        form,
        purity,
        grams,
        cost,
        date
      });
  } else {
    state.goldItems.push({
      id: uid(),
      name: name || 'Arany',
      code,
      form,
      purity,
      grams,
      cost,
      date
    });
  }
  save();
  goldEditId = null;
  ['gd-name', 'gd-code', 'gd-grams', 'gd-cost'].forEach(
    (id) => (document.getElementById(id).value = '')
  );
  document.getElementById('gd-date').value = now();
  closeModal('gold-modal');
  renderAll();
  refreshAllPrices();
}
function pledgeAddDays(dateStr, days) {
  const d = new Date(dateStr + 'T00:00:00');
  if (isNaN(d)) return null;
  d.setDate(d.getDate() + days);
  return d;
}
function calcPledgeEndDate() {
  const start = document.getElementById('pl-start').value;
  const days = parseInt(document.getElementById('pl-term').value) || 0;
  const info = document.getElementById('pl-end-info');
  const endEl = document.getElementById('pl-end');
  if (!start || !days) {
    endEl.value = '';
    info.textContent = '';
    return;
  }
  const end = pledgeAddDays(start, days - 1);
  if (end) {
    endEl.value = toLocalDateStr(end);
    info.textContent = `${L('Lejárat:', 'Maturity:')} ${end.toLocaleDateString(LOC())} (${days} ${L('nap futamidő', 'day term')})`;
  }
}
function pledgedGoldIds(exceptPledgeId) {
  const s = new Set();
  (state.pledges || []).forEach((p) => {
    if (p.redeemed) return;
    if (exceptPledgeId && p.id === exceptPledgeId) return;
    if (Array.isArray(p.goldIds)) p.goldIds.forEach((id) => s.add(id));
    else if (p.goldId) s.add(p.goldId);
  });
  return s;
}
function populatePledgeGoldSelect() {
  const box = document.getElementById('pl-gold');
  if (!box) return;
  if (!state.goldItems.length) {
    box.innerHTML =
      '<div style="color:var(--muted);font-size:12px;padding:6px 8px">Nincs rögzített aranytétel</div>';
    updatePledgeGoldSummary();
    return;
  }
  const used = pledgedGoldIds();
  const available = state.goldItems.filter((g) => !used.has(g.id));
  if (!available.length) {
    box.innerHTML =
      '<div style="color:var(--muted);font-size:12px;padding:6px 8px">Minden aranytétel zálogban van</div>';
    updatePledgeGoldSummary();
    return;
  }
  box.innerHTML = available
    .map(
      (g) => `
    <label style="display:flex;align-items:center;gap:8px;padding:6px 8px;font-size:12px;cursor:pointer">
      <input type="checkbox" value="${g.id}" onchange="updatePledgeGoldSummary()" style="width:16px;height:16px;accent-color:var(--accent);flex-shrink:0">
      <span>${g.name} — ${fmtNum(g.grams)} g${g.code ? ' (' + g.code + ')' : ''}</span>
    </label>
  `
    )
    .join('');
  updatePledgeGoldSummary();
}
function updatePledgeGoldSummary() {
  const summary = document.getElementById('pl-gold-summary');
  if (!summary) return;
  const n = document.querySelectorAll('#pl-gold input:checked').length;
  summary.querySelector('.pl-gold-summary-text').textContent = n
    ? `${n} aranytétel kiválasztva`
    : 'Válassz aranytételt…';
}
function updatePledgeNet() {
  const principal = parseAmount('pl-principal');
  const feePct = parseFloat(document.getElementById('pl-fee').value) || 0;
  const info = document.getElementById('pl-net-info');
  if (!info) return;
  if (principal) {
    const fee = (principal * feePct) / 100;
    info.textContent = `${L('Kézhez kapott:', 'Amount received:')} ${fmt(principal - fee)} (${L('kölcsön', 'loan')} ${fmt(principal)} − ${L('kezelési', 'handling')} ${feePct}% = ${fmt(fee)})`;
  } else {
    info.textContent = '';
  }
}
let pledgeEditId = null;
function openPledgeAdd() {
  pledgeEditId = null;
  ['pl-principal', 'pl-fee', 'pl-rate', 'pl-thm', 'pl-end', 'pl-ticket'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const term = document.getElementById('pl-term');
  if (term) term.value = '';
  const start = document.getElementById('pl-start');
  if (start) start.value = '';
  document.querySelectorAll('#pl-gold input:checked').forEach((i) => (i.checked = false));
  const info = document.getElementById('pl-end-info');
  if (info) info.textContent = '';
  const net = document.getElementById('pl-net-info');
  if (net) net.textContent = '';
  const gsel = document.getElementById('pl-gold-wrap');
  if (gsel) gsel.style.display = '';
  const t = document.getElementById('pledge-modal-title');
  if (t) t.textContent = 'Zálogba adás';
  const b = document.getElementById('pledge-submit-btn');
  if (b) b.textContent = '+ Zálogba adás';
  openModal('pledge-modal');
}
function openPledgeEdit(id) {
  const p = state.pledges.find((x) => x.id === id);
  if (!p) return;
  pledgeEditId = id;
  const setV = (elId, v) => {
    const el = document.getElementById(elId);
    if (el) el.value = v === undefined || v === null ? '' : v;
  };
  setV('pl-ticket', p.ticketNo);
  setV('pl-principal', p.principal ? p.principal.toLocaleString('hu-HU') : '');
  setV('pl-fee', p.feePct);
  setV('pl-start', p.start);
  setV('pl-term', p.days);
  setV('pl-rate', p.rate);
  setV('pl-thm', p.thm);
  const gsel = document.getElementById('pl-gold-wrap');
  if (gsel) gsel.style.display = 'none';
  const t = document.getElementById('pledge-modal-title');
  if (t) t.textContent = 'Zálog szerkesztése';
  const b = document.getElementById('pledge-submit-btn');
  if (b) b.textContent = 'Mentés';
  openModal('pledge-modal');
  calcPledgeEndDate();
}
function addPledge() {
  const goldIds = [...document.querySelectorAll('#pl-gold input:checked')].map((i) => i.value);
  const ticketNo = (document.getElementById('pl-ticket').value || '').trim();
  const principal = parseAmount('pl-principal');
  const feePct = parseFloat(document.getElementById('pl-fee').value) || 0;
  const start = document.getElementById('pl-start').value || now();
  const days = parseInt(document.getElementById('pl-term').value) || 0;
  const rate = parseFloat(document.getElementById('pl-rate').value) || 0;
  const thm = parseFloat(document.getElementById('pl-thm').value) || 0;
  if (!principal || !days) return;
  const endD = pledgeAddDays(start, days - 1);
  const end = endD ? toLocalDateStr(endD) : '';
  if (pledgeEditId) {
    const p = state.pledges.find((x) => x.id === pledgeEditId);
    if (p)
      Object.assign(p, {
        ticketNo,
        principal,
        feePct,
        start,
        days,
        rate,
        thm,
        end
      });
  } else {
    const goldNames = goldIds.map((id) => {
      const g = state.goldItems.find((x) => x.id === id);
      return g ? g.name : '—';
    });
    state.pledges.push({
      id: uid(),
      goldIds,
      goldNames,
      ticketNo,
      principal,
      feePct,
      start,
      days,
      rate,
      thm,
      end
    });
  }
  save();
  pledgeEditId = null;
  ['pl-principal', 'pl-fee', 'pl-rate', 'pl-thm', 'pl-end', 'pl-ticket'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('pl-end-info').textContent = '';
  document.getElementById('pl-net-info').textContent = '';
  const goldDd = document.querySelector('.pl-gold-dd');
  if (goldDd) goldDd.removeAttribute('open');
  const gsel = document.getElementById('pl-gold-wrap');
  if (gsel) gsel.style.display = '';
  closeModal('pledge-modal');
  renderAll();
}
async function deletePledge(id) {
  const p = state.pledges.find((x) => x.id === id);
  if (!p) return;
  const label = p.ticketNo ? `a(z) ${p.ticketNo} zálogjegyet` : 'ezt a zálogtételt';
  if (!(await uiConfirm(`Biztosan törlöd ${label}?`))) return;
  state.pledges = state.pledges.filter((x) => x.id !== id);
  save();
  renderAll();
}
let redeemPledgeId = null;
function openRedeemModal(id) {
  const p = state.pledges.find((x) => x.id === id);
  if (!p) return;
  redeemPledgeId = id;
  const d = calcPledgeDebt(p);
  const ids = Array.isArray(p.goldIds) ? p.goldIds : p.goldId ? [p.goldId] : [];
  const names = ids.map((gid, i) => {
    const g = state.goldItems.find((x) => x.id === gid);
    return g ? g.name : (p.goldNames && p.goldNames[i]) || '—';
  });
  document.getElementById('redeem-info').innerHTML =
    `<strong style="color:var(--text);font-size:14px">${names.join(', ') || '—'}</strong><br>` +
    `Jelenlegi tartozás: <strong style="color:var(--red)">${fmt(d.currentDebt)}</strong> &nbsp;|&nbsp; ` +
    `Kiváltás lejáratkor: <strong>${fmt(d.totalRepay)}</strong>`;
  document.getElementById('redeem-date').value = now();
  const amtEl = document.getElementById('redeem-amount');
  amtEl.value = Math.round(d.currentDebt).toLocaleString('hu-HU');
  document.getElementById('redeem-error').style.display = 'none';
  document.getElementById('redeem-modal').style.display = 'flex';
  syncModalScrollLock();
}
function closeRedeemModal() {
  document.getElementById('redeem-modal').style.display = 'none';
  redeemPledgeId = null;
  syncModalScrollLock();
}
function confirmRedeem() {
  if (!redeemPledgeId) return;
  const p = state.pledges.find((x) => x.id === redeemPledgeId);
  if (!p) {
    closeRedeemModal();
    return;
  }
  const amount = parseAmount('redeem-amount');
  const date = document.getElementById('redeem-date').value || now();
  const errEl = document.getElementById('redeem-error');
  if (!amount) {
    errEl.textContent = 'Adj meg kiváltási összeget.';
    errEl.style.display = 'block';
    return;
  }
  p.redeemed = true;
  p.redeemedAmount = amount;
  p.redeemedDate = date;
  save();
  closeRedeemModal();
  renderAll();
}
function calcPledgeDebt(p) {
  const principal = p.principal != null ? p.principal : p.cash || 0;
  const rate = p.rate || 0;
  const feePct = p.feePct != null ? p.feePct : principal ? ((p.fee || 0) / principal) * 100 : 0;
  const fee = (principal * feePct) / 100;
  const cashReceived = principal - fee;
  let termYears, elapsedYears, termLabel, elapsedLabel;
  if (p.days != null) {
    const days = p.days;
    termYears = days / 360;
    let ed = 0;
    if (p.start) ed = Math.floor((Date.now() - new Date(p.start).getTime()) / 86400000);
    ed = Math.max(0, Math.min(ed, days));
    elapsedYears = ed / 360;
    termLabel = `${days} nap`;
    elapsedLabel = `${ed} / ${days} nap`;
  } else {
    const months = p.months || 0;
    termYears = months / 12;
    let em = 0;
    if (p.start) {
      const s = new Date(p.start),
        t = new Date();
      em = (t.getFullYear() - s.getFullYear()) * 12 + (t.getMonth() - s.getMonth());
      if (t.getDate() < s.getDate()) em -= 1;
    }
    em = Math.max(0, Math.min(em, months));
    elapsedYears = em / 12;
    termLabel = `${months} hónap`;
    elapsedLabel = `${em} / ${months} hónap`;
  }
  const totalInterest = ((principal * rate) / 100) * termYears;
  const totalRepay = principal + totalInterest;
  const accrued = ((principal * rate) / 100) * elapsedYears;
  const currentDebt = principal + accrued;
  return {
    principal,
    feePct,
    fee,
    cashReceived,
    totalInterest,
    totalRepay,
    accrued,
    currentDebt,
    termLabel,
    elapsedLabel
  };
}
function pledgeTotalDebt() {
  return state.pledges.reduce((a, p) => a + (p.redeemed ? 0 : calcPledgeDebt(p).currentDebt), 0);
}
let _openPledgeId = null;
function openPledgeDetail(id) {
  const p = state.pledges.find((x) => x.id === id);
  if (!p) return;
  _openPledgeId = id;
  const lv = document.getElementById('pledge-list-view');
  const dv = document.getElementById('pledge-detail-view');
  const addBtn = document.getElementById('pledge-add-btn');
  if (lv) lv.style.display = 'none';
  if (dv) dv.style.display = 'block';
  if (addBtn) addBtn.style.display = 'none';
  const c = document.getElementById('pledge-detail-content');
  if (c) c.innerHTML = buildPledgeDetailHTML(p);
}
function closePledgeDetail() {
  _openPledgeId = null;
  const lv = document.getElementById('pledge-list-view');
  const dv = document.getElementById('pledge-detail-view');
  const addBtn = document.getElementById('pledge-add-btn');
  if (lv) lv.style.display = 'block';
  if (dv) dv.style.display = 'none';
  if (addBtn) addBtn.style.display = '';
}
function buildPledgeDetailHTML(p) {
  const d = calcPledgeDebt(p);
  const spot = state.goldSpot || 28000;
  const ids = Array.isArray(p.goldIds) ? p.goldIds : p.goldId ? [p.goldId] : [];
  let totGrams = 0,
    totCost = 0,
    totVal = 0,
    liveCount = 0;
  const rowsHtml = ids
    .map((id, i) => {
      const g = state.goldItems.find((x) => x.id === id);
      if (!g) {
        const fb = (p.goldNames && p.goldNames[i]) || p.goldName || '—';
        return `<tr><td colspan="9" style="color:var(--muted)">${escHtml(fb)} (törölt tétel)</td></tr>`;
      }
      liveCount++;
      const val = goldItemValue(g, spot);
      const pl = val - g.cost;
      const plPct = g.cost ? (pl / g.cost) * 100 : 0;
      totGrams += g.grams;
      totCost += g.cost;
      totVal += val;
      return `<tr>
      <td><strong>${escHtml(g.name)}</strong></td>
      <td style="color:var(--muted)">${g.code || '—'}</td>
      <td><span class="badge badge-yellow">${g.form}</span></td>
      <td>${g.purity}</td>
      <td>${fmtNum(g.grams)} g</td>
      <td style="color:var(--muted)">${g.date || '—'}</td>
      <td>${fmt(g.cost)}</td>
      <td class="cyan">${fmt(val)}</td>
      <td class="${pl >= 0 ? 'green' : 'red'}">${pl >= 0 ? '+' : ''}${fmt(pl)} <span style="font-size:10px">(${pl >= 0 ? '+' : ''}${plPct.toFixed(1)}%)</span></td>
    </tr>`;
    })
    .join('');
  const totPL = totVal - totCost;
  const redeemed = !!p.redeemed;
  let statusBadge;
  if (redeemed) statusBadge = `<span class="badge badge-purple">kiváltva</span>`;
  else if (p.end && p.end < now()) statusBadge = `<span class="badge badge-red">lejárt</span>`;
  else statusBadge = `<span class="badge badge-green">aktív</span>`;
  return `
    <div class="card">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:4px">
        <div style="font-family:var(--display);font-size:20px;font-weight:700">Zálogjegy: ${p.ticketNo ? escHtml(p.ticketNo) : '—'}</div>
        ${statusBadge}
      </div>
      <div style="color:var(--muted);font-size:12px;margin-bottom:18px">Zálogba adva: ${p.start || '—'} &nbsp;|&nbsp; Lejárat: ${p.end || '—'}</div>

      <div class="grid g4" style="margin-bottom:20px">
        <div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">Kölcsön összeg</div><div style="font-family:var(--display);font-size:16px;font-weight:700">${fmt(d.principal)}</div></div>
        <div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">Kézhez kapott</div><div class="cyan" style="font-family:var(--display);font-size:16px;font-weight:700">${fmt(d.cashReceived)}</div></div>
        <div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">${redeemed ? 'Kiváltási összeg' : 'Jelenlegi tartozás'}</div><div class="${redeemed ? 'purple' : 'red'}" style="font-family:var(--display);font-size:16px;font-weight:700">${fmt(redeemed ? p.redeemedAmount || 0 : d.currentDebt)}</div></div>
        <div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">Kiváltás lejáratkor</div><div style="font-family:var(--display);font-size:16px;font-weight:700">${fmt(d.totalRepay)}</div></div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:20px;font-size:12px;margin-bottom:20px;padding-top:16px;border-top:1px solid var(--border)">
        <div><span style="color:var(--muted)">Kezelési költség: </span><strong class="red">${d.feePct}% (${fmt(d.fee)})</strong></div>
        <div><span style="color:var(--muted)">Kamat: </span><strong>${p.rate}% / év</strong></div>
        <div><span style="color:var(--muted)">THM: </span><strong>${p.thm ? p.thm + '%' : '—'}</strong></div>
        <div><span style="color:var(--muted)">Futamidő: </span><strong>${d.termLabel}</strong></div>
        <div><span style="color:var(--muted)">Eddigi kamat: </span><strong class="yellow">${fmt(d.accrued)}</strong></div>
        <div><span style="color:var(--muted)">Teljes kamat (lejáratig): </span><strong class="yellow">${fmt(d.totalInterest)}</strong></div>
        <div><span style="color:var(--muted)">Eltelt: </span><strong>${d.elapsedLabel}</strong></div>
      </div>

      <div class="card-title" style="margin-bottom:12px">Zálogban lévő aranytételek</div>
      <div class="scroll-table">
        <table>
          <thead><tr><th>Megnevezés</th><th>Kód</th><th>Forma</th><th>Tisztaság</th><th>Tömeg</th><th>Vétel dátuma</th><th>Vételár</th><th>Jelenlegi érték</th><th>P&amp;L</th></tr></thead>
          <tbody>
            ${rowsHtml}
            <tr style="border-top:2px solid var(--border2)">
              <td colspan="4"><strong>Összesen (${liveCount} tétel)</strong></td>
              <td><strong>${fmtNum(totGrams)} g</strong></td>
              <td></td>
              <td><strong>${fmt(totCost)}</strong></td>
              <td class="cyan"><strong>${fmt(totVal)}</strong></td>
              <td class="${totPL >= 0 ? 'green' : 'red'}"><strong>${totPL >= 0 ? '+' : ''}${fmt(totPL)}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function renderPledges() {
  populatePledgeGoldSelect();
  const container = document.getElementById('pledge-cards');
  if (!container) return;
  let sumCash = 0,
    sumDebt = 0,
    sumRepay = 0,
    activeCount = 0;
  function pledgeCard(p) {
    const d = calcPledgeDebt(p);
    const redeemed = !!p.redeemed;
    if (!redeemed) {
      sumCash += d.cashReceived;
      sumDebt += d.currentDebt;
      sumRepay += d.totalRepay;
      activeCount++;
    }
    const ids = Array.isArray(p.goldIds) ? p.goldIds : p.goldId ? [p.goldId] : [];
    const names = ids.map((id, i) => {
      const g = state.goldItems.find((x) => x.id === id);
      if (g) return `${g.name} — ${fmtNum(g.grams)} g`;
      const fb = (p.goldNames && p.goldNames[i]) || p.goldName || '—';
      return `${fb} (törölt tétel)`;
    });
    const goldLabel = names.length ? names.join(', ') : p.goldName || '—';
    const today = now();
    let badge;
    if (redeemed) badge = `<span class="badge badge-purple">kiváltva</span>`;
    else if (p.end && p.end < today) badge = `<span class="badge badge-red">lejárt</span>`;
    else badge = `<span class="badge badge-green">aktív</span>`;
    const headerBtn =
      `<div style="display:flex;gap:8px;flex-wrap:wrap">` +
      (redeemed
        ? ''
        : `<button class="btn btn-sm" onclick="openRedeemModal('${p.id}')">Kiváltás</button>`) +
      `<button class="btn btn-secondary btn-sm js-edit-btn" onclick="openPledgeEdit('${p.id}')" title="Szerkesztés">✎</button>` +
      `<button class="btn btn-danger btn-sm js-del-btn" onclick="deletePledge('${p.id}')" title="Törlés">×</button>` +
      `</div>`;
    const redeemRow = redeemed
      ? `<div class="alert" style="margin:0 0 16px;color:var(--purple);background:rgba(139,105,143,0.09);border-color:rgba(139,105,143,0.3)">
           ✓ Kiváltva: <strong>${p.redeemedDate || '—'}</strong> &nbsp;|&nbsp; Kiváltási összeg: <strong>${fmt(p.redeemedAmount || 0)}</strong>
         </div>`
      : '';
    return `
      <div class="card" style="${redeemed ? 'opacity:0.7' : ''}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <span class="badge badge-purple" style="font-size:13px;padding:4px 11px;cursor:pointer" onclick="openPledgeDetail('${p.id}')" title="Kattints a zálogban lévő aranyak részletezéséhez" onmouseover="this.style.filter='brightness(1.12)'" onmouseout="this.style.filter=''">${p.ticketNo ? escHtml(p.ticketNo) : '—'} ›</span>
              ${badge}
            </div>
            <div style="color:var(--muted);font-size:11px;margin-top:4px">
              Zálogba adva: ${p.start || '—'} &nbsp;|&nbsp; Lejárat: ${p.end || '—'} &nbsp;|&nbsp; ${d.termLabel}
            </div>
          </div>
          ${headerBtn}
        </div>
        ${redeemRow}
        <div class="grid g4" style="margin-bottom:16px">
          <div>
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">Kölcsön összeg</div>
            <div style="font-family:var(--display);font-size:16px;font-weight:700">${fmt(d.principal)}</div>
          </div>
          <div>
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">Kézhez kapott</div>
            <div style="font-family:var(--display);font-size:16px;font-weight:700" class="cyan">${fmt(d.cashReceived)}</div>
          </div>
          <div>
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">${redeemed ? 'Kiváltási összeg' : 'Jelenlegi tartozás'}</div>
            <div style="font-family:var(--display);font-size:16px;font-weight:700" class="${redeemed ? 'purple' : 'red'}">${fmt(redeemed ? p.redeemedAmount || 0 : d.currentDebt)}</div>
          </div>
          <div>
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">Kiváltás lejáratkor</div>
            <div style="font-family:var(--display);font-size:16px;font-weight:700">${fmt(d.totalRepay)}</div>
          </div>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:20px;font-size:12px">
          <div><span style="color:var(--muted)">Kezelési költség: </span><strong class="red">${d.feePct}% (${fmt(d.fee)})</strong></div>
          <div><span style="color:var(--muted)">Kamat: </span><strong>${p.rate}% / év</strong></div>
          <div><span style="color:var(--muted)">THM: </span><strong>${p.thm ? p.thm + '%' : '—'}</strong></div>
          <div><span style="color:var(--muted)">Futamidő: </span><strong>${d.termLabel}</strong></div>
          <div><span style="color:var(--muted)">Eddigi kamat: </span><strong class="yellow">${fmt(d.accrued)}</strong></div>
          <div><span style="color:var(--muted)">Teljes kamat (lejáratig): </span><strong class="yellow">${fmt(d.totalInterest)}</strong></div>
          <div><span style="color:var(--muted)">Eltelt: </span><strong>${d.elapsedLabel}</strong></div>
        </div>
      </div>
    `;
  }
  if (!state.pledges.length) {
    container.innerHTML =
      '<div class="card" style="color:var(--muted);text-align:center;padding:32px">Nincs zálogba adott tétel</div>';
  } else {
    const active = state.pledges.filter((p) => !p.redeemed);
    const redeemed = state.pledges.filter((p) => p.redeemed);
    container.innerHTML = active.map(pledgeCard).join('') + redeemed.map(pledgeCard).join('');
  }
  document.getElementById('pl-sum-cash').textContent = fmtAgg(sumCash);
  document.getElementById('pl-sum-debt').textContent = fmtAgg(sumDebt);
  document.getElementById('pl-sum-repay').textContent = fmtAgg(sumRepay);
  const feeTotal = sumCash - sumRepay;
  const feeSoFar = sumCash - sumDebt;
  const feeEl = document.getElementById('pl-sum-fee');
  feeEl.textContent = fmtAgg(feeTotal);
  feeEl.className = 'stat-value ' + (feeTotal < 0 ? 'red' : 'green');
  const feeSubEl = document.getElementById('pl-sum-fee-sofar');
  if (feeSubEl) feeSubEl.textContent = `${L('Eddig:', 'So far:')} ${fmtAgg(feeSoFar)}`;
  if (_openPledgeId) {
    const dv = document.getElementById('pledge-detail-view');
    if (dv && dv.style.display !== 'none') {
      const p = state.pledges.find((x) => x.id === _openPledgeId);
      if (p) {
        const c = document.getElementById('pledge-detail-content');
        if (c) c.innerHTML = buildPledgeDetailHTML(p);
      } else closePledgeDetail();
    }
  }
}
async function fetchGoldSpotHuf() {
  try {
    await fetchFxRates();
    const r = await fetch('https://api.gold-api.com/price/XAU');
    const d = await r.json();
    const usdPerOunce = d.price;
    if (usdPerOunce) {
      if (!fxReady()) return null;
      return (usdPerOunce / 31.1035) * usdHuf;
    }
  } catch (e) {}
  return null;
}
function pledgeForGold(goldId) {
  return (
    (state.pledges || []).find(
      (pl) =>
        !pl.redeemed &&
        ((Array.isArray(pl.goldIds) && pl.goldIds.includes(goldId)) || pl.goldId === goldId)
    ) || null
  );
}
function pledgeTicketForGold(goldId) {
  const p = pledgeForGold(goldId);
  return p ? p.ticketNo || '' : '';
}
function renderGold() {
  const spot = state.goldSpot || 28000;
  let totalGrams = 0,
    totalCost = 0,
    totalValue = 0;
  const tbody = document.getElementById('gold-tbody');
  const pbody = document.getElementById('gold-pledged-tbody');
  if (!tbody) return;
  const sortedGold = [...state.goldItems].sort(
    (a, b) => a.grams - b.grams || (a.date || '').localeCompare(b.date || '')
  );
  const pledgedSet = pledgedGoldIds();
  const commonCells = (g, value, pl) => `
      <td><strong>${g.name}</strong></td>
      <td style="color:var(--muted)">${g.code || '—'}</td>
      <td><span class="badge badge-yellow">${g.form}</span></td>
      <td>${g.purity}</td>
      <td>${fmtNum(g.grams)} g</td>
      <td style="color:var(--muted)">${g.date || '—'}</td>
      <td>${fmt(g.cost)}</td>
      <td class="cyan">${fmt(value)}</td>
      <td class="${pl >= 0 ? 'green' : 'red'}">${pl >= 0 ? '+' : ''}${fmt(pl)}</td>`;
  const freeRows = [],
    pledgedRows = [];
  sortedGold.forEach((g) => {
    const value = goldItemValue(g, spot);
    const pl = value - g.cost;
    totalGrams += g.grams;
    totalCost += g.cost;
    totalValue += value;
    if (pledgedSet.has(g.id)) {
      const ticket = pledgeTicketForGold(g.id);
      pledgedRows.push(
        `<tr>${commonCells(g, value, pl)}<td><div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center"><span class="badge badge-purple">${ticket ? escHtml(ticket) : '—'}</span><button class="btn btn-sm btn-secondary js-edit-btn" onclick="openGoldEdit('${g.id}')" title="Szerkesztés">✎</button><button class="btn btn-danger btn-sm js-del-btn" onclick="deleteGold('${g.id}')" title="Törlés">×</button></div></td></tr>`
      );
    } else {
      freeRows.push(
        `<tr>${commonCells(g, value, pl)}<td><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-sm" onclick="openGoldSell('${g.id}')">Eladás</button><button class="btn btn-sm btn-secondary js-edit-btn" onclick="openGoldEdit('${g.id}')" title="Szerkesztés">✎</button><button class="btn btn-danger btn-sm js-del-btn" onclick="deleteGold('${g.id}')" title="Törlés">×</button></div></td></tr>`
      );
    }
  });
  tbody.innerHTML =
    freeRows.join('') ||
    '<tr><td colspan="10" style="color:var(--muted);text-align:center;padding:20px">Nincs eladható aranytétel</td></tr>';
  if (pbody)
    pbody.innerHTML =
      pledgedRows.join('') ||
      '<tr><td colspan="10" style="color:var(--muted);text-align:center;padding:20px">Nincs zálogosított aranytétel</td></tr>';
  const totalPL = totalValue - totalCost;
  document.getElementById('gd-total-grams').textContent = fmtNum(totalGrams) + ' g';
  document.getElementById('gd-total-cost').textContent = fmtAgg(totalCost);
  document.getElementById('gd-total-value').textContent = fmtAgg(totalValue);
  const plEl = document.getElementById('gd-total-pl');
  plEl.textContent = (totalPL >= 0 ? '+' : '') + fmtAgg(totalPL);
  plEl.className = 'stat-value ' + (totalPL >= 0 ? 'green' : 'red');
  document.getElementById('gd-total-pl-card').className =
    'card ' + (totalPL >= 0 ? 'card-stat-green' : 'card-stat-red');
}
let goldSellId = null;
function openGoldSell(id) {
  const g = state.goldItems.find((x) => x.id === id);
  if (!g) return;
  goldSellId = id;
  const spot = state.goldSpot || 28000;
  const value = goldItemValue(g, spot);
  document.getElementById('gs-info').innerHTML =
    `<strong style="color:var(--text);font-size:14px">${escHtml(g.name)}</strong> · ${fmtNum(g.grams)} g · ${L('vételár:', 'purchase price:')} ${fmt(g.cost)} · ${L('becsült érték:', 'estimated value:')} <strong style="color:var(--accent2)">${fmt(value)}</strong>`;
  document.getElementById('gs-price').value = Math.round(value).toLocaleString('hu-HU');
  document.getElementById('gs-date').value = now();
  updateGoldSalePL();
  openModal('gold-sale-modal');
}
function updateGoldSalePL() {
  const g = state.goldItems.find((x) => x.id === goldSellId);
  if (!g) return;
  const price = parseAmount('gs-price');
  const pl = price - g.cost;
  const el = document.getElementById('gs-pl');
  if (el)
    el.innerHTML = `Eredmény (P&L): <strong class="${pl >= 0 ? 'green' : 'red'}">${pl >= 0 ? '+' : ''}${fmt(pl)}</strong>`;
}
function confirmGoldSell() {
  const g = state.goldItems.find((x) => x.id === goldSellId);
  if (!g) return;
  const price = parseAmount('gs-price');
  if (!price) return;
  state.goldItems = state.goldItems.filter((x) => x.id !== g.id);
  save();
  closeModal('gold-sale-modal');
  goldSellId = null;
  renderAll();
}
async function deleteGoldFromSale() {
  if (!goldSellId) return;
  if (!(await uiConfirm('Biztosan törlöd ezt az aranytételt (eladás rögzítése nélkül)?'))) return;
  state.goldItems = state.goldItems.filter((x) => x.id !== goldSellId);
  save();
  closeModal('gold-sale-modal');
  goldSellId = null;
  renderAll();
}
function goldTotalValue() {
  const spot = state.goldSpot || 28000;
  return state.goldItems.reduce((a, g) => a + goldItemValue(g, spot), 0);
}
function goldTotalCost() {
  return state.goldItems.reduce((a, g) => a + g.cost, 0);
}
const CYCLE_LABEL = {
  monthly: 'Havi',
  quarterly: 'Negyedéves',
  yearly: 'Éves',
  weekly: 'Heti'
};
const CYCLE_TO_MONTHLY = {
  monthly: 1,
  quarterly: 1 / 3,
  yearly: 1 / 12,
  weekly: 52 / 12
};
function serviceMonthlyCost(s) {
  return serviceAmountHuf(s) * (CYCLE_TO_MONTHLY[s.cycle] ?? 1);
}
let serviceEditId = null;
function openServiceAdd() {
  serviceEditId = null;
  ['sv-name', 'sv-amount', 'sv-day'].forEach((id) => (document.getElementById(id).value = ''));
  document.querySelectorAll('#sv-cat input:checked').forEach((i) => (i.checked = false));
  const cyc = document.getElementById('sv-cycle');
  if (cyc) cyc.value = 'monthly';
  const cur = document.getElementById('sv-currency');
  if (cur) cur.value = 'HUF';
  updateServiceLabels();
  const t = document.getElementById('service-modal-title');
  if (t) t.textContent = 'Szolgáltatás rögzítése';
  const b = document.getElementById('service-submit-btn');
  if (b) b.textContent = '+ Hozzáadás';
  openModal('service-modal');
}
function openServiceEdit(id) {
  const s = state.services.find((x) => x.id === id);
  if (!s) return;
  serviceEditId = id;
  document.getElementById('sv-name').value = s.name || '';
  document.getElementById('sv-amount').value = s.amount
    ? s.amount.toLocaleString('hu-HU', { maximumFractionDigits: 2 })
    : '';
  const curSel = document.getElementById('sv-currency');
  if (curSel) curSel.value = s.currency || 'HUF';
  updateServiceLabels();
  const cyc = document.getElementById('sv-cycle');
  if (cyc) cyc.value = s.cycle || 'monthly';
  document.getElementById('sv-day').value = s.day || '';
  const cats = Array.isArray(s.cat) ? s.cat : s.cat ? [s.cat] : [];
  document.querySelectorAll('#sv-cat input').forEach((i) => {
    i.checked = cats.includes(i.value);
  });
  const t = document.getElementById('service-modal-title');
  if (t) t.textContent = 'Szolgáltatás szerkesztése';
  const b = document.getElementById('service-submit-btn');
  if (b) b.textContent = 'Mentés';
  openModal('service-modal');
}
function updateServiceLabels() {
  const sel = document.getElementById('sv-currency');
  const cur = sel ? sel.value : 'HUF';
  const sym = cur === 'HUF' ? L('Ft', 'HUF') : cur;
  const lbl = document.getElementById('sv-amount-label');
  if (lbl) lbl.textContent = `${L('Díj', 'Fee')} (${sym})`;
}
function addService() {
  const name = document.getElementById('sv-name').value.trim();
  const cat = [...document.querySelectorAll('#sv-cat input:checked')].map((i) => i.value);
  const amount = parseMoney('sv-amount');
  const curSel = document.getElementById('sv-currency');
  const currency = curSel ? curSel.value : 'HUF';
  const cycle = document.getElementById('sv-cycle').value;
  const day = parseInt(document.getElementById('sv-day').value) || 0;
  if (!name || !amount) return;
  if (serviceEditId) {
    const s = state.services.find((x) => x.id === serviceEditId);
    if (s)
      Object.assign(s, {
        name,
        cat,
        amount,
        currency,
        cycle,
        day
      });
  } else {
    state.services.push({
      id: uid(),
      name,
      cat,
      amount,
      currency,
      cycle,
      day,
      active: true
    });
  }
  save();
  serviceEditId = null;
  ['sv-name', 'sv-amount', 'sv-day'].forEach((id) => (document.getElementById(id).value = ''));
  document.querySelectorAll('#sv-cat input:checked').forEach((i) => (i.checked = false));
  closeModal('service-modal');
  renderServices();
  renderDashboard();
}
async function deleteService(id) {
  const sv = state.services.find((x) => x.id === id);
  if (!sv) return;
  if (!(await uiConfirm(`Biztosan törlöd ezt a szolgáltatást?\n\n${sv.name}`))) return;
  state.services = state.services.filter((x) => x.id !== id);
  save();
  renderServices();
  renderDashboard();
}
function toggleService(id) {
  const s = state.services.find((x) => x.id === id);
  if (s) {
    s.active = !s.active;
    save();
    renderServices();
    renderDashboard();
  }
}
function nextChargeDate(day) {
  if (!day) return null;
  const today = new Date();
  let d = new Date(today.getFullYear(), today.getMonth(), day);
  if (d < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
    d = new Date(today.getFullYear(), today.getMonth() + 1, day);
  }
  const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, last));
  return d;
}
function renderServices() {
  const tbody = document.getElementById('services-tbody');
  if (!tbody) return;
  let totalMonthly = 0,
    activeCount = 0;
  const charges = [];
  tbody.innerHTML =
    [...state.services]
      .sort((a, b) => {
        const da = a.day || 99,
          db = b.day || 99;
        if (da !== db) return da - db;
        return (a.name || '').localeCompare(b.name || '', 'hu');
      })
      .map((s) => {
        const monthly = serviceMonthlyCost(s);
        if (s.active) {
          totalMonthly += monthly;
          activeCount++;
          const nd = nextChargeDate(s.day);
          if (nd)
            charges.push({
              date: nd,
              name: s.name,
              amount: serviceAmountHuf(s)
            });
        }
        const statusBadge = s.active
          ? `<span class="badge badge-green" style="cursor:pointer" title="Kattints a szüneteltetéshez" onclick="toggleService('${s.id}')">● Aktív</span>`
          : `<span class="badge" style="background:rgba(107,114,128,0.15);color:var(--muted);cursor:pointer" title="Kattints az aktiváláshoz" onclick="toggleService('${s.id}')">⏸ Szünetel</span>`;
        return `<tr style="${s.active ? '' : 'opacity:0.5'}">
      <td><strong>${s.name}</strong><br><span style="font-size:10px;color:var(--muted)">${Array.isArray(s.cat) ? s.cat.join(', ') || '—' : s.cat || '—'}</span></td>
      <td>${fmtCur(s.amount, s.currency || 'HUF')}${(s.currency && s.currency !== 'HUF') ? `<br><span style="font-size:10px;color:var(--muted)">≈ ${fmt(serviceAmountHuf(s))}</span>` : ''}</td>
      <td>${CYCLE_LABEL[s.cycle] || s.cycle}</td>
      <td>${s.day ? s.day + '.' : '—'}</td>
      <td class="red">${fmt(monthly)}</td>
      <td>${statusBadge}</td>
      <td>
        <div class="row-actions">
          <button class="btn btn-secondary btn-sm" onclick="openPriceModal('${s.id}')" title="Ár módosítása">Ár</button>
          <button class="btn btn-secondary btn-sm js-edit-btn" onclick="openServiceEdit('${s.id}')" title="Szerkesztés">✎</button>
          <button class="btn btn-danger btn-sm js-del-btn" onclick="deleteService('${s.id}')">×</button>
        </div>
      </td>
    </tr>`;
      })
      .join('') ||
    '<tr><td colspan="7" style="color:var(--muted);text-align:center;padding:20px">Nincs rögzített szolgáltatás</td></tr>';
  document.getElementById('sv-monthly').textContent = fmtAgg(totalMonthly);
  document.getElementById('sv-yearly').textContent = fmtAgg(totalMonthly * 12);
  document.getElementById('sv-count').textContent = activeCount + ' db';
  const nextEl = document.getElementById('sv-next');
  if (nextEl) {
    if (!charges.length) {
      nextEl.innerHTML = '—';
    } else {
      const minTime = Math.min(...charges.map((c) => c.date.getTime()));
      const due = charges.filter((c) => c.date.getTime() === minTime);
      const dateStr = new Date(minTime).toLocaleDateString(LOC());
      const dayTotal = due.reduce((a, c) => a + c.amount, 0);
      nextEl.innerHTML =
        `${dateStr}` +
        `<div style="font-size:11px;color:var(--muted);font-weight:400;margin-top:3px;line-height:1.4">${due.map((c) => escHtml(c.name)).join(', ')}</div>` +
        (due.length > 1
          ? `<div style="font-size:11px;color:var(--muted);font-weight:600;margin-top:2px">${L('Aznap összesen:', 'Day total:')} ${fmtAgg(dayTotal)}</div>`
          : '');
    }
  }
}
let priceEditId = null;
function openPriceModal(id) {
  const s = state.services.find((x) => x.id === id);
  if (!s) return;
  priceEditId = id;
  const cur = s.currency || 'HUF';
  const sym = cur === 'HUF' ? L('Ft', 'HUF') : cur;
  document.getElementById('pc-service-name').innerHTML =
    `<strong style="color:var(--text)">${escHtml(s.name)}</strong> ${L('jelenlegi díja:', 'current fee:')} ${fmtCur(s.amount, cur)}`;
  const pcLbl = document.getElementById('pc-amount-label');
  if (pcLbl) pcLbl.textContent = `${L('Új díj', 'New fee')} (${sym})`;
  document.getElementById('pc-amount').value = s.amount
    ? s.amount.toLocaleString('hu-HU', { maximumFractionDigits: 2 })
    : '';
  openModal('price-modal');
}
function savePrice() {
  const s = state.services.find((x) => x.id === priceEditId);
  if (!s) return;
  const amount = parseMoney('pc-amount');
  if (!amount) {
    closeModal('price-modal');
    return;
  }
  s.amount = amount;
  save();
  closeModal('price-modal');
  priceEditId = null;
  renderServices();
  renderDashboard();
}
function servicesMonthlyTotal() {
  return state.services.filter((s) => s.active).reduce((a, s) => a + serviceMonthlyCost(s), 0);
}
function daysUntil(dateStr) {
  const target = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((target - today) / 86400000);
}
function buildUpcomingDatesHTML() {
  const items = [];
  const m = state.modules || {};
  (m.pledge !== false ? state.pledges : [])
    .filter((p) => !p.redeemed && p.end)
    .forEach((p) => {
      const days = daysUntil(p.end);
      if (days <= 30) {
        const goldLabel = p.goldNames && p.goldNames.length ? p.goldNames.join(', ') : 'arany';
        items.push({
          kind: 'pledge',
          kindLabel: 'zálog',
          badgeClass: 'badge-purple',
          label: `Zálog lejárata – ${goldLabel}${p.ticketNo ? ` (${p.ticketNo})` : ''}`,
          date: p.end,
          days
        });
      }
    });
  (m.loans !== false ? state.loans : []).forEach((l) => {
    const paidSet = state.paidInstallments[l.id] || {};
    for (let i = 0; i < l.months; i++) {
      if (!paidSet[i + 1]) {
        const d = getPaymentDate(l, i);
        const dateStr = toLocalDateStr(d);
        const days = daysUntil(dateStr);
        if (days <= 14) {
          items.push({
            kind: 'loan',
            kindLabel: 'hitel',
            badgeClass: 'badge-red',
            label: `Hiteltörlesztés – ${l.name}`,
            date: dateStr,
            days,
            amount: l.monthly
          });
        }
        break;
      }
    }
  });
  (m.services !== false ? state.services : [])
    .filter((s) => s.active && s.day)
    .forEach((s) => {
      const nd = nextChargeDate(s.day);
      if (nd) {
        const dateStr = toLocalDateStr(nd);
        const days = daysUntil(dateStr);
        if (days <= 14) {
          items.push({
            kind: 'service',
            kindLabel: 'szolgáltatás',
            badgeClass: 'badge-yellow',
            label: s.name,
            date: dateStr,
            days,
            amount: serviceAmountHuf(s)
          });
        }
      }
    });
  if (!items.length) {
    return '<div style="color:var(--muted);text-align:center;padding:20px;font-size:12px">Nincs közelgő kiadás a következő napokban</div>';
  }
  items.sort((a, b) => a.days - b.days);
  return items
    .map((it) => {
      let daysLabel, urgencyClass;
      if (it.days < 0) {
        daysLabel = `Lejárt ${Math.abs(it.days)} napja`;
        urgencyClass = 'red';
      } else if (it.days === 0) {
        daysLabel = 'Ma esedékes';
        urgencyClass = 'red';
      } else if (it.days <= 3) {
        daysLabel = `${it.days} nap múlva`;
        urgencyClass = 'red';
      } else if (it.days <= 7) {
        daysLabel = `${it.days} nap múlva`;
        urgencyClass = 'yellow';
      } else {
        daysLabel = `${it.days} nap múlva`;
        urgencyClass = '';
      }
      return `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);font-size:12px">
        <div style="min-width:0">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span class="badge ${it.badgeClass}" style="font-size:9px;padding:2px 6px">${it.kindLabel}</span>
            <span style="font-weight:600">${it.label}</span>
          </div>
          <div style="color:var(--muted);font-size:10px;margin-top:3px">${new Date(it.date + 'T00:00:00').toLocaleDateString(LOC())}${it.amount ? ' · ' + fmtAgg(it.amount) : ''}</div>
        </div>
        <span class="${urgencyClass}" style="font-weight:700;font-size:11px;white-space:nowrap;flex-shrink:0">${daysLabel}</span>
      </div>
    `;
    })
    .join('');
}
let _cashTLsel = null;
function computeCashTimeline(year) {
  const m = state.modules || {};
  const on = (k) => m[k] !== false;
  const income = new Array(12).fill(0);
  const expense = new Array(12).fill(0);
  const incItems = Array.from({ length: 12 }, () => []);
  const expItems = Array.from({ length: 12 }, () => []);
  const monthOf = (dateStr) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return null;
    return d.getFullYear() === year ? d.getMonth() : null;
  };
  const addInc = (i, label, amt) => {
    if (!(amt > 0)) return;
    income[i] += amt;
    incItems[i].push({ label, amount: amt });
  };
  const addExp = (i, label, amt) => {
    if (!(amt > 0)) return;
    expense[i] += amt;
    expItems[i].push({ label, amount: amt });
  };

  const salary = salaryNetMonthly();
  for (let i = 0; i < 12; i++) {
    if (salary > 0) addInc(i, 'Nettó fizetés', salary);
    incomeAdjustmentsForMonth(i, year).forEach((a) => {
      const amt = Number(a.amount) || 0;
      if (amt > 0) addInc(i, a.note || 'Bevételi korrekció (+)', amt);
      else if (amt < 0) {
        income[i] += amt;
        incItems[i].push({ label: a.note || 'Bevételi korrekció (−)', amount: amt });
      }
    });
    if (income[i] < 0) income[i] = 0;
  }

  if (on('stocks') && fxReady()) {
    const groups = {};
    state.stocks.forEach((s) => {
      (groups[s.ticker] = groups[s.ticker] || []).push(s);
    });
    Object.entries(groups).forEach(([ticker, lots]) => {
      const first = lots[0];
      if (!stockIsCash(first)) return;
      const qty = lots.reduce((a, l) => a + l.qty, 0);
      const cur = first.currency || 'HUF';
      const monthMap =
        first.divAuto && first.divByMonthNative ? first.divByMonthNative : manualDivMonthMap(first);
      if (!monthMap) return;
      Object.entries(monthMap).forEach(([mo, perShareN]) => {
        const usd = nativeToUsd(perShareN * qty, cur);
        if (usd === null) return;
        const net = netDividend(usd * usdHuf);
        const idx = +mo - 1;
        if (idx >= 0 && idx < 12) addInc(idx, 'Osztalék · ' + ticker.toUpperCase(), net);
      });
    });
  }

  if (on('crypto')) {
    state.crypto.forEach((t) => {
      if (t.type !== 'sell') return;
      const mo = monthOf(t.date);
      if (mo !== null)
        addInc(mo, 'Kripto eladás · ' + (t.coin || '').toUpperCase(), t.qty * t.price - (t.fee || 0));
    });
  }

  if (on('gold')) {
    (state.goldItems || []).forEach((g) => {
      const mo = monthOf(g.date);
      if (mo !== null) addExp(mo, 'Aranyvétel · ' + (g.name || g.code || 'arany'), g.cost || 0);
    });
  }

  if (on('stocks')) {
    state.stocks.forEach((s) => {
      const mo = monthOf(s.buyDate);
      if (mo !== null)
        addExp(mo, 'Részvényvétel · ' + (s.ticker || '').toUpperCase(), (s.qty || 0) * (s.avg || 0));
    });
  }

  if (on('crypto')) {
    state.crypto.forEach((t) => {
      if (t.type !== 'buy') return;
      const mo = monthOf(t.date);
      if (mo !== null)
        addExp(mo, 'Kriptovétel · ' + (t.coin || '').toUpperCase(), t.qty * t.price + (t.fee || 0));
    });
  }

  if (on('loans')) {
    (state.loans || []).forEach((l) => {
      const monthly = l.monthly || 0;
      if (!monthly) return;
      const s = l.firstPayment || l.start ? new Date(l.firstPayment || l.start) : null;
      const e = l.end ? new Date(l.end) : null;
      for (let i = 0; i < 12; i++) {
        const first = new Date(year, i, 1);
        const last = new Date(year, i + 1, 0);
        if (s && !isNaN(s.getTime()) && s > last) continue;
        if (e && !isNaN(e.getTime()) && e < first) continue;
        addExp(i, 'Hiteltörlesztő · ' + (l.name || 'hitel'), monthly);
      }
    });
  }

  if (on('services')) {
    (state.services || [])
      .filter((s) => s.active)
      .forEach((s) => {
        const c = serviceMonthlyCost(s);
        if (c > 0) for (let i = 0; i < 12; i++) addExp(i, 'Előfizetés · ' + (s.name || 'egyéb'), c);
      });
  }

  return { income, expense, incItems, expItems };
}

function selectTimelineMonth(i) {
  _cashTLsel = i;
  renderCashTimeline();
}

function renderCashTimeline() {
  const box = document.getElementById('d-timeline');
  if (!box) return;
  const YEAR = 2026;
  const MONTHS = ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'];
  const FULL = [
    'Január',
    'Február',
    'Március',
    'Április',
    'Május',
    'Június',
    'Július',
    'Augusztus',
    'Szeptember',
    'Október',
    'November',
    'December'
  ];
  const { income, expense, incItems, expItems } = computeCashTimeline(YEAR);
  const maxV = Math.max(1, ...income, ...expense);
  const totIn = income.reduce((a, b) => a + b, 0);
  const totOut = expense.reduce((a, b) => a + b, 0);
  const totNet = totIn - totOut;

  const today = new Date();
  let curIdx;
  if (today.getFullYear() < YEAR) curIdx = -1;
  else if (today.getFullYear() > YEAR) curIdx = 12;
  else curIdx = today.getMonth();
  const dayFrac =
    curIdx >= 0 && curIdx < 12 ? (today.getDate() - 1) / new Date(YEAR, curIdx + 1, 0).getDate() : 0;
  const todayPct = curIdx < 0 ? 0 : curIdx >= 12 ? 100 : ((curIdx + dayFrac) / 12) * 100;

  if (_cashTLsel == null || _cashTLsel < 0 || _cashTLsel > 11)
    _cashTLsel = curIdx < 0 ? 0 : curIdx > 11 ? 11 : curIdx;
  const sel = _cashTLsel;

  const H = 62;
  const cols = MONTHS.map((name, i) => {
    const inc = income[i];
    const exp = expense[i];
    const incH = Math.round((inc / maxV) * H);
    const expH = Math.round((exp / maxV) * H);
    const future = i > curIdx;
    const op = future ? 0.4 : 1;
    const dash = future ? ';outline:1px dashed var(--border2);outline-offset:-1px' : '';
    const selBg = i === sel ? 'background:var(--surface2);' : '';
    return `<div onclick="selectTimelineMonth(${i})" title="${FULL[i]}" style="flex:1 1 0;min-width:40px;cursor:pointer;display:flex;flex-direction:column;align-items:center;border-radius:8px;padding:2px 0;${selBg}">
      <div style="height:${H}px;display:flex;align-items:flex-end;justify-content:center;width:100%">
        <div style="width:58%;max-width:20px;height:${incH}px;min-height:${inc > 0 ? 2 : 0}px;background:var(--accent2);border-radius:3px 3px 0 0;opacity:${op}${dash}"></div>
      </div>
      <div style="height:2px;width:80%;background:var(--border2)"></div>
      <div style="height:${H}px;display:flex;align-items:flex-start;justify-content:center;width:100%">
        <div style="width:58%;max-width:20px;height:${expH}px;min-height:${exp > 0 ? 2 : 0}px;background:var(--red);border-radius:0 0 3px 3px;opacity:${op}${dash}"></div>
      </div>
      <div style="font-size:10px;margin-top:4px;color:${i === curIdx ? 'var(--accent)' : 'var(--muted)'};font-weight:${i === sel || i === curIdx ? 700 : 600}">${name}</div>
    </div>`;
  }).join('');

  const chart = `<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
    <div style="position:relative;min-width:360px">
      ${curIdx > 0 ? `<div style="position:absolute;top:0;bottom:20px;left:0;width:${todayPct}%;background:var(--surface2);opacity:0.4;border-radius:6px;pointer-events:none"></div>` : ''}
      <div style="display:flex;align-items:stretch;gap:2px;position:relative">${cols}</div>
      ${
        curIdx >= 0 && curIdx < 12
          ? `<div style="position:absolute;top:0;bottom:20px;left:${todayPct}%;border-left:2px dashed var(--accent);pointer-events:none"></div>
      <div style="position:absolute;top:-4px;left:${todayPct}%;transform:translateX(-50%);font-size:9px;font-weight:700;background:var(--accent);color:#1a1206;padding:1px 6px;border-radius:7px;pointer-events:none">Ma</div>`
          : ''
      }
    </div>
  </div>`;

  const sw = (c) =>
    `<span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${c};margin-right:5px;vertical-align:-1px"></span>`;
  const listHtml = (items, cls) =>
    items.length
      ? items
          .slice()
          .sort((a, b) => b.amount - a.amount)
          .map(
            (it) =>
              `<div style="display:flex;justify-content:space-between;gap:8px;font-size:12px;padding:3px 0"><span style="color:var(--muted)">${it.label}</span><span class="${cls}" style="font-weight:600;white-space:nowrap">${fmtAgg(it.amount)}</span></div>`
          )
          .join('')
      : '<div style="font-size:12px;color:var(--muted);padding:3px 0">—</div>';

  const status = sel < curIdx ? 'past' : sel === curIdx ? 'cur' : 'future';
  const badge =
    status === 'past'
      ? '<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:8px;background:var(--surface2);color:var(--muted)">Elmúlt</span>'
      : status === 'cur'
        ? '<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:8px;background:var(--accent);color:#1a1206">Aktuális</span>'
        : '<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:8px;background:var(--surface2);color:var(--accent2)">Hátravan</span>';
  const selNet = income[sel] - expense[sel];
  const detail = `<div style="margin-top:16px;border-top:1px solid var(--border);padding-top:12px">
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px">
      <strong style="font-size:14px">${FULL[sel]} ${YEAR}</strong>
      ${badge}
      <span style="margin-left:auto;font-weight:700" class="${selNet >= 0 ? 'green' : 'red'}">${selNet >= 0 ? '+' : ''}${fmtAgg(selNet)}</span>
    </div>
    <div class="grid g2" style="gap:12px">
      <div>
        <div style="font-size:11.5px;font-weight:700;margin-bottom:5px">${sw('var(--accent2)')}Bevétel · <span class="green">${fmtAgg(income[sel])}</span></div>
        ${listHtml(incItems[sel], 'green')}
      </div>
      <div>
        <div style="font-size:11.5px;font-weight:700;margin-bottom:5px">${sw('var(--red)')}Kiadás · <span class="red">${fmtAgg(expense[sel])}</span></div>
        ${listHtml(expItems[sel], 'red')}
      </div>
    </div>
  </div>`;

  box.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;gap:6px 16px;margin-bottom:14px;font-size:12px;align-items:center">
      <span>${sw('var(--accent2)')}Bevétel: <strong class="green">${fmtAgg(totIn)}</strong></span>
      <span>${sw('var(--red)')}Kiadás: <strong class="red">${fmtAgg(totOut)}</strong></span>
      <span style="margin-left:auto">Éves egyenleg: <strong class="${totNet >= 0 ? 'green' : 'red'}">${totNet >= 0 ? '+' : ''}${fmtAgg(totNet)}</strong></span>
    </div>
    ${chart}
    <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:10.5px;color:var(--muted);margin-top:8px">
      <span>Tömör sáv = elmúlt · halvány sáv = még hátra van</span>
      <span>Kattints egy hónapra a részletekért</span>
    </div>
    ${detail}
    <div style="font-size:10.5px;color:var(--muted);margin-top:12px;line-height:1.5">A fizetés, a hiteltörlesztő és az előfizetések minden hónapban ismétlődnek; az arany-, részvény- és kriptovétel, a kriptoeladás és az osztalék a tényleges dátumuk hónapjában jelenik meg. Az előfizetések havi szintre vetítve (az éves díjak 1/12-e) szerepelnek.</div>`;
}

function renderDashboard() {
  const m = state.modules || {};
  const useGold = m.gold !== false,
    useStocks = m.stocks !== false,
    useCrypto = m.crypto !== false;
  const usePledge = m.pledge !== false,
    useLoans = m.loans !== false,
    useServices = m.services !== false;
  const on = (k) => m[k] !== false;
  const anyOn = (...ks) => ks.some(on);
  const showCard = (id, cond) => {
    const el = document.getElementById(id);
    if (el) el.style.display = cond ? '' : 'none';
  };
  showCard('d-networth-card', anyOn('gold', 'stocks', 'crypto', 'loans', 'pledge'));
  showCard('d-current-card', anyOn('gold', 'stocks', 'crypto'));
  showCard('d-div-rate-card', on('stocks'));
  showCard('d-portfolio-rate-card', anyOn('loans', 'pledge'));
  showCard('d-unreal-card', anyOn('gold', 'stocks', 'crypto'));
  showCard('d-liab-card', anyOn('loans', 'pledge'));
  showCard('d-upcoming-card', anyOn('pledge', 'loans', 'services'));
  showCard('d-donut-card', anyOn('gold', 'stocks', 'crypto', 'loans', 'pledge'));
  showCard('d-breakdown-card', anyOn('gold', 'stocks', 'crypto'));
  showCard('d-cashflow-card', anyOn('stocks', 'loans', 'services') || salaryNetMonthly() > 0);
  showCard('d-div-tax-card', on('stocks'));
  showCard('d-salary-tax-card', !!(state.salary && state.salary.gross > 0));
  showCard('d-div-cal-card', on('stocks'));
  showCard('d-top-card', anyOn('gold', 'stocks', 'crypto'));
  const fillGrid = (id, autoCols) => {
    const g = document.getElementById(id);
    if (!g) return;
    const hiddenAny = [...g.children].some((c) => c.style.display === 'none');
    g.style.gridTemplateColumns = hiddenAny ? autoCols : '';
  };
  fillGrid('d-stat-grid', 'repeat(auto-fit, minmax(180px, 1fr))');
  fillGrid('d-breakdown-grid', 'repeat(auto-fit, minmax(280px, 1fr))');
  fillGrid('d-tax-grid', 'repeat(auto-fit, minmax(280px, 1fr))');
  const spanGrid = document.getElementById('d-span-grid');
  const donutCard = document.getElementById('d-donut-card');
  if (spanGrid) {
    const anyHidden = [...spanGrid.children].some((c) => c.style.display === 'none');
    spanGrid.style.gridTemplateColumns = anyHidden ? 'repeat(auto-fit, minmax(220px, 1fr))' : '';
    if (donutCard) {
      donutCard.style.gridColumn = anyHidden ? 'auto' : '';
      donutCard.style.gridRow = anyHidden ? 'auto' : '';
    }
  }
  const stockVal = useStocks
    ? state.stocks.reduce((a, s) => {
        const livePrice = getLivePrice(s.ticker);
        return a + s.qty * (livePrice || s.price);
      }, 0)
    : 0;
  const stockCost = useStocks
    ? (stockInvestedHuf() ?? state.stocks.reduce((a, s) => a + s.qty * s.avg, 0))
    : 0;
  const goldVal = useGold ? goldTotalValue() : 0;
  const goldCost = useGold ? goldTotalCost() : 0;
  const coins = calcCryptoPL();
  const cryptoOpen = useCrypto
    ? Object.values(coins).reduce((a, c) => {
        const openQty = c.buys.reduce((x, b) => x + b.qty, 0);
        const livePrice = getLivePrice(Object.keys(coins).find((k) => coins[k] === c) || '');
        const openCost = c.buys.reduce((x, b) => x + b.qty * b.price, 0);
        return a + (livePrice ? openQty * livePrice : openCost);
      }, 0)
    : 0;
  const totalLoan = useLoans ? state.loans.reduce((a, l) => a + calcRemaining(l), 0) : 0;
  const totalPledge = usePledge ? pledgeTotalDebt() : 0;
  const annualDiv = useStocks ? annualStockDividendHuf() : 0;
  const currentValue = stockVal + goldVal + cryptoOpen;
  const cryptoOpenCost = useCrypto
    ? Object.values(coins).reduce((a, c) => a + c.buys.reduce((x, b) => x + b.qty * b.price, 0), 0)
    : 0;
  const investedCost = stockCost + goldCost + cryptoOpenCost;
  document.getElementById('d-current-value').textContent = fmtAgg(currentValue);
  const gainPct = investedCost > 0 ? ((currentValue - investedCost) / investedCost) * 100 : 0;
  const pctEl = document.getElementById('d-invested-pct');
  if (investedCost > 0) {
    pctEl.textContent = (gainPct >= 0 ? '+' : '') + gainPct.toFixed(1) + '%';
    pctEl.className = gainPct >= 0 ? 'green' : 'red';
  } else {
    pctEl.textContent = '';
    pctEl.className = '';
  }
  const netWorth = stockVal + goldVal + cryptoOpen - totalLoan - totalPledge;
  const nwEl = document.getElementById('d-networth');
  nwEl.textContent = fmtAgg(netWorth);
  const nwRound = Math.round(netWorth);
  nwEl.className = 'stat-value ' + (nwRound > 0 ? 'green' : nwRound < 0 ? 'red' : '');
  const qs = document.getElementById('quick-status');
  qs.innerHTML = buildUpcomingDatesHTML();
  const monthlyLoan = useLoans ? state.loans.reduce((a, l) => a + l.monthly, 0) : 0;
  const svcMonthly = useServices ? servicesMonthlyTotal() : 0;
  const svcCount = useServices ? state.services.filter((s) => s.active).length : 0;
  const totalMonthly = monthlyLoan + svcMonthly;
  const netAnnualDiv = netDividend(annualDiv);
  const monthlyDiv = netAnnualDiv / 12;
  const divRate = totalMonthly > 0 ? (monthlyDiv / totalMonthly) * 100 : 0;
  const drEl = document.getElementById('d-div-rate');
  const drSub = document.getElementById('d-div-rate-sub');
  if (totalMonthly > 0) {
    drEl.textContent = divRate.toFixed(1) + '%';
    drEl.className = 'stat-value ' + (divRate >= 100 ? 'green' : divRate >= 50 ? 'yellow' : 'red');
  } else {
    drEl.textContent = '—';
    drEl.className = 'stat-value yellow';
  }
  drSub.innerHTML = `${L('Éves osztalék:', 'Annual dividend:')} ${fmtAgg(annualDiv)}<br><span style="color:var(--accent2)">${L('Nettó érték:', 'Net value:')} ${fmtAgg(netAnnualDiv)}</span>`;
  const dtxEl = document.getElementById('d-div-tax');
  if (dtxEl) {
    if (annualDiv > 0) {
      const bd = dividendTaxBreakdown(annualDiv);
      const ded = (a) =>
        a > 0.5
          ? `<span class="red">−${fmtAgg(a)}</span>`
          : `<span style="color:var(--muted)">—</span>`;
      const dash = `<span style="color:var(--muted)">—</span>`;
      dtxEl.innerHTML = `
        <div class="scroll-table">
        <table>
          <thead><tr><th>Tétel</th><th class="num">Adókulcs</th><th class="num">Levont adó</th><th class="num">Összeg</th></tr></thead>
          <tbody>
            <tr><td>Bruttó éves osztalék</td><td class="num">${dash}</td><td class="num">${dash}</td><td class="num">${fmtAgg(bd.gross)}</td></tr>
            <tr><td>USA forrásadó <span style="color:var(--muted)">(a bruttóból)</span></td><td class="num">${bd.usPct}%</td><td class="num">${ded(bd.usAmt)}</td><td class="num">${dash}</td></tr>
            <tr><td><strong>USA forrásadó után</strong></td><td class="num"></td><td class="num"></td><td class="num"><strong>${fmtAgg(bd.afterUs)}</strong></td></tr>
            <tr><td>SZJA <span style="color:var(--muted)">(az USA-adó utáni összegből)</span></td><td class="num">${bd.szjaPct}%</td><td class="num">${ded(bd.szjaAmt)}</td><td class="num">${dash}</td></tr>
            <tr><td>SZOCHO <span style="color:var(--muted)">(az USA-adó utáni összegből)</span></td><td class="num">${bd.szochoPct}%</td><td class="num">${ded(bd.szochoAmt)}</td><td class="num">${dash}</td></tr>
            <tr><td><strong>Nettó éves osztalék</strong></td><td class="num"></td><td class="num">${ded(bd.totalTax)}</td><td class="num green"><strong>${fmtAgg(bd.net)}</strong></td></tr>
          </tbody>
        </table>
        </div>`;
    } else {
      dtxEl.innerHTML = `<div style="color:var(--muted);font-size:12px;padding:8px 0">Nincs becsült osztalék (nincs osztalékfizető részvény).</div>`;
    }
  }
  const stxEl = document.getElementById('d-salary-tax');
  if (stxEl) {
    const sal = state.salary || salaryDefaults();
    if (sal.gross > 0) {
      const szjaAmt = (sal.gross * (sal.szja || 0)) / 100;
      const szochoAmt = (sal.gross * (sal.szocho || 0)) / 100;
      const tbAmt = (sal.gross * (sal.tb || 0)) / 100;
      const net = sal.gross - szjaAmt - szochoAmt - tbAmt;
      const ded = (a) =>
        a > 0.5
          ? `<span class="red">−${fmtAgg(a)}</span>`
          : `<span style="color:var(--muted)">—</span>`;
      const dash = `<span style="color:var(--muted)">—</span>`;
      stxEl.innerHTML = `
        <div class="scroll-table">
        <table>
          <thead><tr><th>Tétel</th><th class="num">Adókulcs</th><th class="num">Levont adó</th><th class="num">Összeg</th></tr></thead>
          <tbody>
            <tr><td>Bruttó fizetés / hó</td><td class="num">${dash}</td><td class="num">${dash}</td><td class="num">${fmtAgg(sal.gross)}</td></tr>
            <tr><td>SZJA</td><td class="num">${sal.szja || 0}%</td><td class="num">${ded(szjaAmt)}</td><td class="num">${dash}</td></tr>
            <tr><td>SZOCHO</td><td class="num">${sal.szocho || 0}%</td><td class="num">${ded(szochoAmt)}</td><td class="num">${dash}</td></tr>
            <tr><td>TB</td><td class="num">${sal.tb || 0}%</td><td class="num">${ded(tbAmt)}</td><td class="num">${dash}</td></tr>
            <tr><td><strong>Nettó fizetés / hó</strong></td><td class="num"></td><td class="num">${ded(szjaAmt + szochoAmt + tbAmt)}</td><td class="num green"><strong>${fmtAgg(net)}</strong></td></tr>
            <tr style="border-top:2px solid var(--border2)"><td><strong>Nettó fizetés / év</strong></td><td class="num"></td><td class="num"></td><td class="num green"><strong>${fmtAgg(net * 12)}</strong></td></tr>
          </tbody>
        </table>
        </div>`;
    } else {
      stxEl.innerHTML = `<div style="color:var(--muted);font-size:12px;padding:8px 0">Nincs rögzített alkalmazotti fizetés.</div>`;
    }
  }
  const donutSegs = [];
  if (useGold)
    donutSegs.push({
      label: L('Arany', 'Gold'),
      value: goldVal,
      color: '#C08A2E'
    });
  if (useStocks)
    donutSegs.push({
      label: L('Részvény', 'Stocks'),
      value: stockVal,
      color: '#3FA36C'
    });
  if (useCrypto)
    donutSegs.push({
      label: L('Kripto', 'Crypto'),
      value: cryptoOpen,
      color: '#4FA7BD'
    });
  if (usePledge)
    donutSegs.push({
      label: L('Zálog (−)', 'Pledge (−)'),
      value: totalPledge,
      color: '#8B6690'
    });
  if (useLoans)
    donutSegs.push({
      label: L('Hitel (−)', 'Loans (−)'),
      value: totalLoan,
      color: '#C24A3A'
    });
  drawDonut(donutSegs, {
    label: L('Teljes vagyon', 'Net worth'),
    value: fmtAggCompact(netWorth)
  });
  const spot = state.goldSpot || 28000;
  const totalLiab = totalLoan + totalPledge;
  const unrealPL = currentValue - investedCost;
  const setTxt = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = v;
  };
  const setCls = (id, c) => {
    const el = document.getElementById(id);
    if (el) el.className = c;
  };
  setTxt('d-invested-line', `${L('Befektetve:', 'Invested:')} ${fmtAgg(investedCost)}`);
  setTxt('d-total-liab', fmtAgg(totalLiab));
  setTxt(
    'd-total-liab-sub',
    `${L('Hitel', 'Loans')} ${fmtAgg(totalLoan)} · ${L('Zálog', 'Pledge')} ${fmtAgg(totalPledge)}`
  );
  const portfolioRate = currentValue > 0 ? (totalLiab / currentValue) * 100 : 0;
  const prEl = document.getElementById('d-portfolio-rate');
  if (prEl) {
    if (currentValue > 0) {
      prEl.textContent = portfolioRate.toFixed(1) + '%';
      prEl.className =
        'stat-value ' + (portfolioRate <= 50 ? 'green' : portfolioRate <= 100 ? 'yellow' : 'red');
      setCls(
        'd-portfolio-rate-card',
        'card ' +
          (portfolioRate <= 50
            ? 'card-stat-green'
            : portfolioRate <= 100
              ? 'card-stat-yellow'
              : 'card-stat-red')
      );
    } else {
      prEl.textContent = '—';
      prEl.className = 'stat-value';
      setCls('d-portfolio-rate-card', 'card card-stat-dark');
    }
  }
  setTxt('d-portfolio-rate-sub', 'Tartozás / eszköz');
  setTxt('d-unreal-pl', (unrealPL >= 0 ? '+' : '') + fmtAgg(unrealPL));
  setCls('d-unreal-pl', 'stat-value ' + (unrealPL >= 0 ? 'green' : 'red'));
  setCls('d-unreal-card', 'card ' + (unrealPL >= 0 ? 'card-stat-green' : 'card-stat-red'));
  setTxt(
    'd-unreal-pl-sub',
    investedCost > 0
      ? `${unrealPL >= 0 ? '+' : ''}${((unrealPL / investedCost) * 100).toFixed(1)}% a bekerülésen`
      : ''
  );
  const bt = document.getElementById('d-breakdown-tbody');
  if (bt) {
    const classes = [];
    if (useGold)
      classes.push({
        label: 'Arany',
        inv: goldCost,
        val: goldVal
      });
    if (useStocks)
      classes.push({
        label: 'Részvény',
        inv: stockCost,
        val: stockVal
      });
    if (useCrypto)
      classes.push({
        label: 'Kripto',
        inv: cryptoOpenCost,
        val: cryptoOpen
      });
    const denom = currentValue || 1;
    bt.innerHTML =
      classes
        .map((c) => {
          const pl = c.val - c.inv;
          const share = (c.val / denom) * 100;
          return `<tr>
        <td><strong>${c.label}</strong></td>
        <td>${fmtAgg(c.inv)}</td>
        <td class="cyan">${fmtAgg(c.val)}</td>
        <td class="${pl >= 0 ? 'green' : 'red'}">${pl >= 0 ? '+' : ''}${fmtAgg(pl)}</td>
        <td>${share.toFixed(1)}%</td>
      </tr>`;
        })
        .join('') +
      `<tr style="border-top:2px solid var(--border2)">
      <td><strong>Összesen</strong></td>
      <td><strong>${fmtAgg(investedCost)}</strong></td>
      <td class="cyan"><strong>${fmtAgg(currentValue)}</strong></td>
      <td class="${unrealPL >= 0 ? 'green' : 'red'}"><strong>${unrealPL >= 0 ? '+' : ''}${fmtAgg(unrealPL)}</strong></td>
      <td>100%</td>
    </tr>`;
  }
  const cf = document.getElementById('d-cashflow');
  if (cf) {
    const salaryNet = salaryNetMonthly();
    const netMonthly = monthlyDiv + salaryNet - totalMonthly;
    const ra = state.ratioAlert || ratioAlertDefaults();
    const pctOf = (amount) => (salaryNet > 0 ? (amount / salaryNet) * 100 : null);
    const cfRow = (label, amount, amountCls, amountStyle, pctCls, rowCls, amountText) => {
      const pct = pctOf(amount);
      const pctHtml = pct === null ? '' : `${pct.toFixed(1)}%`;
      return `<div class="cf-row${rowCls ? ' ' + rowCls : ''}">
        <span class="cf-label">${label}</span>
        <span class="cf-pct ${pctCls || ''}">${pctHtml}</span>
        <span class="cf-amount ${amountCls || ''}" style="${amountStyle || ''}">${amountText || fmtAgg(amount)}</span>
      </div>`;
    };
    cf.className = 'cf-grid';
    cf.innerHTML = `
      ${salaryNet > 0 ? cfRow('Bevétel — nettó fizetés / hó', salaryNet, 'green', '', 'green') : ''}
      ${useStocks ? cfRow('Bevétel — osztalék / hó', monthlyDiv, 'green', '', 'green') : ''}
      ${useLoans ? cfRow('Hiteltörlesztő / hó', monthlyLoan, ratioColor(pctOf(monthlyLoan) || 0, ra.loanYellow, ra.loanRed), 'font-weight:600', ratioColor(pctOf(monthlyLoan) || 0, ra.loanYellow, ra.loanRed)) : ''}
      ${useServices ? cfRow('Szolgáltatások / hó', svcMonthly, ratioColor(pctOf(svcMonthly) || 0, ra.svcYellow, ra.svcRed), 'font-weight:600', ratioColor(pctOf(svcMonthly) || 0, ra.svcYellow, ra.svcRed)) : ''}
      ${cfRow('Nettó havi egyenleg', netMonthly, netMonthly >= 0 ? 'green' : 'red', '', netMonthly >= 0 ? 'green' : 'red', 'cf-total', (netMonthly >= 0 ? '+' : '') + fmtAgg(netMonthly))}
    `;
  }
  const ps = document.getElementById('d-portfolio-stats');
  if (ps) {
    const goldGrams = state.goldItems.reduce((a, g) => a + g.grams, 0);
    const coinCount = Object.values(coins).filter(
      (c) => c.buys.reduce((x, b) => x + b.qty, 0) > 0
    ).length;
    const activePledges = (state.pledges || []).filter((p) => !p.redeemed).length;
    ps.innerHTML = `
      ${useGold ? `<div class="tax-row"><span style="color:var(--muted)">Aranytételek</span><span>${state.goldItems.length} db · ${fmtNum(goldGrams)} g</span></div>` : ''}
      ${useStocks ? `<div class="tax-row"><span style="color:var(--muted)">Részvénytételek</span><span>${state.stocks.length} db</span></div>` : ''}
      ${useCrypto ? `<div class="tax-row"><span style="color:var(--muted)">Kripto pozíciók</span><span>${coinCount} db</span></div>` : ''}
      ${usePledge ? `<div class="tax-row"><span style="color:var(--muted)">Zálogok</span><span>${activePledges} db</span></div>` : ''}
      ${useLoans ? `<div class="tax-row"><span style="color:var(--muted)">Aktív hitelek</span><span>${state.loans.length} db</span></div>` : ''}
      ${useServices ? `<div class="tax-row"><span style="color:var(--muted)">Aktív szolgáltatások</span><span>${svcCount} db</span></div>` : ''}
    `;
  }
  const th = document.getElementById('d-top-holdings');
  if (th) {
    const holdings = [];
    const stAgg = {};
    if (useStocks) {
      state.stocks.forEach((s) => {
        const cp = getLivePrice(s.ticker) || s.price;
        stAgg[s.ticker] = (stAgg[s.ticker] || 0) + s.qty * cp;
      });
      Object.entries(stAgg).forEach(([t, v]) =>
        holdings.push({
          name: t,
          cls: 'Részvény',
          badge: 'badge-green',
          value: v
        })
      );
    }
    if (useCrypto) {
      Object.entries(coins).forEach(([coin, c]) => {
        const oq = c.buys.reduce((x, b) => x + b.qty, 0);
        if (oq > 0) {
          const lp = getLivePrice(coin);
          const v = lp ? oq * lp : c.buys.reduce((x, b) => x + b.qty * b.price, 0);
          holdings.push({
            name: coin,
            cls: 'Kripto',
            badge: 'badge-cyan',
            value: v
          });
        }
      });
    }
    if (useGold) {
      const gAgg = {};
      state.goldItems.forEach((g) => {
        gAgg[g.name] = (gAgg[g.name] || 0) + goldItemValue(g, spot);
      });
      Object.entries(gAgg).forEach(([n, v]) =>
        holdings.push({
          name: n,
          cls: 'Arany',
          badge: 'badge-yellow',
          value: v
        })
      );
    }
    holdings.sort((a, b) => b.value - a.value);
    const top = holdings.slice(0, 6);
    if (!top.length) {
      th.innerHTML =
        '<div style="color:var(--muted);font-size:12px;padding:12px 0">Még nincs pozíció</div>';
    } else {
      const maxV = top[0].value || 1;
      th.innerHTML = top
        .map(
          (h) => `
        <div style="margin-bottom:11px">
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;margin-bottom:4px">
            <span style="min-width:0"><span class="badge ${h.badge}" style="font-size:9px">${h.cls}</span> <strong>${escHtml(h.name)}</strong></span>
            <span class="cyan" style="font-weight:600;white-space:nowrap">${fmtAgg(h.value)}</span>
          </div>
          <div class="progress-bar" style="height:5px"><div class="progress-fill" style="width:${(h.value / maxV) * 100}%;background:var(--accent2)"></div></div>
        </div>
      `
        )
        .join('');
    }
  }
  if (useStocks) {
    renderDividendCalendar();
  } else {
    const dc = document.getElementById('div-calendar-dash');
    if (dc)
      dc.innerHTML =
        '<div style="color:var(--muted);font-size:12px;padding:8px 0">A Részvény modul ki van kapcsolva.</div>';
  }
  renderCashTimeline();
}
function renderWatch() {
  updateFxLabel();
  const coins = calcCryptoPL();
  const stockBox = document.getElementById('dash-stocks');
  if (stockBox) {
    if (state.stocks.length) {
      const agg = {};
      state.stocks.forEach((s) => {
        const cur = s.currency || 'HUF';
        const k = s.ticker.toUpperCase() + '|' + cur;
        const live = getLivePrice(s.ticker);
        const cp = live || s.price;
        if (!agg[k])
          agg[k] = {
            ticker: s.ticker,
            cur,
            qty: 0,
            inv: 0,
            val: 0,
            lots: 0,
            live: !!live
          };
        agg[k].qty += s.qty;
        agg[k].inv += s.qty * s.avg;
        agg[k].val += s.qty * cp;
        agg[k].lots++;
      });
      stockBox.innerHTML = Object.values(agg)
        .map((a) => {
          const pl = a.val - a.inv;
          const plPct = a.inv ? (pl / a.inv) * 100 : 0;
          const badge = a.live
            ? `<span class="badge badge-green">● élő</span>`
            : `<span class="badge badge-yellow">manuális</span>`;
          return dashTile(`${a.ticker}`, badge, [
            ['Mennyiség', `${fmtNum(a.qty)} db${a.lots > 1 ? ` · ${a.lots} tétel` : ''}`, ''],
            ['Befektetett', fmtAgg(a.inv), ''],
            ['Jelenlegi érték', fmtAgg(a.val), 'cyan'],
            [
              'P&L',
              `${pl >= 0 ? '+' : ''}${fmtAgg(pl)} (${plPct.toFixed(1)}%)`,
              pl >= 0 ? 'green' : 'red'
            ]
          ]);
        })
        .join('');
    } else stockBox.innerHTML = emptyTile('Nincs részvény');
  }
  const cryptoBox = document.getElementById('dash-crypto');
  if (cryptoBox) {
    const entries = Object.entries(coins);
    if (entries.length) {
      cryptoBox.innerHTML = entries
        .map(([coin, c]) => {
          const openQty = c.buys.reduce((a, b) => a + b.qty, 0);
          const openCost = c.buys.reduce((a, b) => a + b.qty * b.price, 0);
          const live = getLivePrice(coin);
          const liveVal = live ? openQty * live : null;
          const unreal = liveVal !== null ? liveVal - openCost : null;
          const badge = live ? `<span class="badge badge-green">● élő</span>` : '';
          const rows = [
            ['Mennyiség', fmtNum(openQty) + ' db', ''],
            ['Nyitott pozíció (bekerülési)', fmtAgg(openCost), '']
          ];
          if (liveVal !== null) {
            rows.push(['Aktuális eladási érték', fmtAgg(liveVal), 'cyan']);
            const unrealPct = openCost ? (unreal / openCost) * 100 : 0;
            rows.push([
              'Nem realizált P&L',
              `${unreal >= 0 ? '+' : ''}${fmtAgg(unreal)} (${unreal >= 0 ? '+' : ''}${unrealPct.toFixed(1)}%)`,
              unreal >= 0 ? 'green' : 'red'
            ]);
          }
          return dashTile(coin, badge, rows, '');
        })
        .join('');
    } else cryptoBox.innerHTML = emptyTile('Nincs kripto');
  }
  const goldBox = document.getElementById('dash-gold');
  const goldPledgedBox = document.getElementById('dash-gold-pledged');
  if (goldBox || goldPledgedBox) {
    const spot = state.goldSpot || 28000;
    const pledgedSet = pledgedGoldIds();
    const goldLiveBadge = goldSpotLive ? '<span class="badge badge-green">● élő</span>' : '';
    const buildAgg = (items) => {
      const agg = {};
      items.forEach((g) => {
        const k = `${g.name}|${g.grams}|${g.purity}|${g.form}`;
        if (!agg[k])
          agg[k] = {
            name: g.name,
            grams: g.grams,
            count: 0,
            totalGrams: 0,
            cost: 0,
            val: 0
          };
        agg[k].count++;
        agg[k].totalGrams += g.grams;
        agg[k].cost += g.cost;
        agg[k].val += goldItemValue(g, spot);
      });
      return agg;
    };
    const goldTile = (a, pledgeBadge, pledge) => {
      const pl = a.val - a.cost;
      const plPct = a.cost ? (pl / a.cost) * 100 : 0;
      const plStr = `${pl >= 0 ? '+' : ''}${fmtAgg(pl)} (${pl >= 0 ? '+' : ''}${plPct.toFixed(1)}%)`;
      const darab = `${a.count} db${a.grams != null ? ` (${fmtNum(a.grams)} g/db)` : ''}`;
      let rows;
      if (pledge) {
        const fee = pledge.debt - pledge.loan;
        const feePct = pledge.loan ? (fee / pledge.loan) * 100 : 0;
        rows = [
          ['Darab', darab, ''],
          ['Össztömeg', `${fmtNum(a.totalGrams)} g`, ''],
          ['Vételár', fmtAgg(a.cost), ''],
          ['Kézhez kapott', fmtAgg(pledge.loan), ''],
          ['Jelenlegi érték', fmtAgg(a.val), 'cyan'],
          ['Jelenlegi tartozás', fmtAgg(pledge.debt), 'yellow'],
          ['P&L', plStr, pl >= 0 ? 'green' : 'red'],
          ['Kölcsön díja', `${fmtAgg(fee)} (${feePct.toFixed(1)}%)`, 'red']
        ];
      } else {
        rows = [
          ['Darab', darab, ''],
          ['Össztömeg', `${fmtNum(a.totalGrams)} g`, ''],
          ['Vételár', fmtAgg(a.cost), ''],
          ['Jelenlegi érték', fmtAgg(a.val), 'cyan'],
          ['P&L', plStr, pl >= 0 ? 'green' : 'red']
        ];
      }
      return dashTile(`${a.name}`, pledgeBadge || '', rows);
    };
    if (goldBox) {
      const freeItems = state.goldItems.filter((g) => !pledgedSet.has(g.id));
      if (freeItems.length) {
        goldBox.innerHTML = Object.values(buildAgg(freeItems))
          .map((a) => goldTile(a, goldLiveBadge))
          .join('');
      } else {
        goldBox.innerHTML = emptyTile('Nincs szabad (nem zálogba adott) aranytétel');
      }
    }
    if (goldPledgedBox) {
      const pledgedItems = state.goldItems.filter((g) => pledgedSet.has(g.id));
      if (pledgedItems.length) {
        const byPledge = {};
        pledgedItems.forEach((g) => {
          const p = pledgeForGold(g.id);
          const key = p ? p.id : 'none_' + g.id;
          if (!byPledge[key])
            byPledge[key] = {
              pledge: p,
              names: new Set(),
              gramsSet: new Set(),
              count: 0,
              totalGrams: 0,
              cost: 0,
              val: 0
            };
          const grp = byPledge[key];
          grp.names.add(g.name);
          grp.gramsSet.add(g.grams);
          grp.count++;
          grp.totalGrams += g.grams;
          grp.cost += g.cost;
          grp.val += goldItemValue(g, spot);
        });
        goldPledgedBox.innerHTML = Object.values(byPledge)
          .map((grp) => {
            const ticket = grp.pledge && grp.pledge.ticketNo ? grp.pledge.ticketNo : '—';
            const a = {
              name: '',
              count: grp.count,
              grams: grp.gramsSet.size === 1 ? [...grp.gramsSet][0] : null,
              totalGrams: grp.totalGrams,
              cost: grp.cost,
              val: grp.val
            };
            let pledgeInfo = null;
            if (grp.pledge) {
              const d = calcPledgeDebt(grp.pledge);
              pledgeInfo = {
                loan: d.cashReceived,
                debt: d.currentDebt
              };
            }
            return goldTile(
              a,
              `<span class="badge badge-purple">${escHtml(ticket)}</span>` +
                (goldLiveBadge ? ' ' + goldLiveBadge : ''),
              pledgeInfo
            );
          })
          .join('');
      } else {
        goldPledgedBox.innerHTML = emptyTile('Nincs zálogban lévő aranytétel');
      }
    }
  }
}
function dashTile(title, badgeHtml, rows, footer) {
  return `<div class="card" style="padding:14px;display:flex;flex-direction:column;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;flex-wrap:wrap">
      <span style="font-family:var(--display);font-weight:700;font-size:15px;line-height:1.2">${title}</span>
      ${badgeHtml || ''}
    </div>
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:7px 12px;align-content:start">
    ${rows
      .map(
        (r) => `
      <div style="min-width:0">
        <div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:0.3px;line-height:1.25">${r[0]}</div>
        <div class="${r[2] || ''}" style="font-weight:700;font-size:13px;line-height:1.25;font-variant-numeric:tabular-nums">${r[1]}</div>
      </div>
    `
      )
      .join('')}
    </div>
    ${footer ? `<div style="font-size:10px;color:var(--muted);margin-top:10px;padding-top:8px;border-top:1px solid var(--surface3)">${footer}</div>` : ''}
  </div>`;
}
function emptyTile(msg) {
  return `<div class="card" style="color:var(--muted);text-align:center;padding:24px;grid-column:1/-1">${msg}</div>`;
}
let _donutSegments = [],
  _donutTotal = 0,
  _donutCenter = null;
function _cssVar(name, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}
function fmtCompact(n) {
  const a = Math.abs(n),
    sign = n < 0 ? '−' : '';
  if (a >= 1e9) return sign + (a / 1e9).toFixed(2).replace('.', ',') + ' Mrd';
  if (a >= 1e6) return sign + (a / 1e6).toFixed(2).replace('.', ',') + ' M';
  if (a >= 1e3) return sign + Math.round(a / 1e3) + ' e';
  return sign + Math.round(a);
}
function drawDonut(segments, center) {
  _donutSegments = segments || [];
  _donutTotal = _donutSegments.reduce((a, s) => a + s.value, 0);
  _donutCenter = center || null;
  renderDonutCanvas(-1);
  renderDonutLegend();
}
function renderDonutCanvas(hi) {
  const canvas = document.getElementById('donut-canvas');
  if (!canvas) return;
  const size = 190;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);
  const cx = size / 2,
    cy = size / 2,
    r = 70,
    lw = 22;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.lineWidth = lw;
  ctx.strokeStyle = _cssVar('--surface2', 'rgba(0,0,0,0.06)');
  ctx.stroke();
  const total = _donutTotal;
  if (total > 0) {
    const gap = 0.045;
    let angle = -Math.PI / 2;
    _donutSegments.forEach((s, i) => {
      const slice = (s.value / total) * Math.PI * 2;
      if (slice <= 0) return;
      const start = angle + gap / 2;
      const end = angle + slice - gap / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, r, start, Math.max(start + 0.001, end));
      ctx.lineWidth = hi === i ? lw + 5 : lw;
      ctx.lineCap = 'round';
      ctx.strokeStyle = s.color;
      ctx.globalAlpha = hi === -1 || hi === i ? 1 : 0.25;
      ctx.stroke();
      ctx.globalAlpha = 1;
      angle += slice;
    });
  }
  let big = '',
    small = '';
  if (hi >= 0 && _donutSegments[hi]) {
    big = total ? ((_donutSegments[hi].value / total) * 100).toFixed(1) + '%' : '0%';
    small = _donutSegments[hi].label;
  } else if (_donutCenter) {
    big = _donutCenter.value;
    small = _donutCenter.label;
  } else if (!total) {
    small = L('Nincs adat', 'No data');
  }
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (big) {
    ctx.fillStyle =
      hi >= 0 && _donutSegments[hi] ? _donutSegments[hi].color : _cssVar('--text', '#17171A');
    ctx.font = '700 17px "Hanken Grotesk", system-ui, sans-serif';
    ctx.fillText(big, cx, cy - (small ? 8 : 0));
  }
  if (small) {
    ctx.fillStyle = _cssVar('--muted', '#666');
    ctx.font = '600 9px "Space Mono", ui-monospace, monospace';
    ctx.fillText(small.toUpperCase(), cx, cy + (big ? 12 : 0));
  }
}
function renderDonutLegend() {
  const legend = document.getElementById('donut-legend');
  if (!legend) return;
  const total = _donutTotal;
  if (!total) {
    legend.innerHTML = '<div style="color:var(--muted);font-size:12px">Nincs adat</div>';
    return;
  }
  legend.innerHTML = _donutSegments
    .map((s, i) => {
      const pct = (s.value / total) * 100;
      return `
    <div class="legend-item" onmouseenter="donutHover(${i})" onmouseleave="donutHover(-1)"
      style="cursor:default;border-radius:7px;padding:3px 6px;margin:0 -6px;transition:background .12s,opacity .12s">
      <span style="color:${s.color};font-weight:800;font-size:13px;min-width:44px;flex-shrink:0;letter-spacing:-0.3px">${pct.toFixed(1)}%</span>
      <span style="color:var(--muted)">${s.label}</span>
      <span style="margin-left:auto;font-weight:600">${fmt(s.value)}</span>
    </div>`;
    })
    .join('');
}
function donutHover(i) {
  renderDonutCanvas(i);
  const legend = document.getElementById('donut-legend');
  if (!legend) return;
  Array.from(legend.children).forEach((el, idx) => {
    el.style.opacity = i === -1 || i === idx ? '1' : '0.4';
    el.style.background = i === idx ? 'var(--surface2)' : 'transparent';
  });
}

let _xlsxLoading = null;
function loadXLSX() {
  if (window.XLSX) return Promise.resolve(window.XLSX);
  if (_xlsxLoading) return _xlsxLoading;
  _xlsxLoading = new Promise((resolve, reject) => {
    const sc = document.createElement('script');
    sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
    sc.onload = () => resolve(window.XLSX);
    sc.onerror = () =>
      reject(new Error('A táblázat-feldolgozó nem tölthető be (nincs internet?).'));
    document.head.appendChild(sc);
  });
  return _xlsxLoading;
}

function expMsg(text, isError) {
  accMsg('exp-upload-msg', text, isError);
}

function _normHeader(h) {
  return String(h || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function _pickCol(header, names) {
  const H = header.map(_normHeader);
  for (const n of names) {
    for (let i = 0; i < H.length; i++) {
      if (H[i] && (H[i] === n || H[i].includes(n))) return i;
    }
  }
  return -1;
}
function canonType(raw) {
  const f = _normHeader(raw);
  if (!f) return 'Egyéb';
  if (f.includes('kartya') || f === 'card_payment') return 'Kártyás vásárlás';
  if (f.includes('atm') || f.includes('keszpenz')) return 'Készpénzfelvétel (ATM)';
  if (f.includes('atutal') || f.includes('transfer')) return 'Átutalás';
  if (f.includes('feltolt') || f.includes('topup')) return 'Feltöltés';
  if (f.includes('visszater') || f.includes('refund')) return 'Visszatérítés';
  if (f.includes('terhel') || f === 'fee' || f.includes('dij') || f.includes('jutalek'))
    return 'Díj / terhelés';
  if (f.includes('valt') || f.includes('exchange')) return 'Devizaváltás';
  if (f.includes('kamat') || f.includes('interest')) return 'Kamat';
  if (f.includes('ado') || f === 'tax') return 'Adó';
  return String(raw).trim() || 'Egyéb';
}
function _parseNum(v) {
  if (typeof v === 'number') return v;
  if (v == null) return NaN;
  let s = String(v).trim().replace(/\s| /g, '');
  if (!s) return NaN;
  if (s.indexOf(',') > -1 && s.indexOf('.') > -1) {
    if (s.lastIndexOf(',') > s.lastIndexOf('.')) s = s.replace(/\./g, '').replace(',', '.');
    else s = s.replace(/,/g, '');
  } else if (s.indexOf(',') > -1) {
    s = s.replace(',', '.');
  }
  const n = parseFloat(s);
  return isNaN(n) ? NaN : n;
}
function _excelDate(v) {
  if (v instanceof Date && !isNaN(v.getTime())) return toLocalDateStr(v);
  if (typeof v === 'number') {
    const d = new Date(Math.round((v - 25569) * 86400 * 1000));
    if (!isNaN(d.getTime())) return toLocalDateStr(d);
  }
  const s = String(v || '').trim();
  if (!s) return null;
  const m1 = s.match(/(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (m1) return `${m1[1]}-${String(m1[2]).padStart(2, '0')}-${String(m1[3]).padStart(2, '0')}`;
  const m2 = s.match(/(\d{1,2})[/.](\d{1,2})[/.](\d{4})/);
  if (m2) return `${m2[3]}-${String(m2[2]).padStart(2, '0')}-${String(m2[1]).padStart(2, '0')}`;
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : toLocalDateStr(d);
}

const BAD_STATES = [
  'reverted',
  'declined',
  'failed',
  'pending',
  'cancelled',
  'visszavonva',
  'visszateritve',
  'elutasitva',
  'sikertelen',
  'fuggoben',
  'folyamatban',
  'torolve'
];

function detectBank(header) {
  const H = (header || []).map(_normHeader).join('|');
  if (
    H.includes('banki azonosito') ||
    H.includes('forgalom') ||
    H.includes('ellenoldali') ||
    H.includes('konyveles')
  )
    return 'OTP';
  if (
    H.includes('teljesites') ||
    H.includes('state') ||
    H.includes('termek') ||
    H.includes('product') ||
    H.includes('completed')
  )
    return 'Revolut';
  return 'Egyéb';
}
function parseRevolutSheet(aoa) {
  let hIdx = -1;
  for (let i = 0; i < Math.min(aoa.length, 20); i++) {
    const row = (aoa[i] || []).map(_normHeader);
    if (row.includes('amount') || row.includes('osszeg')) {
      hIdx = i;
      break;
    }
  }
  if (hIdx < 0) return null;
  const header = aoa[hIdx];
  const bank = detectBank(header);
  const cType = _pickCol(header, ['forgalom', 'type', 'tipus']);

  const cDesc = _pickCol(header, [
    'ellenoldali nev',
    'ellenoldali',
    'description',
    'megnevezes',
    'leiras',
    'partner'
  ]);
  const cMemo = _pickCol(header, ['kozlemeny', 'reference', 'narrative', 'megjegyzes']);

  const cDate = _pickCol(header, [
    'teljesites',
    'completed',
    'tranzakcio idopont',
    'idopont',
    'kezdes',
    'started',
    'datum',
    'date'
  ]);
  const cStart = _pickCol(header, [
    'tranzakcio idopont',
    'idopont',
    'kezdes',
    'started',
    'datum',
    'date'
  ]);
  const cRef = _pickCol(header, ['banki azonosito', 'azonosito', 'reference id']);
  const cAmount = _pickCol(header, ['amount', 'osszeg']);
  const cFee = _pickCol(header, ['fee', 'dij']);
  const cCur = _pickCol(header, ['currency', 'penznem', 'deviza']);
  const cState = _pickCol(header, ['state', 'statusz', 'allapot']);
  if (cAmount < 0 || cDate < 0) return null;
  const txns = [];
  for (let i = hIdx + 1; i < aoa.length; i++) {
    const row = aoa[i];
    if (!row || !row.length) continue;
    const st = cState >= 0 ? _normHeader(row[cState]) : '';
    if (st && BAD_STATES.some((b) => st.includes(b))) continue;
    const amount = _parseNum(row[cAmount]);
    const fee = cFee >= 0 ? _parseNum(row[cFee]) : 0;
    const a = isNaN(amount) ? 0 : amount;
    const f = isNaN(fee) ? 0 : fee;
    if (isNaN(amount) && isNaN(fee)) continue;

    const netFlow = a - f;
    if (netFlow === 0) continue;
    const date = _excelDate(row[cDate]);
    if (!date) continue;
    const type = canonType(cType >= 0 ? row[cType] : '');

    let desc = cDesc >= 0 ? String(row[cDesc] || '').trim() : '';
    if (!desc && cMemo >= 0) desc = String(row[cMemo] || '').trim();
    if (!desc) desc = type;
    const currency = (cCur >= 0 ? String(row[cCur] || '').trim().toUpperCase() : '') || 'HUF';

    const refRaw = cRef >= 0 ? String(row[cRef] || '').trim() : '';
    const startedRaw = String((cStart >= 0 ? row[cStart] : row[cDate]) || '').trim();
    const k = refRaw
      ? 'ref:' + refRaw
      : startedRaw + '|' + String(row[cAmount]) + '|' + (cFee >= 0 ? String(row[cFee]) : '') + '|' + desc;
    txns.push({ date, type, desc, amt: netFlow, currency, k, bank });
  }
  return txns;
}

function _txnSigned(t) {
  if (typeof t.amt === 'number') return t.amt;
  return -(t.amount || 0);
}

function handleRevolutUpload(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const isCsv = /\.csv$/i.test(file.name) || file.type === 'text/csv';
  expMsg('Feldolgozás…', false);
  loadXLSX()
    .then((XLSX) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          let wb;
          if (isCsv) {

            wb = XLSX.read(e.target.result, { type: 'string' });
          } else {
            wb = XLSX.read(new Uint8Array(e.target.result), {
              type: 'array',
              cellDates: true,
              codepage: 65001
            });
          }
          const ws = wb.Sheets[wb.SheetNames[0]];
          const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: '' });
          const txns = parseRevolutSheet(aoa);
          if (!txns) {
            expMsg(
              'Nem ismerem fel a kivonat oszlopait. Kell egy „Összeg/Amount” és egy dátum oszlop (Revolut kivonat).',
              true
            );
            return;
          }
          if (!txns.length) {
            expMsg('Nem találtam feldolgozható tételt a fájlban.', true);
            return;
          }

          const prev =
            state.expenseReport && Array.isArray(state.expenseReport.txns)
              ? state.expenseReport
              : { txns: [], imports: [] };
          const merged = prev.txns.slice();
          const seen = new Set(merged.map((t) => t.k).filter(Boolean));
          const importId = uid();
          let added = 0,
            dup = 0;
          txns.forEach((t) => {
            if (t.k && seen.has(t.k)) {
              dup++;
              return;
            }
            if (t.k) seen.add(t.k);
            t.imp = importId;
            merged.push(t);
            added++;
          });
          const months = {};
          txns.forEach((t) => (months[t.date.slice(0, 7)] = true));
          const imports = (prev.imports || []).slice();
          imports.push({
            id: importId,
            fileName: file.name,
            importedAt: new Date().toISOString(),
            added,
            dup,
            months: Object.keys(months).sort()
          });
          state.expenseReport = { txns: merged, imports, updatedAt: new Date().toISOString() };
          save();
          renderExpenseReport();
          expMsg(
            '✓ ' +
              added +
              ' új tétel hozzáadva' +
              (dup ? ', ' + dup + ' duplikátum kihagyva' : '') +
              '. Összesen ' +
              merged.length +
              ' tétel.',
            false
          );
        } catch (err) {
          expMsg('Hiba a fájl feldolgozásakor: ' + (err.message || err), true);
        }
      };
      reader.onerror = () => expMsg('A fájl nem olvasható.', true);
      if (isCsv) reader.readAsText(file, 'UTF-8');
      else reader.readAsArrayBuffer(file);
    })
    .catch((err) => expMsg(err.message || 'Betöltési hiba.', true));
  input.value = '';
}

async function clearExpenseReport() {
  if (!(await uiConfirm('Biztosan törlöd az ÖSSZES betöltött kimutatás adatát?'))) return;
  state.expenseReport = null;
  save();
  renderExpenseReport();
  expMsg('', false);
}

async function deleteExpenseImport(id) {
  const rep = state.expenseReport;
  if (!rep || !Array.isArray(rep.imports)) return;
  const im = rep.imports.find((x) => x.id === id);
  if (!im) return;
  const label =
    (Array.isArray(im.months) && im.months.length ? im.months.join(', ') : im.fileName || 'kimutatás');
  if (!(await uiConfirm('Törlöd ennek a kimutatásnak az adatait?\n\n' + label))) return;
  const remainTxns = rep.txns.filter((t) => t.imp !== id);
  const remainImports = rep.imports.filter((x) => x.id !== id);
  if (!remainTxns.length) {
    state.expenseReport = null;
  } else {
    state.expenseReport = {
      txns: remainTxns,
      imports: remainImports,
      updatedAt: new Date().toISOString()
    };
  }
  save();
  renderExpenseReport();
  expMsg('✓ Kimutatás törölve: ' + label, false);
}

function _expToHuf(amt, cur) {
  if (cur === 'HUF') return amt;
  const r = rateForCurrency(cur);
  return r ? amt * r : null;
}

function _fmtYm(ym) {
  const [y, m] = ym.split('-');
  return y + '. ' + (MONTHS_HU_SHORT[+m - 1] || m);
}
let _expFilter = { month: 'all', bank: 'all', dir: 'all', type: 'all', q: '' };

function renderExpenseReport() {
  const box = document.getElementById('exp-report');
  const clearBtn = document.getElementById('exp-clear-btn');
  const rep = state.expenseReport;
  const has = !!(rep && rep.txns && rep.txns.length);
  if (clearBtn) clearBtn.style.display = has ? '' : 'none';
  if (!box) return;
  if (!has) {
    box.innerHTML = '';
    return;
  }
  const txns = rep.txns;
  let incomeHuf = 0,
    expenseHuf = 0,
    nonConv = 0;
  const inByMonth = {},
    outByMonth = {},
    expByType = {},
    incByType = {},
    byMerchant = {},
    byCur = {},
    monthsSet = {},
    typesSet = {},
    banksSet = {};
  let minDate = null,
    maxDate = null;
  txns.forEach((t) => {
    const s = _txnSigned(t);
    const ym = t.date.slice(0, 7);
    monthsSet[ym] = true;
    typesSet[t.type || 'Egyéb'] = true;
    banksSet[t.bank || 'Egyéb'] = true;
    if (!minDate || t.date < minDate) minDate = t.date;
    if (!maxDate || t.date > maxDate) maxDate = t.date;
    byCur[t.currency] = (byCur[t.currency] || 0) + s;
    const mag = _expToHuf(Math.abs(s), t.currency);
    if (mag == null) {
      nonConv++;
      return;
    }
    if (s > 0) {
      incomeHuf += mag;
      inByMonth[ym] = (inByMonth[ym] || 0) + mag;
      incByType[t.type] = (incByType[t.type] || 0) + mag;
    } else {
      expenseHuf += mag;
      outByMonth[ym] = (outByMonth[ym] || 0) + mag;
      expByType[t.type] = (expByType[t.type] || 0) + mag;
      const mk = (t.desc || '(nincs megnevezés)').slice(0, 42);
      byMerchant[mk] = (byMerchant[mk] || 0) + mag;
    }
  });
  const netHuf = incomeHuf - expenseHuf;

  const imports = Array.isArray(rep.imports) ? rep.imports : [];
  const lastImport = imports.length
    ? imports[imports.length - 1]
    : rep.importedAt
      ? { importedAt: rep.importedAt, fileName: rep.fileName }
      : null;
  const importedStr =
    lastImport && lastImport.importedAt
      ? new Date(lastImport.importedAt).toLocaleDateString(LOC())
      : '—';
  const importCount = imports.length || (rep.fileName ? 1 : 0);
  const curList = Object.keys(byCur).sort();
  const months = Object.keys(monthsSet).sort();

  const maxM = Math.max(1, ...months.map((k) => Math.max(inByMonth[k] || 0, outByMonth[k] || 0)));
  const monthlyRows = months
    .map((k) => {
      const inc = inByMonth[k] || 0;
      const out = outByMonth[k] || 0;
      const net = inc - out;
      const iw = Math.max(inc > 0 ? 2 : 0, Math.round((inc / maxM) * 100));
      const ow = Math.max(out > 0 ? 2 : 0, Math.round((out / maxM) * 100));
      return `<div style="display:grid;grid-template-columns:64px 1fr auto;align-items:center;gap:10px;padding:6px 0">
        <span style="font-size:11px;color:var(--muted);font-weight:600">${_fmtYm(k)}</span>
        <div style="display:flex;flex-direction:column;gap:3px">
          <div style="height:8px;border-radius:4px;background:var(--surface2);overflow:hidden"><div style="height:100%;width:${iw}%;background:var(--accent2);border-radius:4px"></div></div>
          <div style="height:8px;border-radius:4px;background:var(--surface2);overflow:hidden"><div style="height:100%;width:${ow}%;background:var(--red);border-radius:4px"></div></div>
        </div>
        <span class="${net >= 0 ? 'green' : 'red'}" style="font-size:12px;font-weight:600;white-space:nowrap;text-align:right">${net >= 0 ? '+' : ''}${fmtAgg(net)}</span>
      </div>`;
    })
    .join('');

  const typeList = (obj, cls) => {
    const ks = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    const tot = ks.reduce((a, k) => a + obj[k], 0);
    if (!ks.length) return '<div style="color:var(--muted);font-size:12px">Nincs adat.</div>';
    return ks
      .map((t) => {
        const v = obj[t];
        const pct = tot > 0 ? (v / tot) * 100 : 0;
        return `<div style="display:flex;justify-content:space-between;gap:8px;font-size:13px;padding:6px 0;border-bottom:1px solid var(--border)">
          <span style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escHtml(t)}</span>
          <span style="white-space:nowrap"><strong class="${cls}">${fmtAgg(v)}</strong> <span style="color:var(--muted);font-size:11px">${pct.toFixed(1)}%</span></span>
        </div>`;
      })
      .join('');
  };

  const merchants = Object.keys(byMerchant)
    .sort((a, b) => byMerchant[b] - byMerchant[a])
    .slice(0, 10);
  const merchantRows = merchants.length
    ? merchants
        .map(
          (mkey) =>
            `<div style="display:flex;justify-content:space-between;gap:8px;font-size:13px;padding:6px 0;border-bottom:1px solid var(--border)">
          <span style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escHtml(mkey)}</span>
          <span class="red" style="font-weight:600;white-space:nowrap">${fmtAgg(byMerchant[mkey])}</span>
        </div>`
        )
        .join('')
    : '<div style="color:var(--muted);font-size:12px">Nincs adat.</div>';

  const curNote =
    curList.length > 1
      ? `<div style="font-size:11px;color:var(--muted);margin-top:6px">Devizánként (nettó): ${curList
          .map((c) => `${c}: ${fmtCur(byCur[c], c)}`)
          .join(' · ')}</div>`
      : '';
  const nonConvNote =
    nonConv > 0
      ? `<div style="font-size:11px;color:var(--accent3);margin-top:6px">${nonConv} tétel nem váltható HUF-ra (ismeretlen árfolyam). Frissítsd az élő árfolyamot a Fiók oldalon.</div>`
      : '';

  const importRows = imports
    .slice()
    .reverse()
    .map((im) => {
      const d = im.importedAt ? new Date(im.importedAt).toLocaleDateString(LOC()) : '—';
      const ms = Array.isArray(im.months) && im.months.length ? im.months.join(', ') : '—';
      const delBtn = im.id
        ? `<button class="btn btn-danger btn-sm js-del-btn" title="Ennek a kimutatásnak a törlése" onclick="deleteExpenseImport('${im.id}')">×</button>`
        : '';
      return `<div style="display:flex;align-items:center;gap:10px;font-size:12.5px;padding:8px 0;border-bottom:1px solid var(--border)">
        <span style="flex:1;min-width:0"><strong>${ms}</strong> <span style="color:var(--muted)">· ${escHtml(im.fileName || 'kivonat')}</span><br><span style="color:var(--muted);font-size:11px">+${im.added || 0} tétel${im.dup ? ` · ${im.dup} dupla` : ''} · ${d}</span></span>
        ${delBtn}
      </div>`;
    })
    .join('');
  const importsCard = imports.length
    ? `<div class="card" style="margin-bottom:16px">
        <div class="card-title">Importált kimutatások (${imports.length})</div>
        <div style="font-size:11px;color:var(--muted);margin-bottom:6px">A × gombbal egy adott kimutatás összes tételét törlöd.</div>
        ${importRows}
      </div>`
    : '';

  if (_expFilter.month !== 'all' && !monthsSet[_expFilter.month]) _expFilter.month = 'all';
  if (_expFilter.type !== 'all' && !typesSet[_expFilter.type]) _expFilter.type = 'all';
  if (_expFilter.bank !== 'all' && !banksSet[_expFilter.bank]) _expFilter.bank = 'all';
  const bankKeys = Object.keys(banksSet).sort();
  const bankOpts =
    `<option value="all"${_expFilter.bank === 'all' ? ' selected' : ''}>Minden bank</option>` +
    bankKeys
      .map(
        (b) =>
          `<option value="${escHtml(b)}"${_expFilter.bank === b ? ' selected' : ''}>${escHtml(b)}</option>`
      )
      .join('');
  const monthOpts =
    `<option value="all"${_expFilter.month === 'all' ? ' selected' : ''}>Összes hónap</option>` +
    months
      .slice()
      .reverse()
      .map(
        (m) => `<option value="${m}"${_expFilter.month === m ? ' selected' : ''}>${_fmtYm(m)}</option>`
      )
      .join('');
  const dirOpts = [
    ['all', 'Minden irány'],
    ['out', 'Csak kiadás'],
    ['in', 'Csak bevétel']
  ]
    .map(([v, l]) => `<option value="${v}"${_expFilter.dir === v ? ' selected' : ''}>${l}</option>`)
    .join('');
  const typeOpts =
    `<option value="all"${_expFilter.type === 'all' ? ' selected' : ''}>Minden típus</option>` +
    Object.keys(typesSet)
      .sort()
      .map(
        (t) =>
          `<option value="${escHtml(t)}"${_expFilter.type === t ? ' selected' : ''}>${escHtml(t)}</option>`
      )
      .join('');

  box.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:16px">
      <div class="card card-stat-green">
        <div class="card-title" style="opacity:.8">Bevétel (HUF)</div>
        <div class="stat-value green" style="font-size:24px">${fmtAgg(incomeHuf)}</div>
      </div>
      <div class="card card-stat-red">
        <div class="card-title" style="opacity:.8">Kiadás (HUF)</div>
        <div class="stat-value red" style="font-size:24px">${fmtAgg(expenseHuf)}</div>
      </div>
      <div class="card">
        <div class="card-title">Egyenleg</div>
        <div class="stat-value ${netHuf >= 0 ? 'green' : 'red'}" style="font-size:24px">${netHuf >= 0 ? '+' : ''}${fmtAgg(netHuf)}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div style="font-size:11px;color:var(--muted)">${txns.length} tétel · ${minDate || '—'} – ${maxDate || '—'} · ${months.length} hónap · ${importCount} import · utolsó: ${importedStr}${curNote}${nonConvNote}</div>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="card-title">Havi bevétel / kiadás</div>
      <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:11px;color:var(--muted);margin-bottom:8px">
        <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:var(--accent2);margin-right:5px;vertical-align:-1px"></span>Bevétel</span>
        <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:var(--red);margin-right:5px;vertical-align:-1px"></span>Kiadás</span>
        <span style="margin-left:auto">jobbra: havi egyenleg</span>
      </div>
      ${monthlyRows || '<div style="color:var(--muted);font-size:12px">Nincs adat.</div>'}
    </div>

    ${importsCard}

    <div class="grid g2" style="margin-bottom:16px">
      <div class="card">
        <div class="card-title">Kiadás típus szerint</div>
        ${typeList(expByType, 'red')}
      </div>
      <div class="card">
        <div class="card-title">Bevétel forrás szerint</div>
        ${typeList(incByType, 'green')}
      </div>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="card-title">Top 10 kiadás (megnevezés)</div>
      ${merchantRows}
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="card-title">Részletező</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:12px">
        <div><label>Hónap</label><select id="exp-f-month" onchange="applyExpenseFilter()">${monthOpts}</select></div>
        <div><label>Bank</label><select id="exp-f-bank" onchange="applyExpenseFilter()">${bankOpts}</select></div>
        <div><label>Irány</label><select id="exp-f-dir" onchange="applyExpenseFilter()">${dirOpts}</select></div>
        <div><label>Típus</label><select id="exp-f-type" onchange="applyExpenseFilter()">${typeOpts}</select></div>
        <div><label>Keresés</label><input type="text" id="exp-f-q" placeholder="megnevezés…" value="${escHtml(_expFilter.q)}" oninput="applyExpenseFilter()" /></div>
      </div>
      <div id="exp-detail-body"></div>
    </div>`;
  renderExpenseDetail();
}

function applyExpenseFilter() {
  const val = (id) => {
    const el = document.getElementById(id);
    return el ? el.value : 'all';
  };
  _expFilter = {
    month: val('exp-f-month'),
    bank: val('exp-f-bank'),
    dir: val('exp-f-dir'),
    type: val('exp-f-type'),
    q: (val('exp-f-q') || '').trim().toLowerCase()
  };
  renderExpenseDetail();
}

function renderExpenseDetail() {
  const body = document.getElementById('exp-detail-body');
  const rep = state.expenseReport;
  if (!body || !rep || !rep.txns) return;
  const f = _expFilter;
  const rows = rep.txns.filter((t) => {
    const s = _txnSigned(t);
    if (f.month !== 'all' && t.date.slice(0, 7) !== f.month) return false;
    if (f.bank && f.bank !== 'all' && (t.bank || 'Egyéb') !== f.bank) return false;
    if (f.dir === 'out' && s >= 0) return false;
    if (f.dir === 'in' && s <= 0) return false;
    if (f.type !== 'all' && (t.type || 'Egyéb') !== f.type) return false;
    if (
      f.q &&
      !(t.desc || '').toLowerCase().includes(f.q) &&
      !(t.type || '').toLowerCase().includes(f.q)
    )
      return false;
    return true;
  });
  rows.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  let inSum = 0,
    outSum = 0;
  rows.forEach((t) => {
    const s = _txnSigned(t);
    const mag = _expToHuf(Math.abs(s), t.currency);
    if (mag == null) return;
    if (s > 0) inSum += mag;
    else outSum += mag;
  });
  const net = inSum - outSum;
  const cap = rows.slice(0, 300);
  const trs = cap
    .map((t) => {
      const s = _txnSigned(t);
      const pos = s > 0;
      return `<tr>
        <td style="white-space:nowrap">${t.date}</td>
        <td style="white-space:nowrap;color:var(--muted)">${escHtml(t.bank || '—')}</td>
        <td>${escHtml(t.desc || '—')}</td>
        <td style="white-space:nowrap;color:var(--muted)">${escHtml(t.type)}</td>
        <td class="num ${pos ? 'green' : 'red'}" style="white-space:nowrap;text-align:right">${pos ? '+' : '−'} ${fmtCur(Math.abs(s), t.currency)}</td>
      </tr>`;
    })
    .join('');
  body.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;gap:6px 16px;font-size:12px;margin-bottom:10px">
      <span>${rows.length} tétel</span>
      <span>Bevétel: <strong class="green">${fmtAgg(inSum)}</strong></span>
      <span>Kiadás: <strong class="red">${fmtAgg(outSum)}</strong></span>
      <span>Egyenleg: <strong class="${net >= 0 ? 'green' : 'red'}">${net >= 0 ? '+' : ''}${fmtAgg(net)}</strong></span>
    </div>
    <div class="scroll-table">
      <table style="width:100%;font-size:12.5px">
        <thead><tr><th>Dátum</th><th>Bank</th><th>Megnevezés</th><th>Típus</th><th style="text-align:right">Összeg</th></tr></thead>
        <tbody>${trs || '<tr><td colspan="5" style="color:var(--muted);padding:8px 0">Nincs a szűrésnek megfelelő tétel.</td></tr>'}</tbody>
      </table>
    </div>
    ${rows.length > cap.length ? `<div style="font-size:11px;color:var(--muted);margin-top:8px">Csak az első ${cap.length} tétel látszik (${rows.length} összesen). Szűkíts hónappal vagy kereséssel.</div>` : ''}`;
}

function renderAll() {
  renderStocks();
  renderCrypto();
  renderGold();
  renderServices();
  renderLoans();
  renderPledges();
  renderDashboard();
  renderWatch();
  renderTaxSettings();
  renderRatioAlertSettings();
  renderSalary();
  renderExpenseReport();
}
document.addEventListener('DOMContentLoaded', () => {
  const crD = document.getElementById('cr-date');
  if (crD) crD.value = now();
  const stD = document.getElementById('st-date');
  if (stD) stD.value = now();
  const gdDate = document.getElementById('gd-date');
  if (gdDate) gdDate.value = now();
  const plStart = document.getElementById('pl-start');
  if (plStart) {
    plStart.value = now();
    calcPledgeEndDate();
  }
  renderHeaderDate();
  showTab('dashboard');
});
function renderHeaderDate() {
  const hd = document.getElementById('header-date');
  if (!hd) return;
  const d = new Date();
  hd.textContent = d.toLocaleDateString(LOC(), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
}
function afterDataLoaded() {
  backfillCryptoNative();
  if (state.stocks.length || state.crypto.length || state.goldItems.length) {
    refreshAllPrices();
  } else {
    fetchFxRates().then(() => {
      updateStockLabels();
      renderCrypto();
    });
  }
}
function uiDialog(opts) {
  return new Promise((resolve) => {
    const o = opts || {};
    const wrap = document.createElement('div');
    wrap.className = 'modal open';
    const cancelBtn = o.showCancel
      ? `<button class="btn btn-secondary btn-sm" data-act="cancel">${escHtml(o.cancelText || 'Mégsem')}</button>`
      : '';
    wrap.innerHTML = `
      <div class="modal-card" style="max-width:400px">
        <div class="section-title" style="font-size:16px;margin-bottom:10px">${escHtml(o.title || 'Megerősítés')}</div>
        <div style="font-size:13px;line-height:1.6;white-space:pre-line">${escHtml(o.message || '')}</div>
        ${o.detail ? `<div style="font-size:12.5px;color:var(--muted);line-height:1.6;margin-top:8px;white-space:pre-line">${escHtml(o.detail)}</div>` : ''}
        <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:20px;flex-wrap:wrap">
          ${cancelBtn}
          <button class="btn ${o.danger ? 'btn-danger' : ''} btn-sm" data-act="ok">${escHtml(o.confirmText || 'OK')}</button>
        </div>
      </div>`;
    document.body.appendChild(wrap);
    syncModalScrollLock();
    const done = (val) => {
      document.removeEventListener('keydown', onKey);
      wrap.remove();
      syncModalScrollLock();
      resolve(val);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        done(false);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        done(true);
      }
    };
    wrap.addEventListener('click', (e) => {
      if (e.target === wrap) {
        done(false);
        return;
      }
      const act = e.target.closest('[data-act]');
      if (!act) return;
      done(act.getAttribute('data-act') === 'ok');
    });
    document.addEventListener('keydown', onKey);
    const ok = wrap.querySelector('[data-act="ok"]');
    if (ok) ok.focus();
  });
}
function uiConfirm(message, opts) {
  const o = Object.assign(
    {
      showCancel: true,
      confirmText: 'Törlés',
      danger: true
    },
    opts || {}
  );
  o.message = message;
  return uiDialog(o);
}
function uiAlert(message, opts) {
  const o = Object.assign(
    {
      showCancel: false,
      confirmText: 'Rendben',
      danger: false,
      title: 'Értesítés'
    },
    opts || {}
  );
  o.message = message;
  return uiDialog(o);
}
function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
