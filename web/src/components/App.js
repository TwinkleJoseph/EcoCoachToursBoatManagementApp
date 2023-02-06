import "../styles/App.css";
import SwimLane from "./SwimLane"

import React, { Component } from "react";



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="Header">Echo Tours Boat Tracker</div>

        <SwimLane />
      </div>
    );
  }
}

export default App;