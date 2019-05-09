import React from 'react';
import {Link} from "react-router-dom";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import API from '../../utils/API'



class NameForm extends React.Component {
  state = {
    name: "Please Enter your name to begin!"
  };

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
   
  // }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  handleSubmit = event => {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if(this.state.name){
    API.saveUser({
      name: this.state.name
    })
    .then(res => console.log(this.state.name))
    .catch(err => console.log(err));
  }
  };

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <label>
      //     Name:
      //     <input type="text" value={this.state.value} onChange={this.handleChange} />
      //   </label>
      //   <input type="submit" value="Submit" />
      // </form>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Please Enter your name to begin!"
          aria-label="Please Enter your name to begin!"
          aria-describedby="basic-addon2"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />
        <InputGroup.Append>
        {/* <Link to='/Hallway' onClick={this.handleSubmit}> */}
          <Button variant="outline-secondary" onClick={this.handleSubmit}>
        <Link to='/Hallway' >

          Enter Name          
          </Link>
          </Button>
          {/* <Link to='/Hallway' onClick={this.HandleSubmit}><Button>START GAME</Button></Link> */}
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default NameForm;