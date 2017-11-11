
let promise = new Promise((resolve,reject)=> {

    setTimeout(function() {
        reject(new Error('REJECTED!'))
    }, 300)
})
function onReject() {
     console.log(error.message)
}
promise.then(null,onReject)