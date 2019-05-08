import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Typist from "react-typist";
import Buttons from '../Buttons';
import {Link} from "react-router-dom";
import "./hallway_style.css";
import Sound from 'react-sound';
import rooms from '../frontDoor/rooms.json'



class Hallway extends React.Component {
  constructor(props) {
    super(props) // initializes `this`

    this.state = {
      textComplete: true,
      title: 'You are in the hallway',
      description: "You look around...there is a piano in the corner, and several doors on either side of the hallway. Behind each door is an opportunity to gain some smarts. Which room would you like to go into?",
      answers: [],
      batteryPower: 100,
      smarts: 0,
      room: 'hallway',
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleRoomChange = this.handleRoomChange.bind(this)
  }

  handleRoomChange(roomToChangeTo) {
    const newRoom = rooms.rooms.filter(room => room.room === roomToChangeTo)
    this.setState({
      room: roomToChangeTo,
      title: '',
      description: newRoom[0].instructions,
      answers: [], // clear out answers
    })
  }

  handleTextChange(key, newText) {
    this.setState({[key]: newText})
  }

  onTextComplete = () => {
    this.setState({
      textComplete: true
    });
  };

    render() {
      return (
        <div className='body'>
        <Sound
        // url={SarahAudio}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
          
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
              </Col>
            </Row>
            <Row>
              <Col size="md-12" className='typist'>
                <h2>{this.state.title}</h2>
                <br></br>
                <br></br>
                { this.state.description }
                <br></br>
                { this.state.answers && this.state.answers.map(answer => {
                  return (
                    <button onClick={() => this.props.handleAnswer(answer.isCorrect)}>{answer.value}</button>
                  )
                })
                }
              </Col>
            </Row>
            <Row>
            <Col size="md-12">
            {this.state.textComplete && 
              <Buttons
                room={this.state.room}
                handleTextChange={this.handleTextChange}
                handleRoomChange={this.handleRoomChange}
                handleAnswer={this.props.handleAnswer}
              />
             }        
            </Col>
            </Row>
          </Container>
        </div>
      );
    }
}



export default Hallway;
