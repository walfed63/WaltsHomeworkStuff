const React = require('react')
const axios = require('axios')
//const Table = require('./table.jsx')
const Button= require('./button.jsx')


class DataEntry extends React.Component {
      constructor(props) {
      super(props)
      this.state = {
        messages: props.messages || [],
        name: 'Walt', 
        text: ''
      }
     // this.state = {messages: []}
      this.handleUsernameChange = this.handleUsernameChange.bind(this)
      this.handleTextChange = this.handleTextChange.bind(this)
      this.saveMessage = this.saveMessage.bind(this)
      this.deleteMessage = this.deleteMessage.bind(this)
    }
     componentDidMount() {
      fetch('/messages')
      .then(response=>response.json())
      .then(json=>this.setState({messages: json})) 
//        console.log(json)

        }
      deleteMessage(id, index) {
        fetch(`/messages/${id}`, { 
          method: 'DELETE'
        })
          .then(response=>response.json())
          .then(json=>{
            console.log(json)
            // Keep an eye on this and maybe clone array. Beware of refences
            const oldArray = this.state.messages
            oldArray.splice(index, 1)        
            this.setState({messages: oldArray})
          })
      }
      saveMessage() {
        // console.log(this.state)
        fetch(`/messages`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },      
          body: JSON.stringify({
            name: this.state.name,
            text: this.state.text
          })
        })
          .then(response=>response.json())
          .then(json=>json.ops[0])
          .then(newMessage=>{
            console.log(newMessage)
            // Keep an eye on this and maybe clone array. Beware of refences
            const oldArray = this.state.messages
            oldArray.unshift(newMessage)
            // oldArray.splice(index, 1)        
            this.setState({messages: oldArray}, ()=>{
              this.setState({messageText: ''})
            })
          })    
      }
      handleUsernameChange(event) {
        this.setState({name: event.target.value})
      }
      handleTextChange(event) {
        this.setState({text: event.target.value})
      }
   
      
    render() {
      return (
        <div className="row-fluid margin-left-large">
        <div className="large-4 columns md-text-field with-floating-label" >
            <input type="text" placeholder="Northwestern Mutual Message Board" />
            <div onKeyUp={((event)=>{
          if (event.keyCode === 13 || event.key === 'Enter') return this.saveMessage()
        }).bind(this)}>
        </div>
        </div>
        
        <form>
        <div className="row">
            <div className="large-4 columns md-text-field">
                <input type="text" placeholder="Update Name" value={this.state.name} onChange={this.handleUsernameChange} required/>
            </div>
            <div className="large-4 columns md-text-field with-floating-label">
              <input type="text"  placeholder="Update Message Text" value={this.state.text} onChange={this.handleTextChange} required/>
            </div>
            <div className="large-4 columns md-text-field with-floating-label">
              <input type="text"  placeholder="Enter ID to Delete" value={this.state.id} onChange={this.deleteMessage} required/>
            </div>
           </div>        
         </form>
    <table>
    <thead>
     <tr>
       <th width="500">Message</th>
       <th width="100">Name</th>
       <th width="400">ID</th>
     </tr>
    </thead>
    <tbody> 
    {(this.state.messages.length==0)?<tr><td><h2>Loading...</h2></td></tr>:false}     
    {this.state.messages.map((message, index)=>(
     <tr key={index}>
       <td>{message.text}</td>
       <td>{message.name}</td>
       <td>{message._id.toString()}</td>
     </tr>   
      ))}     
   </tbody>
   </table>
       <div className="btn-group btn-cta small">
           <button className="active margin-left-medium" >Get</button>
           <button className="active margin-left-medium"  onClick={this.saveMessage}>Put(edit) </button>
           <button className="active margin-left-medium"  onClick={this.saveMessage}>Post</button>
           <button className="active margin-left-medium"  onClick={()=>{                       
                                  this.deleteMessage(message._id, index)
                                  }}>Delete </button>        
       </div>
     </div>
      )
    }
  }
  module.exports = DataEntry