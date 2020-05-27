// Hidden properies

const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith('_'),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop]: void 0)

    })
}

const data = withHiddenProps({
    name: 'Vlad',
    age: '30',
    _uuid: '55529526885'
})

//Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj? obj[prop]: defaultValue)
    })
}

const position = withDefaultValue({
    x: 44,
    y: 104
},
    0
)

//Optimization

// const userData = [
//     {id:1, name: 'Davo', age:17},
//     {id:2, name: 'Sveta', age:19},
//     {id:3, name: 'Jiro', age:57},
//     {id:4, name: 'Alla', age:22},
// ]


// const index = {}
//
// userData.forEach(i => (index[i.id] = i))


const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const  index = {}
        args.forEach(item => (index[item.id] = item) )

        return new  Proxy(new target(... args), {
            get(arr, prop){
                switch (prop) {
                    case 'push': return  item => {
                        index[item.id] = item
                        arr[prop].call(arr, item)
                    }
                    case 'findById' : return id => index[id]
                    default: return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    {id:1, name: 'Davo', age:17},
    {id:2, name: 'Sveta', age:19},
    {id:3, name: 'Jiro', age:57},
    {id:4, name: 'Alla', age:22},
])
