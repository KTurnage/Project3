import React, { Component } from 'react'
import Scenes from '../frontDoor/rooms.json';




class Room120 extends Component {
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
                    <p>{room.room}</p>
                    <p>{room.instructions}</p>
                    <img src={room.photo}/>
                    
                    </div>
                ))}
            </>
        )
    };
};




export default Room120;