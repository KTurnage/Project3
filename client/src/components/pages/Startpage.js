import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Nameform from "../Nameform"

function Startpage() {
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
          
            </p>
          
          </Col>
        </Row>
        <Row>
        <Col size="md-12">
        <Nameform></Nameform>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Startpage;