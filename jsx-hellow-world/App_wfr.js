import React, { Component } from 'react';
import logo from './logo.svg';
 import './App.css';

    
    
    class dataTable extends React.Component {
  
        constructor()
        {
           this.state = {
               data:[
                   {id:1, name:"Azat" , balance:1000,   email:"hi@azat.co"},
                   {id:2, name:"walt",  balance:.01,     email:"walfed63@foobar.com"},
                   {id:3, name:"scott", balance:101.12, email:"scotty@foobar.com"},
                   {id:4, name:"Jessica", balance:51.50, email:"Jess32@barfoo.com"},
                   ]
           } 
        }

        render() {
           const rows = this.state.data.map(person =>
           {
               return ( <TableRow key={person.id} data={person} />)
           })
           return (<table className="table table-stripped">
            <thead/>
                <tbody>{rows}</tbody>
            </table>
        )
         

        }
      }

      class TableHead extends React.Component {
          constructor()
          {
          }
        render() {
          return (<thead className="thehead-default">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Balance</th>
            <th>Email</th>
        </tr>
        </thead>    
        )
        }
      }
    class TableRow extends ReactComponemt {
        constructor(){
        }
        render() {
            return (<tr>
                        <td>{this.props.data.id}</td>
                        <td>{this.props.data.name}</td>
                        <td>{this.props.data.balance}</td>
                        <td>{this.pros.data.email}</td>
                    </tr>
            )
        }
    }
 //   import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
      ReactDOM.render(
        //React.createElement(List, {names: data}),
        document.getElementById('content')
      )