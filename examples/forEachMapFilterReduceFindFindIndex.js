const people = [
    {name: 'Saqo', age: 37, budget: 25200},
    {name: 'Bxdo', age: 20, budget: 37000},
    {name: 'Satenik', age: 26, budget: 52000},
    {name: 'Roza', age: 30, budget: 11000},
    {name: 'Stepan', age: 77, budget: 14500}
    ]

for(let person of people){
    console.log(person.name)
}

//ForEach

people.forEach(function (person,index,pArr) {
console.log(person.age)
})

people.forEach(person => console.log(person))


//Map

const newPeople = people.map(person => `${person.name + 'l'} , (${person.budget})`)

//Filter

const perosns = []
for (let i = 0; i < people.length; i++) {
    if (people[i].age > 60){
        perosns.push(people[i])
    }
}

console.log(perosns)


const persons2 = people.filter(p => p.age < 60)

console.log(persons2)


//Reduce

const amount = people.reduce((total,person)=>total + person.budget,0)

//Find
const women = people.find(person => person.name === "Satenik")

//FindIndex

const womenIndex = people.findIndex(person => person.name === "Satenik")


//==============


const people2 = people.filter(person => person.name.length < 5)
    .map(person => {
        person.surname = `${person.name + 'yan'}`
        return person
    })
    .reduce((total, p)=> total + p.age, 0)

