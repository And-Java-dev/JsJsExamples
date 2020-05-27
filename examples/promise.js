console.log('Request data...')

const p = new Promise(function (resolve, reject) {
    console.log('Preparing data')
    setTimeout(() => {
        const beckEndData = {
            server: 'aws',
            port: 8080,
            status: 'working'
        }
        resolve(beckEndData)
    }, 200)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modifaid = true
            resolve(data)
            // reject(data)  /*from error*/
        }, 200)
    })
})
    .then(clientData => {
        clientData.fromPromise = true
        return clientData
    })
    .then(data => {
        console.log('Modified...', data)
    })
    .catch(err => console.error('Error', err))
    .finally(() => console.log('Finally'))


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(),ms)
    })
};

sleep(3000).then(() =>console.log('after 3 sec'))
sleep(10000).then(() =>console.log('after 10 sec'))
sleep(5000).then(() =>console.log('after 5 sec'))

Promise.all([sleep(2000 ), sleep(7000)])
    .then(() => console.log('All Promises'))

Promise.race([sleep(2000), sleep(7000)])
    .then(() => console.log('Race Promises'))
