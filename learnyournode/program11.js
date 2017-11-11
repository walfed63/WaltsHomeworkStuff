var fs = require('fs')
var http = require('http')
var mapit = require('through2-map')
const myport = process.argv[2]
const myfile = process.argv[3]

var myserver = http.createServer(function (request, response){
   if (request.method == 'POST') {
     request.pipe(mapit(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(response)
   }
   if (request.method !== 'POST') {
    return response.end('send me a POST\n')
  }
    
})
myserver.listen(Number(myport))