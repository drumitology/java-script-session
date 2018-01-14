var fetch = require('node-fetch')
const a = 1
const b = 2


const heroes = [
  'berserker',
  'archer',
  'mage'
]

console.log('I want ' + heroes[0])

heroes.map((value, key) => {
  console.log(value)
  //console.log(value)
})

heroes.forEach((value, key) => {
  console.log(value)
  //console.log(value)
})


for(i = 0; i < heroes.length; i++) {
  console.log(heroes[i])
}

//console.log(fetch)

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'GET'
}).then((response) => {
  return response.json()
}).then((json) => {
  console.log(json)
})
