// Teksten van de CRP code scanner (app en installatiepagina).
//
// Zo pas je een tekst aan:
// - Verander alleen de tekst tussen de aanhalingstekens. Laat de sleutel links van de dubbele punt staan.
// - Elke regel eindigt met een komma. Een vergeten aanhalingsteken of komma laat de app niet starten.
// - Een aanhalingsteken in de tekst zelf schrijf je als \"
// - **tekst** wordt vetgedrukt. Andere opmaak of HTML werkt hier niet.
// - {min}, {tijd}, {versie}, {deelknop} en dergelijke vult de app zelf in. Laat ze staan.
// - Na een wijziging: verhoog VERSION in sw.js, anders zien telefoons de nieuwe tekst niet.
//
// Niet in deze tabel, omdat ze ook zonder de app gelezen worden (link-voorbeelden, beginscherm):
// de paginatitels en beschrijving in de <head> van index.html en installeren.html, en manifest.webmanifest.
//
// Een nieuwe taal voeg je toe als extra blok naast nl, bijvoorbeeld en: { ... }.
// De app kiest de taal van de telefoon. Ontbreekt een tekst in die taal, dan toont hij de Nederlandse.

window.TEKSTEN = {
  nl: {

    /* ================= App (index.html) ================= */

    // ---------- Hoofdscherm ----------
    titel:            "CRP code scanner",
    houdOnderScanner: "Houd dit scherm onder de scanner",
    barcodeLabel:     "Barcode",                       // voorgelezen door de schermlezer
    gelezenOm:        "Gelezen om {tijd}",
    wordtGewist:      "Wordt over {min} min gewist",
    knopDelen:        "Delen",
    knopGekopieerd:   "Gekopieerd",
    knopWissen:       "Klaar, wissen",
    leegVakLabel:     "Nog geen code gescand",         // voorgelezen door de schermlezer
    knopScannen:      "Code scannen",
    versieRegel:      "Versie {versie} · werkt offline",

    // ---------- Uitklapper Handmatige invoer ----------
    handmatigTitel:   "Handmatige invoer",
    handmatigVeld:    "Verwijscode",
    knopToon:         "Toon",

    // ---------- Uitklapper Instructie gebruik ----------
    instructieTitel:  "Instructie gebruik",
    instructie1:      "Open de verwijzing in ZorgDomein, of pak het papieren formulier erbij.",
    instructie2:      "Tik op **Code scannen** en houd de barcode in het gele kader. De app herkent hem vanzelf.",
    instructie3:      "Houd het telefoonscherm onder de scanner van het CRP-apparaat.",
    instructie4:      "Controleer of de code bij de juiste patiënt en het juiste monster hoort.",
    instructie5:      "Tik op **Klaar, wissen**. Na 10 minuten wist de code zichzelf.",

    // ---------- Uitklapper Scan tips ----------
    tipsTitel:        "Scan tips",
    tip1:             "Zoom de ZorgDomein-pagina in (Ctrl +) zodat de barcode groot op het scherm staat.",
    tip2:             "Houd de barcode helemaal binnen het gele kader, recht en iets schuin tegen weerspiegeling.",
    tip3:             "Weinig licht bij een papieren formulier? Zet de lamp aan met de lampknop.",
    tip4:             "Zet de telefoonhelderheid hoog voordat je onder de scanner gaat.",

    // ---------- Uitklapper Privacy en veilig delen ----------
    // VASTE AFSPRAAK: alleen wijzigen na akkoord (NEN 7510 / FG)
    privacyTitel:     "Privacy en veilig delen",
    privacy1:         "De app slaat niets op en verstuurt niets. Hij zoekt alleen binnen het gele kader naar een barcode.",
    privacy2:         "Een verwijscode is een gepseudonimiseerd persoonsgegeven. Ga er zorgvuldig mee om.",
    privacy3:         "**Deel alleen via Outlook of Teams.** Niet via WhatsApp, sms, privémail of andere apps.",
    privacy4:         "Delen buiten Fonkelzorg, bijvoorbeeld met een andere zorgverlener of de patiënt, mag als het past bij het zorgproces en jij het veilig inschat.",
    privacy5:         "**Deel de code nooit samen met naam, geboortedatum of BSN.**",
    privacy6:         "Wis de code na gebruik en houd je telefoon vergrendeld.",
    privacy7:         "Per ongeluk verkeerd gedeeld? Meld het direct bij de praktijkhouder.",

    // ---------- Scanscherm (camera) ----------
    scannerLabel:     "Barcode scannen",               // voorgelezen door de schermlezer
    scanKader:        "Plaats de barcode in het gele kader",
    scanKaderUitleg:  "De code wordt automatisch herkend",
    lampAan:          "Lamp aanzetten",                // voorgelezen door de schermlezer
    lampUit:          "Lamp uitzetten",                // voorgelezen door de schermlezer
    knopAnnuleren:    "Annuleren",
    knopCameraWerktNiet: "Camera werkt niet? Maak een gewone foto",

    // ---------- Waarschuwing bij delen ----------
    // VASTE AFSPRAAK: alleen wijzigen na akkoord (NEN 7510 / FG)
    delenTitel:       "Let op bij delen",
    delenTekst:       "Deel de verwijscode alleen via **Outlook** of **Teams**, en nooit samen met naam, geboortedatum of BSN.",
    delenMeerInfo:    "Lees meer onder **Privacy en veilig delen** op het hoofdscherm.",
    delenVraag:       "Wil je doorgaan met delen?",
    knopNee:          "Nee",
    knopJaDelen:      "Ja, delen",

    // ---------- Waarschuwing afwijkende code ----------
    warnTitel:        "Dit lijkt geen verwijscode",
    warnUitleg:       "Een verwijscode bestaat uit ZD gevolgd door 9 cijfers. Gelezen is:",
    warnLeeg:         "(leeg)",
    warnControle:     "Controleer of je de juiste barcode hebt gescand.",
    knopOpnieuw:      "Opnieuw",
    knopTochGebruiken: "Toch gebruiken",

    // ---------- Meldingen onder de knop Code scannen ----------
    meldingVulCodeIn:     "Vul eerst een code in.",
    meldingGewist:        "Code gewist.",
    meldingNietTonen:     "Deze code kan niet als Code 128 worden getoond. Controleer de invoer.",
    meldingKopierenMislukt: "Kopiëren lukte niet automatisch. De code is geselecteerd, kopieer hem met lang drukken.",
    meldingCameraGeenToestemming: "De app mag de camera niet gebruiken. Geef toestemming in de instellingen, of gebruik een gewone foto.",
    meldingCameraStartNiet: "De camera kon niet starten. Probeer het opnieuw of gebruik een gewone foto.",
    knopGewoneFoto:       "Gewone foto maken in plaats van live scannen",
    meldingBarcodeLezen:  "Barcode lezen…",
    meldingGeenBarcode:   "Geen barcode gevonden. Zoom de pagina op de computer verder in en maak de foto recht van voren.",
    meldingNieuweFoto:    "Maak een nieuwe foto of scan opnieuw.",


    /* ================= Installatiepagina (installeren.html) ================= */

    // ---------- Bovenste deel ----------
    instKicker:       "Voor het lab",
    instKop:          "Van ZorgDomein naar het CRP-apparaat, zonder overtypen",
    instIntro:        "Scan de verwijscode op het computerscherm met je telefoon. De app toont de barcode groot, zodat je hem direct onder de scanner van het CRP-apparaat houdt.",
    knopInstalleren:  "App installeren",
    instHint:         "Gratis, zonder app store. Werkt daarna ook zonder internet.",
    instHintEenTik:   "Eén tik, zonder app store. Werkt daarna ook zonder internet.",   // als de browser een installatieknop aanbiedt
    instHintComputer: "Bedoeld voor je telefoon. Scan hieronder de QR-code om deze pagina op je telefoon te openen.",
    instStaatErAl:    "De app staat op je beginscherm.",
    instAlInGebruik:  "Je gebruikt de app al vanaf je beginscherm.",
    instGelukt:       "Gelukt. De app staat nu op je beginscherm als CRP scanner.",
    knopOpenInBrowser: "App openen in de browser",
    knopOpen:         "App openen",

    // ---------- Voorbeeldtelefoon (gebruikt ook titel, knopScannen en houdOnderScanner) ----------
    voorbeeldCode:    "VOORBEELD",
    voorbeeldKnopWissen: "Klaar, code wissen",
    voorbeeldOnderschrift: "Voorbeeldweergave",

    // ---------- Zo werkt het ----------
    zoWerktHet:       "Zo werkt het",
    stap1Titel:       "Open de verwijzing",
    stap1Tekst:       "Open de aanvraag in ZorgDomein op de computer, zodat de barcode op het scherm staat.",
    stap2Titel:       "Scan met je telefoon",
    stap2Tekst:       "Tik op **Code scannen** en houd de barcode in het gele kader. De app herkent hem vanzelf.",
    stap3Titel:       "Houd hem onder de scanner",
    stap3Tekst:       "Loop naar het CRP-apparaat en houd het telefoonscherm onder de barcodescanner. Controleer of de code bij de patiënt hoort.",

    // ---------- Veilig en eenvoudig ----------
    veiligTitel:      "Veilig en eenvoudig",
    feit1Titel:       "De app zelf slaat niets op en verstuurt niets",
    feit1Tekst:       "Scannen en tonen gebeuren op de telefoon zelf. Delen gebeurt alleen als je daar zelf voor kiest.",
    feit2Titel:       "Alleen binnen het kader",
    feit2Tekst:       "De app zoekt uitsluitend binnen het gele kader naar een barcode en leest geen tekst.",
    feit3Titel:       "Code wist zichzelf",
    feit3Tekst:       "Na 10 minuten verdwijnt de code automatisch, zodat hij niet bij de volgende patiënt blijft staan.",
    feit4Titel:       "Werkt zonder internet",
    feit4Tekst:       "Na de installatie werkt de app ook in vliegtuigmodus.",

    // ---------- Installeren op je toestel ----------
    toestelTitel:     "Installeren op je toestel",
    jouwToestel:      "Jouw toestel",
    deelknopLabel:    "deelknop",                      // voorgelezen door de schermlezer bij het deelicoon
    iphoneTitel:      "iPhone",
    iphone1:          "Open deze pagina in **Safari**.",
    iphone2:          "Tik op de deelknop {deelknop} onderin of bovenin.",
    iphone3:          "Kies **Zet op beginscherm** en tik op **Voeg toe**.",
    androidTitel:     "Android",
    android1:         "Open deze pagina in **Chrome**.",
    android2:         "Tik op **App installeren** bovenaan deze pagina.",
    android3:         "Lukt dat niet: tik op het menu **⋮** en kies **App installeren** of **Toevoegen aan startscherm**.",
    computerTitel:    "Op de computer?",
    computerTekst:    "Scan deze QR-code met de camera van je telefoon om deze pagina daar te openen.",
    qrLabel:          "QR-code naar deze pagina",      // voorgelezen door de schermlezer
    voetVersie:       "CRP code scanner · versie {versie}",

    // ---------- Venster na een tik op App installeren ----------
    hulpTitel:        "Zet de app op je beginscherm",
    knopBegrepen:     "Begrepen",
    // geopend in een andere app, zoals mail of Teams
    hulpInApp1:       "Deze pagina is geopend in een andere app, bijvoorbeeld je mail. Daar kun je niet installeren.",
    hulpInApp2Iphone: "Tik op het menu en kies **Open in Safari**.",
    hulpInApp2Android: "Tik op het menu **⋮** en kies **Openen in Chrome**.",
    hulpInApp3:       "Tik daar opnieuw op **App installeren**.",
    // iPhone met Safari
    hulpIphone1:      "Tik op de deelknop {deelknop} onderin het scherm (op iPad bovenin).",
    hulpIphone2:      "Scroll naar beneden en kies **Zet op beginscherm**.",
    hulpIphone3:      "Tik rechtsboven op **Voeg toe**. De app staat nu als **CRP scanner** op je beginscherm.",
    // iPhone met een andere browser (Chrome, Firefox, Edge)
    hulpIphoneAnders1: "Open deze pagina in **Safari**. Dat gaat het makkelijkst.",
    hulpIphoneAnders2: "Tik daar op de deelknop {deelknop}.",
    hulpIphoneAnders3: "Kies **Zet op beginscherm** en tik op **Voeg toe**.",
    hulpIphoneNotitie: "Apple staat geen installatieknop op websites toe. Daarom gaat het op een iPhone via het deelmenu. Het duurt maar een paar seconden.",
    // Android
    hulpAndroid1:     "Tik rechtsboven op het menu **⋮** van de browser.",
    hulpAndroid2:     "Kies **App installeren** of **Toevoegen aan startscherm**.",
    hulpAndroid3:     "Bevestig met **Installeren**.",
    hulpAndroidNotitie: "Staat de app al op je telefoon? Dan biedt de browser installeren niet nog een keer aan. Open hem dan via je startscherm.",
    // computer
    hulpComputer1:    "Richt de camera van je telefoon op de QR-code onderaan deze pagina.",
    hulpComputer2:    "Tik op de link die verschijnt.",
    hulpComputer3:    "Tik op je telefoon op **App installeren**.",
  },
};
