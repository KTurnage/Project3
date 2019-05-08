import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import rooms from '../frontDoor/rooms.json';
  

class Buttons extends React.Component {
  constructor(props) {
    super(props) // initializes `this`
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (option) => () => {
    if (this.props.index === 3) { //if we're in the hallway
      console.log('option', option)
      this.props.handleRoomChange(option.gotoRoom)
    } else {
      this.props.handleTextChange('description', option.result)
      this.props.handleTextChange('answers', option.answers)
    }

  }
// createButtons() {
  
//   console.log(options);
  
//   // for (var i = 0; i < options.length; i++) {
//   //   return (
//   //     <Button>{options[i].option}</Button>
//   //   )
//   // }
// }

render () {
  return (
<div className="d-flex flex-column">

  <ButtonGroup size="lg">
    {rooms.rooms[this.props.index].optionsResults.map(option => (
    <Button onClick={this.handleClick(option)}>{option.option}</Button>
    )) }
    {/* <Button></Button>
    <Button>Room 150</Button>
    <Button>Garden Room</Button> */}
    {/* {this.createButtons()} */}
  </ButtonGroup>

</div>
  )}

}

export default Buttons;