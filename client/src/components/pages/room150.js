import React, { Component } from 'react'
import Scenes from '../frontDoor/rooms.json';
import SarahAudio from "../../assets/Sarah_Audio.wav"
import Sound from 'react-sound';




class Room150 extends Component {
    state= {
        rooms: [],
        room: "",
        photo: "",
        instructions: "",
        optionsResults: []
    };

    componentDidMount(){
        console.log(Scenes);
        this.loadRooms();
    };

    loadRooms = () => {
        this.setState({rooms: Scenes.rooms, room: "", photo: "", instructions: "", optionsResults: []});
    };
    render() {
        return (
            <>
             <Sound
                url={SarahAudio}
                playStatus={Sound.status.PLAYING}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
      />
            {this.state.rooms.map(room => (
                <div>
                    <p>{room.instructions}</p>
                    <p>{room.room}</p>
                    </div>
                ))}
            </>
        )
    };
};




export default Room150;