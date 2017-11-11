var http = require('http')
var buflist = require('bl')
const myurl = process.argv[2]

//console.log(myurl)
let str = ''
let strcount = 0

http.get(myurl, (response)=> {
    response.pipe(buflist(function (error, data) {
        if (error) {
            return console.error(error)
        }
    
    data=data.toString()
    console.log(data.length)
    console.log(data)
    response.on('error', console.error)  
}))
})