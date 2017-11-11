var express = require('express')
var app = express()
const myport = process.argv[2]
const myindex = process.argv[3]

//app.use(express.static('public'))

app.set('view engine', 'pug')

app.set('views' ,myindex)

app.get('/home', function(request, response) {
    response.render('index', {date: new Date().toDateString()
    })
})
app.listen(myport)