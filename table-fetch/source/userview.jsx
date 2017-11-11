const ReactDOM = require('react-dom')
const React = require('react')

class UserView extends React.Component {
    render() {
    return <div>
    id: {this.props.data.id}<br/>
    first_name: {this.props.data.first_name}<br/>
    last_name: {this.props.data.last_name}<br/>
    email: {this.props.data.email}<br/>
    gender: {this.props.data.gender}<br/>
    ip_address: {this.props.ip_address}<br/>
    <br/>
   </div>
    }
}

module.exports = UserView