var fs = require('fs')
var express = require('express')
var app = express()
const myport = process.argv[2]


app.get('/books',(request, response)=>{
    var myfile = process.argv[3]
    fs.readFile(myfile,(error,data)=>{
        if (error) return response.sendStatus(500)
        try{
            mybooks = JSON.parse(data)
        } catch(error){
        response.sendStatus(500)
        }
    response.json(mybooks)
    })
})
app.listen(myport)
