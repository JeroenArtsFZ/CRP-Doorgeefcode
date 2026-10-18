# CRP code scanner, offline app (PWA) – versie 1.3.1

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

## Installeren op de telefoon

Open het adres één keer met internet.

- **iPhone:** open het in **Safari**, tik op de deelknop en kies **Zet op beginscherm**.
- **Android:** open het in **Chrome**, tik op het menu met de drie puntjes en kies **App installeren** of **Toevoegen aan startscherm**.

Open de app daarna één keer vanaf het beginscherm. Vanaf dat moment werkt hij ook in vliegtuigmodus.

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
