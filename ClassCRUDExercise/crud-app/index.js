const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const errorhandler = require('errorhandler')
const path = require('path')
const mongodb= require('mongodb')
const validator = require ('express-validator')

const React = require('react')
//const axios = require('axios')

const url = 'mongodb://localhost:27017/nwm'


app.set('view engine', 'hbs')

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.json())
app.use(morgan('dev'))

require("babel-register")


const DataEntry = require('./public/javascripts/dataentry.jsx')
const DataEntryFactory = React.createFactory(DataEntry)
const { renderToString } = require('react-dom/server')
//Connect to Mongo
mongodb.MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1)


// Get Messages from Mongo client

  app.get('/', (request, response, next) => {
    db.collection('messages').find({}, {sort: {_id: -1}})
      .toArray((error, messages) => {
        if (error) return next(error)
        console.log( renderToString(DataEntryFactory({messages: messages})))
      response.render('index', {
        data: JSON.stringify(messages),
        myHTML: renderToString(DataEntryFactory({messages: messages})) 
    })
  })
  })
  app.get('/messages', (request, response, next) => {
    setTimeout(()=> {
      db.collection('messages')
        .find({}, {sort: {_id: -1}})
        .toArray((error, messages) => {
          if (error) return next(error)
          response.send(messages)
      })
    }
    , 4000)
  })

// POST messages to Mongo DB client
  app.post('/messages', (request, response, next) => {
    let newMessages = request.body
    db.collection('messages').insert(newMessages, (error, results) => {
      if (error) return next(error)
      response.send(results)
      console.log('Post Suceeded')
    })
  })
//PUT Messages
  app.put('/messages/:id', (request, response, next) => {
   db.collection('messages').update({_id: mongodb.ObjectID( request.params.id)}, {$set: request.body}, (error, results) => {
    if (error) return next(error)
    response.send(results)
    console.log('Put Succeeded')
   })
  })

// Delete Messages
  app.delete('/messages/:id', (request, response, next) => {
   db.collection('messages').remove({_id:mongodb.ObjectID( request.params.id)}, (error, results) => {
    if (error) return next(error)
    response.send(results)
   })
  })
 
app.use(errorhandler())

app.listen(app.get('port'), ()=>{
  console.log(`server is running on port ${app.get('port')}`)
})

//curl -H 'Content-Type: application/json' -X PUT -d '{"text": "hello", "name": "John"}'  "http://localhost:3000/messages/0"
})
