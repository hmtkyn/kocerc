
const VERSION = "v0.0.3";
const ASSETS = [
  "/",
  "/index.html",
  "/site.webmanifest",
  "/api/student.json",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js",
  "/images/favicon.ico",
  "/images/favicon-16x16.png",
  "/images/favicon-32x32.png",
  "/images/safari-pinned-tab.svg",
  "/images/mstile-144x144.png",
  "/images/apple-touch-icon.png",
  "/images/game-buz-devri.jpg"
]

self.addEventListener("install", (event) => {
  console.log("Service Worker: Install");

  event.waitUntil(
    caches
      .open(VERSION)
      .then(cache => {
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Active");

  event.waitUntil(
    caches
      .keys()
      .then(cacheList => {
        return Promise.all(
          cacheList
            .map(cacheName => {
              if (cacheName !== VERSION) {
                console.log("Service Worker: Clearing Old Cache")
                return caches.delete(cacheName);
              }
            })
        )
      })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetch");

  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});
