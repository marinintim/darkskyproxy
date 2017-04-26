#!/usr/bin/env node
const http = require('http')
const https = require('https')

let api_key = process.env.DARKSKY_API || process.argv[2]

const addApiKey = (url, apiKey) => {
  url = url.slice(1).split('/')
  url = ['https://api.darksky.net', url[0], apiKey].concat(url.slice(1)).join('/')
  return url
}

const proxy = (req, res) => {
  let url = addApiKey(req.url, api_key)

  return https.get(url, (dsRes) => {
    const headers = dsRes.headers
    headers['Access-Control-Allow-Origin'] = '*'
    res.writeHead(dsRes.statusCode, headers)
    dsRes.pipe(res)
  }).pipe(req)
}

const handleRequest = (req, res) => {
  if (req.method === 'GET') return proxy(req, res)
  else return res.end(`Unsupported method ${req.method}`)
}

if (!module.parent) {
  if (!api_key) {
    console.error('Please, enter your api_key either as DARKSKY_API env variable or CLI argument')
    process.exit(127)
  }

  const server = http.createServer(handleRequest)

  const port = process.env.PORT || 8050
  server.listen(port, () => {
    console.log('Powered by DarkSky. Go ahead, try it! Proxy is available at http://localhost:' + port)
  })
}

module.exports = {
  proxy,
  handleRequest,
  addApiKey
}
