# Import Maps concept

Check [https://github.com/WICG/import-maps](https://github.com/WICG/import-maps) for more info about import maps.


## Getting started

1. Enable [Chrome flag](chrome://flags/#enable-built-in-module-infra)
2. Open index.html


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

````
GET https://import-map.io


{
    ... big file (usually cached)
}

```