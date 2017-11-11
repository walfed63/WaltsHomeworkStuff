var http = require('http')
var express = require('express')
var app = express()
var myport = process.argv[2]


app.get('/home', function(request, response) {
    response.end('Hello World!')
  })


  app.listen(myport)