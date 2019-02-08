const assets = [
    './',
    './main.js',
    './service.js',
    './manifest.json',
    './images/icons/icon-72x72.png',
    './images/icons/icon-96x96.png',
    './images/icons/icon-128x128.png',
    './images/icons/icon-144x144.png',
    './images/icons/icon-152x152.png',
    './images/icons/icon-192x192.png',
    './images/icons/icon-384x384.png',
    './images/icons/icon-512x512.png',
];


self.addEventListener('install', async function () {
    console.log('Install event at '+ Date.now());
    const cache = await caches.open('assets');
    cache.addAll(assets);

});

self.addEventListener('fetch', function (e) {
    console.log('Fetch event at' + + Date.now());
    const req = e.request;
    const url = new URL(req.url);
    if(url.origin === location.origin){
        e.respondWith(cacheFirst(req));
    }else{
        e.respondWith(networkFirst(req));
    }

});

async  function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    console.log('Requested ' + req.url + ' response with ' + (cachedResponse? 'cache':'fetch') + 'data');
    return cachedResponse || fetch(req);
}

async  function networkFirst(req) {
    const cache = await caches.open('data');

    try{
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    }catch(e){
        return await cache.match(req);
    }

    const cachedResponse = await caches.match(req);
    console.log('Requested ' + req.url + ' response with ' + (cachedResponse? 'cache':'fetch') + 'data');
    return cachedResponse || fetch(req);
}