var express = require('express')
var app = express()
const myport = process.argv[2]

app.get('/search',(request, response)=>{
    var myquery = request.query
    
    response.send(myquery)

})
app.listen(myport)
//var id = req.params.id