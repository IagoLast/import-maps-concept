# Import Maps concept

Check [https://github.com/WICG/import-maps](https://github.com/WICG/import-maps) for more info about import maps.


## Getting started

1. Enable [Chrome flag](chrome://flags/#enable-built-in-module-infra)
2. Open index.html


## Stupid Questions:


### Background

Everyone prefers

```js
import react from 'react`;
```

Than

```js
import react from '../../../node_modules/react/build/dist/esm/browser.esm.js';
```

Import maps solve this mapping react to the given URL.


BUT!

This is exactly the thing npm does with the deps in the `package.json` (adding semver).

### Stupid question 1:

Can we port this concept to the web?


`web-package.json`

```json
{
    "got": "^9.6.0",
    "registry-auth-token": "^3.4.0",
    "registry-url": "^5.0.0",
    "semver": "^5.6.0"
}
```

And from this generate an import-map.json


### Stupid question 2:

Would be possible to create a import-map server builder?


```
GET https://import-map.io?p=react@latest,rxjs#1.0,some-lib@2.0.3


{
  "imports": {
    "react": ['https:...'],
    "rxjs": ['https:...'],
    "some-lib": ['https:...'],
  }
}
```

Maybe a complete register?

```
GET https://import-map.io


{
 ...big file (usually cached)
}
```


### Stupid question 3:

How [pikapkg](https://github.com/pikapkg/web) fits here?

