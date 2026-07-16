/* TBP Battery Finder — service worker
   Strategy: precache the app shell + fitment data, then serve
   cache-first with a background refresh (stale-while-revalidate).
   Works fully offline after the first online visit. */

const CACHE = 'tbp-staff-v1';

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  '../battery-finder-data.js',
  '../rrp-overrides.js',
  './tier-prices.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      // ignoreSearch so cache-busting queries like ?v=2026-07-15-4 still hit the cache
      const cached = await cache.match(req, { ignoreSearch: true });

      // Background refresh — quietly pick up new data/prices when online
      const network = fetch(req)
        .then((res) => {
          if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);

      if (cached) {
        event.waitUntil(network.catch(() => {}));
        return cached;
      }
      const res = await network;
      if (res) return res;
      // Offline navigation fallback
      if (req.mode === 'navigate') {
        const shell = await cache.match('./index.html');
        if (shell) return shell;
      }
      return new Response('Offline', { status: 503, statusText: 'Offline' });
    })
  );
});
