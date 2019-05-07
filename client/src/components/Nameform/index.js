import React from 'react';
import {Link} from "react-router-dom";
import { InputGroup, FormControl, Button } from 'react-bootstrap';



class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <label>
      //     Name:
      //     <input type="text" value={this.state.value} onChange={this.handleChange} />
      //   </label>
      //   <input type="submit" value="Submit" />
      // </form>

      <InputGroup className="mb-3" onSubmit={this.handleSubmit}>
        <FormControl
          placeholder="Please Enter your name to begin!"
          aria-label="Please Enter your name to begin!"
          aria-describedby="basic-addon2"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <InputGroup.Append>
          <Link to='/Hallway'>
          <Button variant="outline-secondary"
          >Start Game</Button>
          </Link>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default NameForm;