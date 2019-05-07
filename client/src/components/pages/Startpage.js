import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Nameform from "../Nameform";
import Typist from "react-typist";
import "./startpage_style.css";

const onTextComplete = () => {
  return (
    <>
      <Nameform className="form">
      </Nameform>
    </>
  )


}

function Startpage() {
  return (
    <div className='body'>


      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div>
              <Typist className="typist" onTypingDone={this.onTextComplete()}>
                <h2>Welcome to Bootcamp Adventure!</h2>
                <br></br>
                {/* You are enrolled in a super intense coding boot camp. You have survived 11 weeks of class. It all comes down to final project week. Your mind is swimming in curly braces and semi colons. You arrive at 1901 E Asbury Ave. You don’t quite have all the knowledge required to complete your project. There are several rooms inside with multiple resources available to increase your smarts. Every event that you choose to participate in will drain a bit of your battery.

                Each event will drain 10% of your battery life. An incorrect answer will result in an additional 5% off of battery life. Each successful completion of an even will increase your smarts by 10 smarts.
                The odds of your successful Heroku deployment is equal to your smarts.

                Your goal is to gain enough smarts to successfully deploy to Heroku before your computer runs out of battery life. */}

                Testing...
            </Typist>
            </div>
          </Col>
        </Row>
        <Row className="row-center">
          <Col size="md-12">
            {/* <Nameform className="form">
            </Nameform> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Startpage;