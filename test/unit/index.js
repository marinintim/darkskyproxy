/* global require, process */

import test from 'ava'

process.env.DARKSKY_API = 'AVA_TEST_KEY'

const dsProxy = require('../../index.js')

test('addApiKey', t => {
  t.plan(1)
  let url = '/api/goes/here/'
  t.is(dsProxy.addApiKey(url, 'key'), 'https://api.darksky.net/api/key/goes/here/', 'addApiKey inserts api key in the right place')
})

test('handleRequest', t => {
  t.plan(1)
  dsProxy.handleRequest({method: 'NONSENSE'}, {
	end: msg => {
	  t.is(msg, 'Unsupported method NONSENSE', 'handleRequest rejects wrong methods')
	}
  })
})

