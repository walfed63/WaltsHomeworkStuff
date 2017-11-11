var fs = require('fs')
var http = require('http')
const myport = process.argv[2]
const myfile = process.argv[3]

const startTime = Date.now()

var myserver = http.createServer(function (request, response){
    response.writeHead(200,{'content-type' : 'text/plain'})

    fs.createReadStream(myfile).pipe(response)
   

})
//const endTime =Date.now()
//console.log(endTime - startTime)
myserver.listen(Number(myport))