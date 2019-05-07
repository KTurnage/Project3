import React, { Component } from 'react'
import Scenes from '../frontDoor/rooms.json';




class Gardenroom extends Component {
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




export default Gardenroom;