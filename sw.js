const MAP = { imports: {} };
fetch('./import-map.json')
    .then(data => data.json())
    .then(data => {

        MAP.imports = data.imports

    });


this.addEventListener('fetch', function (event) {
    const resource = event.request.url.replace('http://', '').trim();
    if (MAP.imports[resource]) {
        event.respondWith(fetch(MAP.imports[resource]));
    } else {
        event.respondWith(fetch(event.request));
    }
});
