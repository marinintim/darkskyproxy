darkskyproxy
============

This is a small proxy to DarkSky API to hide your API key from browser.

API is the same as DarkSky one, but you omit the key. So URL will look like `http://localhost:8050/forecast/37.8267,-122.4233`.

## How to install

Install it from npm repository:

```
$ npm install -g darkskyproxy
```

## How to use

Start it locally:

```
$ darkskyproxy [your_api_key_goes_here]
# OR
$ DARKSKY_API=[your_api_key_goes_here] darkskyproxy
```

The default port is 8050, but you can choose your own with PORT env variable.

## License

darkskyproxy is under ISC license.

[Tim Marinin](http://marinin.xyz), 2017
