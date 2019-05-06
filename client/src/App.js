import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Startpage from "./components/pages/Startpage";
import Hallway from './components/Hallway'
import Room120 from './components/room120'
import Room150 from './components/room150'

function App() {
  
  return (
    <Router>
      <div>
        
          <Route exact path="/" component={Startpage} />
          <Route exact path="/Hallway" component={Hallway} />
          <Route exact path="/Room120" component={Room120} />
          <Route exact path="/Room150" component={Room150} />

        
      </div>
    </Router>
  );
}

export default App;