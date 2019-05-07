import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Startpage from "./components/pages/Startpage";
import Hallway from './components/Hallway'
import Room150 from './components/pages/room150'
import Room120 from './components/pages/room120'
import Gardenroom from './components/pages/gardenroom'

const App = () => 

  
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Startpage} />
          <Route exact path="/Hallway" component={Hallway} />
          <Route exact path="/Room150" component={Room150} />
          <Route exact path="/Room120" component={Room120} />
          <Route exact path="/Gardenroom" component={Gardenroom} />
          </Switch>
        
      </div>
    </Router>
  


export default App;