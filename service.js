const assets = [
    './',
    './main.js',
    './service.js'
];


self.addEventListener('install', async function () {
    console.log('Install event at '+ Date.now();
    const cache = await caches.open('assets');
    cache.addAll(assets);

});

self.addEventListener('fetch', function (e) {
    console.log('Fetch event at' + + Date.now());
    const req = e.request;
    e.respondWith(cacheFirst(req));
});

async  function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}