function* strGenerator() {
    yield 'H'
    yield 'i'
    yield ' '
    yield 'm'
    yield 'y'
}


const s = strGenerator()


function* numberGer(n = 7){
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numberGer(2);


const iterator = {
    /*[Symbol.iterator]*/gen(n = 10){
        let i = 0;
        return{
            next(){
                if (i < n){
                    return {value : ++i, done: false}
                }
                    return  {value: void 0, done: true}
            }
        }
    }
}


function* iter(n = 12){
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for( let k of iter()){
    console.log(k)
}
