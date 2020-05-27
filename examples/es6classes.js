class Animal {
    static type = 'Animal'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail

    }

    voice() {
        console.log('i am Animal')
    }

    get(){
        return this;
    }


}

const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})


class Cat extends Animal {
    static  type = 'Cat'

    constructor(options) {
        super(options);
        this._color = options._color
        this._options = options;
    }

    voice() {
        super.voice();
        console.log('myau')
    }

    get(){
        return this;
    }


    get nameInfo() {
        return this.name;
    }

    set nameInfo(value){
        this.name = value
    }

    get ageInfo(){
        return this.age
    }

    set ageInfo(age) {
        this.age = age;
    }

    get color() {
        return this._color;
    }

    get options() {
        return this._options;
    }

    set options(value) {
        this._options = value;
    }

    set color(value) {
        this._color = value;
    }
}

const cat = new Cat({
    name: 'barsik',
    age: 4,
    hasTail: false,
    color: 'Brown'
})



class Component{

    constructor(selector) {
        this.$el = document.querySelector(selector)

    }

    hide(){
        this.$el.style.display= 'none'
    }

    show(){
        this.$el.style.display = 'block'
    }
}


class Box extends Component{

    constructor(options) {
        super(options.selector)

        this.$el.style.background = options.color
        this.$el.style.width = this.$el.style.height = options.size + 'px'
    }
}

const box1 = new Box({
    selector: '.box1',
    color: 'yellow',
    size: 100
})

const box2 = new Box({
    selector: '.box2',
    color: 'green',
    size: 800
})

class Circle extends Box{
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }

}


const c = new Circle({
    selector: '.circle',
    size: 90,
    color: 'red'

})
