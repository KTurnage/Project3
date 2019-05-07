import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Buttons from '../Buttons'

function Hallway() {
  return (
    <div>
      
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>You are in the Hallway...</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              You look around...there is a piano in the corner, and several doors on either side of
              the hallway. Behind each door is an opportunity to gain some smarts. Which room would you 
              like to go into?
            </p>
            
          </Col>
        </Row>
        <Row>
        <Col size="md-12">
    <Buttons></Buttons>        
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hallway;