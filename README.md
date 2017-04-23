darkskyproxy
============

This is a small proxy to DarkSky API to hide your API key from browser.

API is the same, but you omit the key. So URL will look like `http://localhost:8050/forecast/37.8267,-122.4233`.

## How to install

```
$ npm install -g darskyproxy
```

## How to use

```
$ darkskyproxy [your_api_key_goes_here]
# OR
$ DARKSKY_API=[your_api_key_goes_here] darkskyproxy
