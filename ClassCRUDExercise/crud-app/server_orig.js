const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const errorhandler = require('errorhandler')
const path = require('path')

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.json())
app.use(morgan('dev'))

const messages = [{
  id : 0,
  text: 'what a wonderful and cool and sunny day',
  name: 'dark lord'
}]

app.get('/', (req, res) => {
  res.send('all is good but please use /messages API routes')
})

app.get('/messages', (req, res) => {
  res.send(messages)
})


app.post('/messages', (req, res) => {
 const {text, name} = req.body
 const newMessage = {text: text, name: name.trim()}
 messages.push(newMessage)
 newMessage.id = messages.length -1
 res.status(200).send(newMessage)
})

app.put('/messages/:id', (req, res, next) => {
  console.log(req.params.id)
  console.log(messages.length-1)

  if (req.params.id > messages.length-1) return next(new Error('The ID not found'))
  const {text, name} = req.body
  const newMessage = {text: text, name: name.trim()}
  messages[req.params.id] = newMessage
  res.send(messages[req.params.id])
})

/*app.patch('/messages/:id', (req, res, next) => {
  if (req.params.id > messages.length-1) return next(new Error('The ID not found'))
  const {text, name} = req.body
  const newMessage = {text: text, name: name.trim()}
  messages[req.params.id] = Object.assign(messages[req.params.id], newMessage)
  res.send(messages[req.params.id])
})*/

app.delete('/messages/:id', (req, res, next) => {
  if (req.params.id > messages.length-1) return next(new Error('The ID not found'))
  messages.splice(req.params.id, 1)
  res.sendStatus(204)
})

app.use(errorhandler())

app.listen(app.get('port'), ()=>{
  console.log(`server is running on port ${app.get('port')}`)
})

//curl -H 'Content-Type: application/json' -X PUT -d '{"text": "hello", "name": "John"}'  "http://localhost:3000/messages/0"

///--dbpath=/Users/REI20/data/db