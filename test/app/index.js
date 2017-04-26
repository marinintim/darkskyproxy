/* global fetch */


fetch('http://localhost:8050/forecast/59.9342802,30.3350986?units=si')
  .then(r => r.json())
  .then(d => {
	updateText('.temp', translateTemp(d))
	updateText('.take-this', whatToTake(d))
  })
  .catch(e => {
	updateText('.temp', 'Something went wrong. Sorry, you\'ll have to look outside!')
  })

function updateText(selector, text) {
  const el = document.querySelector(selector)
  if (el) {
	el.innerHTML = text
  } else {
	console.warn('Tried to find ' + selector + ', but got nothing')
  }
}

function translateTemp(weather) {
  const t = weather.currently.apparentTemperature
  const max = weather.daily.data[0].temperatureMax
  
  
  return 'Right now it feels like <span class="nobr">' + t + ' °C</span>'
}

function whatToTake(weather) {
  const things = {
	'rain': '☂',
	'clear-day': '🕶',
	'default': '🍱'
  }

  const thing = things[weather.daily.data[0].icon] || things['default']
  
  return 'Take ' + thing + ' with you today!' 
}
