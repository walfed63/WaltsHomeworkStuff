import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class Item extends Component {
  render() {
    return (
      <li>{this.props.itemValue}</li>
    )
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {dog: 'Pluto', time: new Date().toLocaleTimeString()}
    this.myCustomAttribute = '123' 
    setInterval(function (){
      // this.state.time = new Date().toLocaleTimeString()
      this.setState({time: new Date().toLocaleTimeString()}, ()=>{
        console.log('state updated')
      })
    }.bind(this), 1000)
  }
  render() {

    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    // const arrayOfItemElements = []
    // let i = 0
    // for (let value of list) { //we can use map, for in, forEach, for, while
    //   arrayOfItemElements.push(
    //     <Item key={i} itemValue={value}/>
    //   )
    //   i++
    // }
    // console.log(arrayOfItemElements)
    return (
      <div className="App">
        <div className="App-intro" style={{color: 'red'}}>
          Hello World<br/>
          Time: {this.state.time}<br/>
          Dog: {this.state.dog}<br/>
          myCustomAttribute: {this.myCustomAttribute}<br/>
          <ol>
            {list.map((value, key)=><Item 
              key={key} 
              itemValue={value}/>)}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;