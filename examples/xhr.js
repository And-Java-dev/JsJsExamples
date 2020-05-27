const requestUrlAlbums = 'https://jsonplaceholder.typicode.com/albums'

// const xhr = new XMLHttpRequest()
//
// xhr.open('GET', requestUrlAlbums)
//
// xhr.responseType = 'json'
//
// xhr.onload = () => {
//
//     if (xhr.status >= 400) {
//         console.error(xhr.response)
//     } else {
//
//         // console.log(typeof xhr.response);
//         console.log(xhr.response);
//         // console.log(JSON.parse(xhr.response));
//     }
// }
//
// // xhr.onerror = () => {
// //     console.log(xhr.response)
// // }
//
// xhr.send()

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {

                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send()
    })
}


sendRequest('GET', requestUrlAlbums)
    .then(data => console.log(data))
    .catch(err => console.error(err))


function sendPostRequest(method, url, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {

                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

const body = {name: 'And', surname: 'Hvohannisyan'}

sendPostRequest('POST', requestUrlAlbums, body)
    .then(data => console.log(data))
    .catch(err => console.error(err))
