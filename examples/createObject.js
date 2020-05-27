const person = Object.create({
    calculateAge () {
        return new Date().getFullYear() - this.birthYear
    }
}, {
    name: {
        value: 'Andranik',
        enumerable: true,
        writable: true,
        configurable: true
    },

    birthYear: {
        value: 1994,
        enumerable: false, // default false
        writable:false, // default false
        configurable: false // default false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(v) {
            document.body.style.background = 'pink'
            console.log(this.name, 'Set Age', v)
        }
    }
})

for(let  key in person){
    if (person.hasOwnProperty(key)){

        console.log("Key", key, person[key])
    }
}
