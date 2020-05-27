const users = [
    {name: 'Sona'},
    {name: 'Vadim'},
    {name: 'Ivan'},
]


// has , splice = delete
const visits = new WeakSet()

visits.add(users[0]).add(users[2])

users.splice(0, 1)

console.log(visits.has(users[0]))
console.log(visits.has(users[2]))
console.log(visits.has(users[1]))
