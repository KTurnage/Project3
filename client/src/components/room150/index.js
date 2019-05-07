import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Buttons from '../../components/Buttons'

function Room150() {
  return (
    <div>
      
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
          
            
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

export default Room150;