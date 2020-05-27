const requestUrl = 'https://jsonplaceholder.typicode.com/albums'

function sendGetRequest( url) {
    return fetch(url)
        .then(response => {
            if (response.ok){
                return response.json()
            }
            return response.json().then( err => {
                const e = new Error('Error', err)
                e.data = err
                throw e
            })
        })
}

const body = {
    name: 'And',
    age: 26
}

sendGetRequest( requestUrl)
    .then(data => console.log(data))
    .catch(err => console.error(err))

function sendPostRequest(method, url, body = null) {
    const headers = {'Content-Type': 'application/json'}
    return fetch(url, {
        headers: headers,
        body: JSON.stringify(body),
        method: method
    })
        .then(response => {
            return response.json()
        })
}

sendPostRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.error(err))
