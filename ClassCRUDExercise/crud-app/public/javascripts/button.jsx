const React = require('react')

class Button extends React.Component {
    constructor(props) {
        super(props)
    //   this.startTimer = this.startTimer.bind(this)
    }
    // startTimer(event) {
    //   return this.props.startTimer(this.props.time)
    //   console.log('Im Here')
    // }
    render() {
      return <button
        type="button"
        className= "btn-group btn-cta small"
        onClick={this.props.handleClick(this.props.label)}>
        {
        // onClick={()=>{this.props.startTimer(this.props.time)}}>
        }   
      </button>
    }
  }
  module.exports = Button