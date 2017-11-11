const http = require('http')
var express = require('express')
var app = express()
const myport = process.argv[2]
const myindex = process.argv[3]

//app.use(express.static('public'))

app.use(express.static(myindex || path.join(_dirname, 'public')))

app.listen(myport)