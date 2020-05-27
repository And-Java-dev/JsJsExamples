const obj = {
    name: 'And',
    surname: ' Hovhannisyan',
    age: '26'
}

const entries = [
    ['name', 'Ervand'],
    ['job', 'slesar'],
    ['budjet', 29000]
]

console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))


const  map = new Map(entries)

console.log(map.get('job'))
console.log(map.size)
map.set('fullName', 'AndHov')
    .set('value', obj)
    .set(obj, entries)
console.log(map)
console.log(map.size)

console.log(map.has('job'))
map.delete('job')
map.delete(obj.surname)
console.log(map.has('job'))
console.log(map)
console.log(map.size)



//***********

for (let entry of map.values()){
    console.log(entry)
}

for (let entry of map){
    console.log(entry)
}

for (let [key, value] of map){
    console.log(key, value)
}

map.forEach((val, key, map) => {
    console.log(val)
})

const arrMap = Array.from(map)

console.log(arrMap)

const objMap = Object.fromEntries(map)

console.log(objMap)


const users = [
    {name: 'Vlad'},
    {name: 'Den'},
    {name: 'Ben'},
]


const visits = new Map([
    [users[0], new Date().getMilliseconds() * 1000],
    [users[1], new Date(new Date().getTime() + 1000 * 60)],
    [users[2], new Date()]
])


// visits.set(users[0], new Date().getMilliseconds() * 1000)
// visits.set(users[1], new Date(new Date().getTime() + 1000 * 60))
// visits.set(users[2], new Date())




function lastVisit(name){
    return visits.get(users.find(person => person.name === name))
}

console.log(lastVisit('Ben'))
