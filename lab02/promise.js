function makePromise(a) {
    var p1 = new Promise((resolve, reject) => {
        if (a == 10) {
            var r = {
                status: true,
                message: 'Success'
            }
            resolve(r);
        } else
            reject('Failure-1');
    })
    return p1;
}

makePromise(10).then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
})

makePromise(20).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
})

var api = fetch('https://jsonplaceholder.typicode.com/posts')
api.then((response) => {
    console.log(response);
    //return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})