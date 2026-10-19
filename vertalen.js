// Zet de teksten uit teksten.js op de pagina. Teksten aanpassen doe je in teksten.js, niet hier.
//
// In de HTML:  data-t="sleutel"                     -> inhoud van het element
//              data-t-attr="aria-label:sleutel;…"   -> attributen
//              data-var-naam="waarde"               -> vult {naam} in de tekst van dat element
// In de code:  T.t("sleutel", {naam: waarde})       -> platte tekst (voor textContent)
//              T.html("sleutel", {naam: html})      -> HTML, met **vet** en ingevulde HTML-stukjes
(function(){
  var TABEL = window.TEKSTEN;
  if (!TABEL || !TABEL.nl) return;   // teksten.js ontbreekt of bevat een fout: window.T blijft leeg, de pagina meldt dat

  // eerste taal van de telefoon waarvoor teksten bestaan, anders Nederlands
  var taal = "nl";
  var voorkeur = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
  for (var i = 0; i < voorkeur.length; i++) {
    var code = String(voorkeur[i]).slice(0, 2).toLowerCase();
    if (TABEL[code]) { taal = code; break; }
  }
  document.documentElement.lang = taal;

  function ruw(sleutel){
    var s = TABEL[taal] && TABEL[taal][sleutel];
    if (s == null) s = TABEL.nl[sleutel];
    if (s == null) { console.warn("Tekst ontbreekt in teksten.js: " + sleutel); return sleutel; }
    return String(s);
  }
  function invullen(s, vars, maak){
    return s.replace(/\{(\w+)\}/g, function(m, naam){ return vars && vars[naam] != null ? maak(vars[naam]) : m });
  }
  function escape(s){ return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }

  // platte tekst: **vet** vervalt, {naam} wordt als tekst ingevuld
  function t(sleutel, vars){
    return invullen(ruw(sleutel).replace(/\*\*(.+?)\*\*/g, "$1"), vars, String);
  }
  // HTML: tekst uit de tabel wordt veilig gemaakt, daarna **vet** en {naam} met HTML uit de code
  function html(sleutel, vars){
    var s = escape(ruw(sleutel)).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    return invullen(s, vars, String);
  }

  function varsVan(el, extra){
    var v = {};
    for (var k in extra) v[k] = extra[k];
    for (var i = 0; i < el.attributes.length; i++) {
      var a = el.attributes[i];
      if (a.name.indexOf("data-var-") === 0) v[a.name.slice(9)] = escape(a.value);
    }
    return v;
  }

  // alle teksten op de pagina invullen; htmlVars zijn HTML-stukjes uit de code, zoals een icoon
  function vertaal(htmlVars){
    document.querySelectorAll("[data-t]").forEach(function(el){
      el.innerHTML = html(el.getAttribute("data-t"), varsVan(el, htmlVars));
    });
    document.querySelectorAll("[data-t-attr]").forEach(function(el){
      el.getAttribute("data-t-attr").split(";").forEach(function(paar){
        var p = paar.split(":");
        if (p.length === 2) el.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
  }

  window.T = { taal: taal, t: t, html: html, vertaal: vertaal };
})();
