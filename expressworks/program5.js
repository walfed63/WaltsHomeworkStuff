var express = require('express')
var app = express()

const myport = process.argv[2]
const mydir = process.argv[3]

app.use(require('stylus').middleware(mydir))

app.use(express.static(mydir))


app.listen(myport)

