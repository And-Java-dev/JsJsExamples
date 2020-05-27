// Objects

const person = {
    name: 'And',
    age: 25,
    job: 'java developer'
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop ${prop}`)

        if (!(prop in target)){
            return prop.split('_')
                .map(p => target[p])
                .join('*')
        }
    },

    set(target, p, value, receiver) {
        if (p in target) {
            target[p] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, p) {
        return ['age', 'name', 'job'].includes(p)
    },
    deleteProperty(target, p) {
        console.log('Deleting...', p)
        delete target[p]
        return true
    }
})

//Functions

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log('Calling fn:')
        return target.apply(thisArg, argArray).toUpperCase()
    }
})


//Classes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray) {
        console.log('Construct ...')

        return new Proxy(new target(...argArray), {
            get(target, p, receiver) {
                console.log(`Getting prop... ${p}`)
                return target[p]
            }
        })
    }
})

const p = new PersonProxy('Ando', 33)
