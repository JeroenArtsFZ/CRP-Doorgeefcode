# CLAUDE.md – CRP code scanner

Context voor Claude bij het werken aan deze repository. Eigenaar: Jeroen Arts (Fonkelzorg). Communiceer in de taal van zijn bericht (meestal Nederlands). Alle teksten in de app zijn Nederlands.

## Wat dit is

Offline webapp (PWA) voor het lab van Fonkelzorg. Een medewerker scant met de telefoon de ZorgDomein-verwijscode (Code 128) van een computerscherm of papieren formulier. De app toont de code groot, zodat de handscanner bij het CRP-apparaat hem leest.

- App: `https://jeroenartsfz.github.io/CRP-Doorgeefcode/`
- Landingspagina met installatieknop: `.../installeren.html`
- Gehost via GitHub Pages vanaf de branch `main`, map root.
- Huidige versie: **1.3.1**. Zie `LEESMIJ.md` voor de versiegeschiedenis.

## Bestanden

| Bestand | Inhoud |
|---|---|
| `index.html` | De hele app: opmaak, CSS en JS in één bestand |
| `installeren.html` | Landingspagina: uitleg, installatieknop per toestel, QR-code voor desktop |
| `sw.js` | Service worker: network-first voor pagina's, cache-first voor overige bestanden |
| `manifest.webmanifest` | Naam "CRP code scanner", korte naam "CRP scanner" |
| `lib/` | JsBarcode 3.11.6, @zxing/library 0.21.3 (UMD), qrcode-generator 1.4.4. Lokaal meegeleverd, nooit via CDN |
| `fonts/` | Montserrat 700, Open Sans 400/700 (woff2, OFL) |
| `icons/` | App-iconen in huisstijl |

Er is geen build-stap en er zijn geen dependencies om te installeren.

## Vaste regels (niet wijzigen zonder akkoord van Jeroen)

**Privacy en beveiliging**
- De app slaat geen codes of beelden op en verstuurt zelf niets. Geen analytics, tracking, accounts of scangeschiedenis.
- Geen externe verzoeken: alle scripts, lettertypen en iconen komen uit de repository.
- Lokale opslag alleen voor `crp.torch` (lamp aan/uit) en `crp.cameraId` (gekozen camera).
- Een getoonde code wist zichzelf na `EXPIRE_MIN` = 10 minuten.
- Alleen het gele kader (plus 4% marge) wordt op barcodes geanalyseerd. Er is geen tekstherkenning.
- De camera stopt bij een gevonden code, bij Annuleren en als de app naar de achtergrond gaat.

**Verwijscode**
- Formaat `CODE_FORMAT = /^ZD\d{9}$/`, bijvoorbeeld ZD198632377.
- Een afwijkende code geeft altijd (live scannen, foto en handmatig) de melding "Dit lijkt geen verwijscode" met **Opnieuw** of **Toch gebruiken**.
- Een code wordt pas geaccepteerd na `CONFIRM_READS` = 2 gelijke lezingen. Na Opnieuw wordt dezelfde code 4 seconden genegeerd.

**Delen**
- Na een tik op Delen verschijnt altijd eerst de privacywaarschuwing "Let op bij delen" met "Wil je doorgaan met delen?" (**Nee** / **Ja, delen**). Alleen bij Ja opent `navigator.share` met de code als tekst. Zonder deelmenu wordt de code naar het klembord gekopieerd.
- De afspraken staan in de uitklapper "Privacy en veilig delen": alleen via Outlook of Teams; buiten Fonkelzorg alleen als het past bij het zorgproces; nooit samen met naam, geboortedatum of BSN; fouten melden bij de praktijkhouder (zonder contactgegevens).

**Hoofdscherm (1.3.1)**
- Volgorde: titel, codevak, knop **Code scannen**, status, uitklappers Handmatige invoer, Instructie gebruik, Scan tips, Privacy en veilig delen, versie.
- Het codevak is leeg en gevuld even hoog: `.codearea` stapelt het resultaatpaneel (met de klasse `ghost` onzichtbaar gevuld met `ZD000000000`) en het lege vak. Zo blijft de knop op een vaste plek.
- Het lege vak toont een vervaagd **willekeurig** streeppatroon. Dat mag nooit een echte, scanbare barcode worden.

## Huisstijl Fonkelzorg

Licht thema. Tokens staan bovenin de CSS van `index.html`:
`--teal #2b7175`, `--teal-dark #1f5558`, `--yellow #e4c800` (accent, nooit voor tekst op wit), `--bg #f4f7f7`, `--fg #1f2b33`, `--muted #4f5f69`, `--line #d5e0e1`. Koppen in Montserrat 700, tekst in Open Sans. Het logo is alleen de hexagon (zes paden, viewBox `0 0 57.74 50`), zie de header van `index.html`.

## Nieuwe versie uitbrengen

Bij elke wijziging die op de telefoons moet landen:
1. Verhoog `VERSION` in `sw.js` (nu `crp-doorgeefcode-v6`). Zonder deze stap halen telefoons de update niet betrouwbaar op.
2. Pas het versienummer aan in `index.html` (`.version`) en in de footer van `installeren.html`.
3. Voeg een regel toe aan de versietabel in `LEESMIJ.md`.
4. Nieuwe bestanden die offline nodig zijn, zet je in `FILES` in `sw.js`.

## Werkwijze met Jeroen

- Werk op een aparte branch en open een pull request. Push nooit direct naar `main`: Jeroen reviewt en merget zelf. Dit is ook het afgesproken wijzigingsbeheer (NEN 7510).
- Vraagt Jeroen eerst iets of zegt hij "nog niet programmeren", beantwoord dan alleen de vraag.
- Bij UI-wijzigingen eerst een mockup laten zien, bijvoorbeeld als screenshots van een testkopie.
- Vat voor het bouwen de afspraken samen en wacht op akkoord.
- Wees eerlijk over wat wel en niet getest is.

## Testen

Gebruik Playwright met Chromium:
- **Nagebootste camera:** start met `--use-fake-device-for-media-stream --use-fake-ui-for-media-stream --use-file-for-fake-video-capture=<bestand>.y4m` en een telefoon-viewport van 390x844.
- **Testbeelden:** maak een y4m van 720x1280 met ffmpeg. Gebruik een lichte achtergrond (ongeveer RGB 232,234,236). Een donkere achtergrond rond de barcode laat de quiet zone wegvallen en dan faalt het lezen. Zet de barcode met een gehele schaal op de plek van het kader (midden, ongeveer 42% van de hoogte).
- **Zelf te controleren:** formaatcontrole, waarschuwing, delen (zonder `navigator.share` valt het terug op het klembord) en dat de knop op 360, 390 en 430 px breed niet verschuift.
- **Lamp:** te simuleren door `MediaStreamTrack.prototype.getCapabilities` en `applyConstraints` te overschrijven.
- **Niet te testen in de testbrowser:** de echte lamp en belichting, en de installatieknop op Android. Dat test Jeroen op echte toestellen.

## Openstaand (intern bij Fonkelzorg, niet zelf oppakken zonder vraag)

Broncodebeheer naar een Fonkelzorg-account met tweestapsverificatie, keuze voor de hosting (intranet of GitHub Pages), Content Security Policy, telefoonbeleid, werkinstructie en validatie (ISO 15189), en documentatie (verwerkingsregister, voortoets DPIA, NEN 7510-risicoanalyse, IVDR-kwalificatie). De FG-analyse staat als Claude Docs-document "CRP code scanner – privacy- en beveiligingsanalyse".

Bewust niet gebouwd: piep en flits op de iPhone, camerazoom, barcode op volledig scherm, melding bij een nieuwe versie. Een scangeschiedenis komt er nooit, vanwege de privacy.
