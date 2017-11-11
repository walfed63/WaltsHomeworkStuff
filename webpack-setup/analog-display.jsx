const React = require('react')

const AnalogDisplay = function(props) {
  let date = new Date(props.time)

  let grabSeconds = (date.getSeconds()/60)*360 - 90 
  let grabMinutes = ((date.getMinutes()/60)*360 - 90 )
  let grabHours = ((date.getHours()/12)*360 - 90 )

  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black',
    //backgroundColor: 'green'
  }
  let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + grabSeconds.toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  }
  let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid blue',
    width: '40%',
    height: 3,
    transform: 'rotate(' + grabMinutes.toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  }
  let hourHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid yellow',
    width: '20%',
    height: 7,
    transform: 'rotate(' + (grabHours).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'yellow'
  }
  return <div>
    <div style={dialStyle}>
      <div style={secondHandStyle}/>
      <div style={minuteHandStyle}/>
      <div style={hourHandStyle}/>
    </div>
  </div>
}

module.exports = AnalogDisplay