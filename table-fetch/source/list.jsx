const ReactDOM = require('react-dom')
const React = require('react')
const UserView = require('./userview.jsx')

class List extends React.Component {
    constructor (props){
        super(props)
            this.state = {data: [], url: ''}
            this.handleUrlChange = this.handleUrlChange.bind(this)
            this.handleFetch = this.handleFetch.bind(this)

// Long method for handling resposne (could be used for seed value to force starting location)
//            fetch(this.state.url)
 //               .then(response=> {
//                    return response.json()
//                })
//                .then(json=>{
//                    return this.setState({data: json})  
//                })   
//                .catch(error=>{
//                    return console.error
//                })                    

}
//Short hand for handling response
    handleFetch() {
        fetch(this.state.url)
        .then(response=>response.json())
        .then(json=>this.setState({data: json}))
        .catch(error=>console.error(error))
    }
    handleUrlChange(event) {
         this.setState({url: event.target.value})
    }
    render() {
 //       console.log(this.state.data)
        return <div> 
        Please Enter the URL:
        <input type="text"
        onChange={this.handleUrlChange}
           value ={this.state.url}/>

        <button className="button btn-cta"
            onClick={this.handleFetch}>Fetch Data</button>
        <br/>   

        <ul className="list-group">
        {this.state.data.map((user,i)=>
            <UserView data={user} key={i}/>)}
        </ul> 
      </div>
    }
}
module.exports = List
