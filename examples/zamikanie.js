function createCalcFunction(n) {
    return function () {
        return 1000 * n
    }
}

createCalcFunction();
const create = createCalcFunction(4);


function createIncremention(i) {
    return function (n) {
        return i + n
    }
}


const addOne = createIncremention(1);
console.log(addOne(7))
console.log(addOne(1000))

const addTen = createIncremention(10)
console.log(addTen(85))
console.log(addTen(400))

function urlGenerator(s, domain) {
    return function (url) {
        return `http${s}://${url}.${domain}`
    }
}

const comUrl = urlGenerator('', 'com');
console.log(comUrl('google'))
console.log(comUrl('youtube'))

const ruUrl = urlGenerator('s', 'ru')
console.log(ruUrl('yandex'))
console.log(ruUrl('ok'))

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)

    }

}

function logPerson() {
    console.log(`Person ~ name:${this.name},age:${this.age}`)
}


const person1 = {name: 'Kian', age: 33}
const person2 = {name: 'Julia', age: 70}

bind(person1, logPerson)()
bind(person2, logPerson)()


function append(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}

function getInfo() {
console.log(`Person new info: name:${this.name+ 'ik'}, age:${this.age+ 7}`)
}



append(person1, getInfo)()
append(person2, getInfo)()
