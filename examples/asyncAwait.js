const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch Todos started ...')
//     return delay(1000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }
//
// fetchTodos()
//     .then(data => {
//         console.log('Data:', data)
//     })
//     .catch(err => console.error(err))


async function fetchAsyncTodos() {

    console.log('Fetch Todos started ...')
    try{
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data', data)
    }catch (e) {
        console.error(e)
    }finally {
        console.log('finally')
    }

}

fetchAsyncTodos()
