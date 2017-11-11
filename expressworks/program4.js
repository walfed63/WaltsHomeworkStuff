var express = require('express')
var app = express()

const myport = process.argv[2]
const myindex = process.argv[3]

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', (request, response)=>{
    var myform = request.body.str.split('').reverse().join('')
    response.send(myform)
  })


app.listen(myport)