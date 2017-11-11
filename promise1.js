let wait300 = new Promise((resolve,reject)=> {
    setTimeout(resolve, 300)    
}).then (()=> {
    console.log('TIMED OUT!')
})