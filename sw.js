// Bewaart alle app-bestanden op de telefoon, zodat de app zonder internet werkt.
// Verhoog VERSION bij elke wijziging, dan halen telefoons de nieuwe versie op.
const VERSION = "crp-doorgeefcode-v5";
const FILES = [
  "./", "index.html", "manifest.webmanifest",
  "lib/JsBarcode.all.min.js", "lib/zxing.min.js",
  "fonts/montserrat-latin-700-normal.woff2", "fonts/open-sans-latin-400-normal.woff2", "fonts/open-sans-latin-700-normal.woff2",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"
];
const NETWORK_TIMEOUT_MS = 3000;   // bij trage of geen verbinding na 3 s de bewaarde versie tonen

self.addEventListener("install", e => {
  // cache: "reload" haalt de bestanden echt van de server, niet uit de browsercache,
  // zodat er nooit een oude index.html in de nieuwe versie belandt.
  e.waitUntil(
    caches.open(VERSION)
      .then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function networkFirst(request) {
  return new Promise(resolve => {
    let done = false;
    const fallback = () => caches.match(request, { ignoreSearch: true })
      .then(hit => hit || caches.match("index.html"));
    const timer = setTimeout(() => { if (!done) { done = true; fallback().then(resolve); } }, NETWORK_TIMEOUT_MS);
    fetch(request, { cache: "no-cache" }).then(res => {
      if (done) return;
      done = true; clearTimeout(timer);
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put("index.html", copy));
        resolve(res);
      } else {
        fallback().then(hit => resolve(hit || res));
      }
    }).catch(() => {
      if (done) return;
      done = true; clearTimeout(timer);
      fallback().then(resolve);
    });
  });
}

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // De app-pagina zelf: eerst online proberen (altijd de nieuwste versie), offline uit de opslag.
  if (e.request.mode === "navigate") { e.respondWith(networkFirst(e.request)); return; }
  // Overige bestanden (scripts, lettertypen, iconen): uit de opslag, anders van het netwerk.
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request)));
});
