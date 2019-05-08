import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Startpage from "./components/pages/Startpage";
import Hallway from './components/Hallway'
import Room120 from './components/pages/room120'
import Room150 from './components/pages/room150'
import BatteryLife from './components/bars/batteryLife'
import Smarts from './components/bars/smarts'


class App extends React.Component {
  constructor(props) {
    super(props) // initializes `this`
    this.state = {
      batteryLife: 100,
      smarts: 0,
    }
    this.handleAnswer = this.handleAnswer.bind(this)
  }



  handleAnswer(answer) {
    console.log(answer)

    //TODO: this works but we also need to handle random answer logic
    answer === true
      ? this.setState({ smarts: 5 + this.state.smarts, batteryLife: this.state.batteryLife - 10})
      : this.setState({ batteryLife: this.state.batteryLife - 15 })
  }

  render() {
    return (
      <Router>
        <>
        <BatteryLife batteryLife = {this.state.batteryLife}/><br></br>
        
        <Smarts smarts = {this.state.smarts}/>

          <div>

            { this.state.batteryLife <= 0 } <Route component={LosePage} />

            <Route exact path="/" component={Startpage} />
            <Route
              exact
              path="/Hallway"
              render={(props) => <Hallway handleAnswer={this.handleAnswer} {...props} />}
            />
            <Route exact path="/Room120" component={Room120} />
            <Route exact path="/Room150" component={Room150} />


          </div>
        </>
      </Router>

    );
  }
}

export default App;