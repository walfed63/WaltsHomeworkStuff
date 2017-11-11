var express = require('express')
var app = express()
const myport = process.argv[2]

var params = require('params')

app.put('/message/:id',(request, response)=>{
    var id = request.params.id
    var myhash = require('crypto')
                .createHash('sha1')
                .update(new Date().toDateString() + id)
                .digest('hex')
    response.send(myhash)

})
app.listen(myport)
//var id = req.params.id

