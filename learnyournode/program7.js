var http = require('http')
const myurl = process.argv[2]

//console.log(myurl)
let str = ''
let strcount = 0

http.get(myurl, (response)=> {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)  
}).on ('error', console.error)



