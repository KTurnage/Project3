import React, { Component} from 'react';
import ReusableButton from './';
import Room from './';

class FrontDoor extends Component {
    onClick() {
        console.log("Button was clicked");
      }
    
      render() {
        return(
          /** First Customized Component **/
          <Room
            cardColClass={"col-sm-3"}
            cardBorder={"card border-default mx-1"}
            cardTitle={"First Card"}
            cardText={"Sample Card 1" }
        > 
        <ReusableButton className={"btn btn-primary"} onClick={this.onClick} >
          Button Person
        </ReusableButton>
        <ReusableButton className={"btn btn-primary"} onClick={this.onClick} >
          Button Activity1
        </ReusableButton>
        <ReusableButton className={"btn btn-primary"} onClick={this.onClick} >
          Button Activity2
        </ReusableButton>
        <ReusableButton className={"btn btn-primary"} onClick={this.onClick} >
          Button Heroku
        </ReusableButton>
        <ReusableButton className={"btn btn-primary"} onClick={this.onClick} >
          Button Return to Hallway
        </ReusableButton>
        </Room>



    // render() {
    //     return (
    //         <div
    //         style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    //         >
    //         testing
    //     </div>
    )
}
}

export default FrontDoor;