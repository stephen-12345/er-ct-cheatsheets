/* ER CT Cheat Sheets — offline service worker.
   - HTML / page navigations  -> NETWORK-FIRST (fresh when online, cached when offline)
   - Other assets (CSS/JS/icons) -> CACHE-FIRST with runtime caching
   Bump CACHE on each meaningful change to purge old caches. */
const CACHE = 'er-ct-v7';

const SHELL = [
  './',
  'index.html',
  'dx.html',
  'quiz.html',
  'macros.html',
  'polish.html',
  'sync.html',
  'manifest.webmanifest',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
  'assets/sheet.css',
  'assets/sheet.js',
  'assets/render.js',
  'assets/launcher.js',
  'assets/store.js',
  'assets/quiz.js',
  'assets/macros.js',
  'assets/ai.js',
  'assets/firebase-sync.js',
  // data-driven catalog (powers home search + every generic diagnosis page)
  'data/_core.js',
  'data/neuro.js',
  'data/headneck.js',
  'data/spine.js',
  'data/chest.js',
  'data/cardiac.js',
  'data/vascular.js',
  'data/abdomen.js',
  'data/hpb.js',
  'data/gu.js',
  'data/pelvis.js',
  'data/msk.js',
  'data/peds.js',
  // bespoke deep-dive pages
  'aorta/acute-aortic-syndrome.html',
  'pe/pulmonary-embolism.html',
  'appendicitis/appendicitis.html',
  'diverticulitis/diverticulitis.html',
  'obstruction/bowel-obstruction.html',
  'ischemia/mesenteric-ischemia.html',
  'perforation/perforation.html',
  'pancreatitis/pancreatitis.html',
  'renal/renal-colic.html',
  'stroke/acute-ischemic-stroke.html',
  'sah/subarachnoid-hemorrhage.html',
  'pneumothorax/pneumothorax.html',
  'ectopic/ectopic-pregnancy.html',
  'ovarian-torsion/ovarian-torsion.html',
  'testicular-torsion/testicular-torsion.html',
  'cauda-equina/cauda-equina.html',
  'nec-fasc/necrotizing-fasciitis.html',
  'cholangitis/ascending-cholangitis.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(SHELL.map((u) => cache.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isPage = req.mode === 'navigate' || (sameOrigin && url.pathname.endsWith('.html'));

  if (isPage) {
    e.respondWith((async () => {
      try {
        const res = await fetch(req);
        if (res && res.ok && sameOrigin) {
          const cache = await caches.open(CACHE);
          cache.put(req, res.clone());
        }
        return res;
      } catch (err) {
        // exact match first, then ignore the query string so dx.html?dx=<any-slug>
        // is served by the cached dx.html shell (content is rebuilt from cached data/*.js)
        const cached = await caches.match(req) || await caches.match(req, { ignoreSearch: true });
        if (cached) return cached;
        const home = await caches.match('index.html');
        if (home) return home;
        throw err;
      }
    })());
    return;
  }

  e.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    const res = await fetch(req);
    if (res && res.ok && sameOrigin) {
      const cache = await caches.open(CACHE);
      cache.put(req, res.clone());
    }
    return res;
  })());
});
