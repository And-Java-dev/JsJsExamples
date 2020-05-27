const countries = ['Armenia', 'Russia', 'Georgia']
const cities = ['Gyumri', 'Moskva', 'Tbilisi']

console.log(...cities, ...countries)
const arr = [...countries, 'Kamboja', ...cities]
console.log(arr)
const arr2 = [countries, cities, 'Berlin']
console.log(arr2)
const c = cities.concat(countries)
console.log(c)


const citiesArmeniaWithPopulation = {
    rastov: 500000,
    erevan: 1200000,
    gyumri: 40000,
    vanadzor: 20000
}

const citiesRussiaWithPopulation = {
    moscow: 20000000,
    jukovskiy: 5600000,
    rastov: 7000000
}
// hertakanutyun@ kap uni arjeqneri popoxman or` rastov: ...
// console.log({...citiesArmeniaWithPopulation, ...citiesRussiaWithPopulation})
console.log({...citiesRussiaWithPopulation, ...citiesArmeniaWithPopulation})


const divs = document.querySelectorAll('div')
const nodes = [...divs]

console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))
console.log(nodes.filter(c => c.className === 'circle'))
// console.log(divs.forEach())


const numbers = [55,17,24,10]
console.log(Math.max.apply(null,numbers)) //hin
console.log(Math.min(7,37,22,11,0)) //hin
console.log(Math.max(...numbers)) //ES6
