import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'



function Buttons (){
  return (
<div className="d-flex flex-column">
  <ButtonGroup size="lg">
    <Button>Room 120</Button>
    <Button>Room 150</Button>
    <Button>Garden Room</Button>
  </ButtonGroup>

</div>
  )}

export default Buttons;