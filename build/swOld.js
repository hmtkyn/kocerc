const self = this;
const cacheVersion = "v0.0.3";

self.addEventListener("install", (event) => {
  console.log("Service Worker: Install");
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
              if (cacheName !== cacheVersion) {
                console.log("Service Worker: Clearing Old Cache")
                return caches.delete(cacheName);
              }
            })
        )
      })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetch");

  event.respondWith(
    fetch(event.request)
      .then(res => {
        const resClone = res.clone();
        caches
          .open(cacheVersion)
          .then(cache => {
            cache.put(event.request, resClone)
          });
        return res;
      })
      .catch(err => caches.match(event.request).then(res => res))
  );
});
