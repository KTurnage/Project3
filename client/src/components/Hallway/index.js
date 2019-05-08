import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Typist from "react-typist";
import Buttons from '../Buttons';
import {Link} from "react-router-dom";
import "./hallway_style.css";
import Sound from 'react-sound';
import SarahAudio from "../../assets/Sarah_Audio.wav"
import rooms from '../frontDoor/rooms.json';




class Hallway extends React.Component {


    state = {
        textComplete: false
      }

      componentDidMount() {
   
        
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
        url={SarahAudio}
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
              <Col size="md-12">
                <Typist className='typist' onTypingDone={this.onTextComplete}>
                <h2>You are in the Hallway...</h2>
                <br></br>
                <br></br>
                  You look around...there is a piano in the corner, and several doors on either side of
                  the hallway. Behind each door is an opportunity to gain some smarts. Which room would you 
                  like to go into?
                    
                </Typist>
                
                
              </Col>
            </Row>
            <Row>
            <Col size="md-12">
            {this.state.textComplete ? <Buttons
            index={0}
            ></Buttons> : null}        
            </Col>
            </Row>
          </Container>
        </div>
      );
    }
}



export default Hallway;
