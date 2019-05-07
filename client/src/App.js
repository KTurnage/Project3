import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Startpage from "./components/pages/Startpage";
import Hallway from './components/Hallway'
import Room120 from './components/pages/room120'
import Room150 from './components/pages/room150'
import BatteryLife from './components/bars/batteryLife'
import Smarts from './components/bars/smarts'


function App() {

  return (
    <Router>
      <>
      <BatteryLife batteryLife = {100}/><br></br>
      
      <Smarts smarts = {1}/>

        <div>

          <Route exact path="/" component={Startpage} />
          <Route exact path="/Hallway" component={Hallway} />
          <Route exact path="/Room120" component={Room120} />
          <Route exact path="/Room150" component={Room150} />


        </div>
      </>
    </Router>

  );
}

export default App;