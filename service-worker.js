self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("srq-cache-v1").then((cache) => {
      return cache.addAll([
        "./",
        "index.html",
        "app.js",
        "manifest.json",
        "android-chrome-192x192.png",
        "android-chrome-512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return new Response("Offline: Resource not available.", {
          headers: { "Content-Type": "text/plain" }
        });
      });
    })
  );
});

