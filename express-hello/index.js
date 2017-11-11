const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res)=>{
  res.send('hello wold')
})

app.post('/documents', (req, res)=>{
  console.log(req.body)
  res.sendStatus(200)
})

app.get('*', (req, res)=>{
  res.send('Not found')
})

app.listen(3000)