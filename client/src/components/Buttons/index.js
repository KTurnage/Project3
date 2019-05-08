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
    if (option.gotoRoom) {
      this.props.handleRoomChange(option.gotoRoom)
    } else {
      // first check if we clicked a pass/fail random check
      let pickedOption
      if (option.result && option.result.constructor === Array) {
        const number = Math.floor(Math.random() * option.result.length)
        pickedOption = option.result[number]
        this.props.handleAnswer(number === 0)
      }

      //we'll also always change the text and answers, if they exist
      this.props.handleTextChange('description', pickedOption || option.result)
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
  const currentRoom = rooms.rooms.filter(room => room.room === this.props.room)
  return (
<div className="d-flex flex-column">

  <ButtonGroup size="lg">
    {currentRoom[0].optionsResults.map(option => (
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