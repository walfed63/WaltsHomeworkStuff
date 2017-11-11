console.log('hello from jsx')
const React = require('react')
const ReactDOM = require('react-dom')
const DataEntry= require('./dataentry.jsx')
 

ReactDOM.render(
 // <h1>test for JSX and react preset</h1>,
  <DataEntry></DataEntry>,
  document.getElementById('content')
)