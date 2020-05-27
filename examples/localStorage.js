const number = 50

const person = {
    name: 'A',
    age: 20
}

localStorage.removeItem('person')
localStorage.removeItem('pers')
console.log(localStorage.getItem('number'))
console.log(localStorage.getItem('pers'))
localStorage.setItem('pers', JSON.stringify(person))
console.log(localStorage.getItem('pers'))
localStorage.setItem('number', number.toString())
console.log(localStorage.getItem('number'))

const raw = localStorage.getItem('pers')
const object = JSON.parse(raw)

object.name = 'Andranik'

console.log(object)

localStorage.setItem('And', JSON.stringify(object))
// localStorage.clear()

// window.addEventListener('storage', event => {
//     console.log(event)
// })

window.onstorage = (ev) => {
    console.log(ev)}

