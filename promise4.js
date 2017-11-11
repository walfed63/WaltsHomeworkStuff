let promise = new Promise((resolve,reject)=> { 
   
   resolve('I FIRED')
   reject(new Error('I DID NOT FIRE!'))
})

function onReject(error) {
    console.log(error.messeage)
}
promise.then(console.log,onReject)
       


