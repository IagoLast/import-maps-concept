# Import Maps concept

Check [https://github.com/WICG/import-maps](https://github.com/WICG/import-maps) for more info about import maps.

This repo contains a little experiment trying to use ES6 imports from the browser using a service worker to intercept library requests 
and return the right one pointed by the `import-map.json`.


Chrome does not support bare module identifiers so I had to use `//` as prefix:

See https://jakearchibald.com/2017/es-modules-in-browsers/#bare-import-specifiers-arent-currently-supported for more info.