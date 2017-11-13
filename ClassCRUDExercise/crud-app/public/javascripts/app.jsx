console.log('hello from jsx')
const React = require('react')
const ReactDOM = require('react-dom')


const DataEntry= require('./dataentry.jsx')
 

ReactDOM.render(
  <DataEntry messages={window.__myDataEntry}></DataEntry>,
  document.getElementById('content')
)