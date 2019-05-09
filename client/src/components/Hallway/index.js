import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Typist from "react-typist";
import Buttons from '../Buttons';
import "./hallway_style.css";
import Sound from 'react-sound';
import SarahAudio from "../../assets/Sarah_Audio.wav";
import hauntedhouse from "../../assets/hauntedhouse.wav";
import rooms from '../frontDoor/rooms.json';




class Hallway extends React.Component {
  constructor(props) {
    super(props) // initializes `this`

    this.state = {
      textComplete: false,
      title: 'You are in the hallway',
      description: "You look around...there is a piano in the corner, and several doors on either side of the hallway. Behind each door is an opportunity to gain some smarts. Which room would you like to go into?",
      result: '',
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
      result: '',
      answers: [], // clear out answers
    })
    console.log(this.state)
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

        {/* sounds for each rooom using Ternary  */}
       {this.state.room === 'hallway' ? 
          <Sound
            url={'http://download.publicradio.org/podcast/minnesota/classical/programs/free-downloads/2017/06/15/daily_download_20170615_128.mp3'}
            playStatus={Sound.status.PLAYING}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
            /> : null

       }

        {this.state.room === 'room150' ? 
          <Sound
            url={SarahAudio}
            playStatus={Sound.status.PLAYING}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
            /> : null

       }

        {this.state.room === 'room120' ? 
          <Sound
            url={hauntedhouse}
            playStatus={Sound.status.PLAYING}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
            /> : null

       }


          
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
              </Col>
            </Row>
            <Row>
              <Col size="md-12" className='typist'>
              <Typist key={this.state.room} onTypingDone={this.onTextComplete}>

              
                <h2>{this.state.title}</h2>
                <br></br>
                <br></br>
                  {this.state.description}
                  </Typist>
                <br></br>
                {/* button options for each room */}
                <p className='typist'>{ this.state.result }</p>
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
