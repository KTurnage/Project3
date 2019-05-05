import React, { Component } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Room from './Room.json';


class Game extends Component {
    state = {
        room: Room
    };

    

    componentDidMount() {
       this.frontDoor();
    }


    option1 = () => {
       alert("yoooooooo");
    }

    frontDoor = () => {
        


    }


    render() {
        return (
            
            
            <div>
                <Card className="text-center">
                    <Card.Header>{this.title}Test</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.title}Test</Card.Title>
                        <Card.Text>
                            {this.state.room.room120.instructions}
                        </Card.Text>
                        <ButtonToolbar>
                            <Button variant="primary" size="lg" onClick={() => this.option1()}>
                                {this.state.room.room120.options[0]}
                            </Button>
                            <Button variant="secondary" size="lg" onClick={this.whateverFunction}>
                                {this.state.room.room120.options[1]}
                            </Button>
                            <Button variant="primary" size="lg" onClick={this.whateverFunction}>
                                {this.state.room.room120.options[2]}
                            </Button>
                            <Button variant="primary" size="lg" onClick={this.whateverFunction}>
                                {this.state.room.room120.options[3]}
                            </Button>
                            <Button variant="primary" size="lg" onClick={this.whateverFunction}>
                                {this.state.room.room120.options[4]}
                            </Button>
                        </ButtonToolbar>
                    </Card.Body>
                </Card>
            

            </div>
        )
    }
}

export default Game;