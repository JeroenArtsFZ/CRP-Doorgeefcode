# CRP code scanner, offline app (PWA) – versie 1.3.1

Deze map is een complete webapp. Hij wordt één keer via een https-adres op de telefoon geïnstalleerd. Daarna werkt hij zonder internet.

Alles gebeurt op de telefoon zelf: barcode scannen binnen het gele kader, lezen en groot tonen. Het camerabeeld wordt nergens opgeslagen. Er gaan geen gegevens naar de server waar de bestanden staan. Op de telefoon bewaart de app alleen zichzelf en twee instellingen: of de lamp aan stond en welke camera wordt gebruikt. Delen gebeurt alleen als de gebruiker daar zelf voor kiest.

## Inhoud

| Bestand | Functie |
|---|---|
| `index.html` | De app |
| `installeren.html` | Landingspagina met uitleg en installatieknop. Deel deze link met collega's |
| `manifest.webmanifest` | Naam, icoon en weergave als app |
| `sw.js` | Zorgt dat de app offline werkt |
| `lib/` | Scanbibliotheken (JsBarcode, ZXing) en QR-generator, lokaal meegeleverd |
| `fonts/` | Huisstijllettertypen Montserrat en Open Sans |
| `icons/` | App-iconen |
| `CLAUDE.md` | Context en afspraken voor Claude bij verder werken in Claude Code |

## Stap 1: de map online zetten (eenmalig)

Kies één van deze opties en overleg met ICT welke past binnen jullie beleid. Het adres moet met **https** beginnen.

**A. Intranet of interne webserver (voorkeur)**
Zet de inhoud van de map in een eigen map op de webserver, bijvoorbeeld `https://intranet.fonkelzorg.nl/crp/`. Je hoeft niets in te stellen.

**B. GitHub Pages (gratis)**
1. Maak een account op github.com en een nieuwe repository, bijvoorbeeld `crp-doorgeefcode`.
2. Kies *Add file → Upload files* en sleep de **inhoud** van deze map erin (dus `index.html` moet bovenin staan).
3. Ga naar *Settings → Pages*, kies bij *Branch* `main` en klik op *Save*.
4. Na een minuut staat de app op `https://<gebruikersnaam>.github.io/crp-doorgeefcode/`.

**C. Netlify (gratis)**
Maak een account op netlify.com, kies *Add new site → Deploy manually* en sleep deze map in het venster. Je krijgt dan meteen een https-adres.

## Stap 2: installeren op de telefoon

Open het adres één keer met internet.

- **iPhone:** open het in **Safari**, tik op de deelknop en kies **Zet op beginscherm**.
- **Android:** open het in **Chrome**, tik op het menu met de drie puntjes en kies **App installeren** of **Toevoegen aan startscherm**.

Open de app daarna één keer vanaf het beginscherm. Vanaf dat moment werkt hij ook in vliegtuigmodus.

## Een nieuwe versie uitbrengen

1. Pas de bestanden aan.
2. Verhoog in `sw.js` het versienummer, bijvoorbeeld `crp-doorgeefcode-v1` naar `crp-doorgeefcode-v2`.
3. Zet de bestanden opnieuw online.

Vanaf versie 1.1.1 haalt de app bij elke start met internet de nieuwste versie op en ververst hij zichzelf. Dat gebeurt nooit terwijl er een code op het scherm staat of de camera aan is. GitHub Pages heeft na het uploaden een paar minuten nodig voordat de nieuwe versie overal zichtbaar is.

## Goed om te weten

- Op een iPhone kan iOS bij elke start van de app opnieuw om cameratoestemming vragen. Dat is een beperking van Apple.
- Start de camera niet, dan biedt de app een gewone foto aan als reserve.
- **Lamp:** de lampknop verschijnt alleen op toestellen die het ondersteunen (Android met Chrome, iPhone vanaf ongeveer iOS 17.5). De keuze wordt onthouden.
- **Belichting:** waar het toestel het ondersteunt, meet de camera licht en scherpte op het gele kader.
- **Formaatcontrole:** een verwijscode is `ZD` gevolgd door 9 cijfers. Bij een afwijkende code toont de app "Dit lijkt geen verwijscode" met de keuze **Opnieuw** of **Toch gebruiken**. Het formaat staat in `CODE_FORMAT` in `index.html`.
- **Delen:** na een tik op Delen toont de app eerst een privacywaarschuwing met de vraag "Wil je doorgaan met delen?". Alleen bij **Ja, delen** opent het deelmenu met de code als tekst. Zonder deelmenu kopieert hij de code naar het klembord.
- **Privacy en veilig delen:** uitklapper op het hoofdscherm met de afspraken: alleen Outlook of Teams, nooit samen met naam, geboortedatum of BSN, fouten melden bij de praktijkhouder.
- De code wordt na 10 minuten automatisch gewist. Dat stel je in bij `EXPIRE_MIN` in `index.html`.
- Leg het gebruik vast in het kwaliteitssysteem van het lab, net als bij andere werkwijzen rond monsteridentificatie.
- De bibliotheken JsBarcode, ZXing en de QR-generator vallen onder open-sourcelicenties (MIT), de lettertypen onder de SIL Open Font License. De licentieteksten staan in `lib/` en `fonts/`.

## Bijwerken van 1.0 naar 1.1 op GitHub

1. Pak de zip uit.
2. Kies in de repository **Add file → Upload files** en sleep opnieuw de hele inhoud van de map erin. Bestaande bestanden worden overschreven en de nieuwe map `fonts` wordt toegevoegd.
3. Klik op **Commit changes**. Na een paar minuten staat de nieuwe versie online.
4. Open de app op de telefoon met internet, sluit hem en open hem opnieuw. Onderaan staat dan "Versie 1.1".
5. De naam onder het icoon ("CRP scanner") en het nieuwe icoon verschijnen op een iPhone pas als je de app verwijdert en opnieuw op het beginscherm zet.

## Eenmalig: van 1.0 of 1.1 naar 1.1.1

Oudere versies hielden de bewaarde app vast. Na het uploaden van 1.1.1: sluit de app helemaal (veeg hem weg uit het overzicht van geopende apps) en open hem opnieuw met internet, eventueel twee keer. Staat er daarna nog steeds een oude versie, verwijder de app dan van het beginscherm en zet hem opnieuw neer.

## Landingspagina

Deel met collega's het adres van `installeren.html`, bijvoorbeeld `https://jeroenartsfz.github.io/CRP-Doorgeefcode/installeren.html`. De pagina legt uit wat de app doet en heeft een installatieknop:

- **Android (Chrome, Edge, Samsung Internet):** de knop opent direct het installatievenster van de browser.
- **iPhone:** Apple staat geen installatieknop toe. De knop toont daarom de drie stappen via het deelmenu.
- **Computer:** de pagina toont een QR-code waarmee je hem op je telefoon opent.

## Versies

| Versie | Wijzigingen |
|---|---|
| 1.0 | Eerste offline versie |
| 1.1 | Huisstijl Fonkelzorg, live scannen binnen een kader |
| 1.1.1 | Updates komen betrouwbaar binnen; landingspagina |
| 1.2 | Lampknop, belichting op het kader, deelknop, controle op het formaat van de verwijscode |
| 1.3 | Uitklapper Privacy en veilig delen, privacywaarschuwing bij elke keer delen |
| 1.3.1 | Rustiger hoofdscherm: knop Code scannen onder het codevak op een vaste plek, vervaagde voorbeeldbarcode als leeg vak, uitleg naar uitklapper Instructie gebruik, uitklappers hernoemd |
