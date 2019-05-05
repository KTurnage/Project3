import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Startpage from "./components/pages/Startpage";
import Hallway from './components/Hallway'

function App() {
  return (
    <Router>
      <div>
        
          <Route exact path="/" component={Startpage} />
          <Route exact path="/Hallway" component={Hallway} />

        
      </div>
    </Router>
  );
}

export default App;