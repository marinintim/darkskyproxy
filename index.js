#!/usr/bin/env node
const http = require('http')
const https = require('https')

const api_key = process.env.DARKSKY_API || process.argv[2]

if (!api_key) {
  console.error('Please, enter your api_key either as DARKSKY_API env variable or CLI argument')
  process.exit(127)
}

const server = http.createServer((req, res) => {
  let url = req.url.slice(1).split('/')
  url = ['https://api.darksky.net', url[0], api_key].concat(url.slice(1)).join('/')
  https.get(url, (dsRes) => dsRes.pipe(res)).pipe(req)
})

const port = process.env.PORT || 8050
server.listen(port, () => {
  console.log('Powered by DarkSky. Go ahead, try it! Proxy is available at http://localhost:' + port)
})
