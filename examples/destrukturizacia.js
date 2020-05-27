function calc(a, b) {
    return [
        a + b,
        a / b,
        a * b,
        undefined,
        a - b,
    ]

}

// Arrays

// const results = calc(50,33)
// const sum = results[0]
// const sub = results[1]
// const mul = results[2]
// const bal = results[3]

const results =[sum,sub,mul,,bal] = calc(50,33)
// console.log(results)
console.log(sum,sub,bal,mul)

const res = [sum, sub,, und = 'pop-corn', ...other] = calc(7,3)

console.log(res)
console.log(und, other)


//Objects

const person = {
    name:'Ervand',
    age: 37,
    address: {
        country: 'Armenia',
        city: 'Gyumri'
    }
}

const {name: firstName = 'dont have name', age, car = 'dont have car', ...info} = person
const {name, age:years, address:{city, country}} = person

console.log(info)
console.log(name,years,city,country)
console.log(firstName, age, car)

function logPerson({name, address:{city, country}}){
    console.log(name + ' *** ' + city + ' ' + country)
}
logPerson(person)
