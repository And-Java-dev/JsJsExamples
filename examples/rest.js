const numbers = [1, 11, 22, 33, 2, 3]

function sum(a, b, ...rest) {
    return a + b + rest.reduce((a, i) => a + i, 0)
}

console.log(sum(...numbers))


const a = numbers[4]
const b = numbers[0]

console.log(a, b, '---', ...numbers)

const [e, d, ...other] = numbers
console.log(e, d, other)

const person = {
    name: 'Edo',
    age: 55,
    city: 'Erevan',
    birthDay: '12/12'
}

const {name, birthDay, ...info} = person

console.log(name, birthDay, info)
