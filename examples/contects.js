function hello() {
    console.log('hello', this)
}

const person = {
    name: 'And',
    age: '26',
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    loginfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`phone is ${phone}`)
        console.log(`job is ${job}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: '34'
}

person.loginfo.bind(lena, '077222530', 'Vaxter')()
person.loginfo.call(lena, '077222530', 'Vaxter')
person.loginfo.apply(lena, ['077222530', 'Vaxter'])

const arr = [2, 3, 5, 10, 22];

// function multBy(array, n) {
//     return array.map(function (i) {
//         return i * n
//     })
// }

// console.log(multBy(arr,7))

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
})
}

console.log(arr.multBy(100))
