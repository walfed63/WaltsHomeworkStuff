const React = require('react')

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', text: ''}

        this.handleClick = this.handleClick.bind(this)
    }
// handleClick(error) {

// }
// render() {
//     return
//     }