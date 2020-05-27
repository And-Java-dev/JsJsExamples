const person = new Object({
    name: 'John',
    age: 22,
    greet: function () {
        console.log('Greet!')
    }
});

Object.prototype.sayHallo = function () {
    console.log('hello world!!!')
};

const lena = Object.create(person);

const str = 'i am a string';

const s = String('i am a string 2');
