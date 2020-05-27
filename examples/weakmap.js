let obj = { name: 'weakmap'}

const arr = [obj]

// obj = null

console.log(arr[0])


const  map = new WeakMap([
    [obj, 'obj Data']
])

console.log(map)
console.log(map.get(obj))


///************
// has, get , set, delete
const cache = new WeakMap()

let sevak = { name: 'Sevak'}
let aka = { name: 'Aka'}

function cacheUser(user){
    if (!cache.has(user)){
        cache.set(user, new Date())
    }
    return cache.get(user)
}

cacheUser(aka)
cacheUser(sevak)

sevak = null

console.log(cache.get(aka))
console.log(cache.get(sevak))
