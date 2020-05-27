const set = new  Set([1,52,6,3,2,11,22,56,89,12,15,10])

for (let i = 0; i < 100; i++) {
    if (!set.has(i)){
        set.add(i)
    }

}

console.log(set)


function uniceValues(array) {
// return [... new Set(array)]
    return Array.from(new Set(array))
}

console.log(uniceValues(new Set([3,3,3,3,4,5,6,7,7,7,7,7,44,4])))
console.log(set.size)
console.log(set.delete(6))
console.log(set.size)
set.clear()
console.log(set.size)
