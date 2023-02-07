import "../styles/App.css";
import Pool from "./Pool"

import React, { Component } from "react";


/**
 * This application is built using ReactJs.
 * Boats will live in their respective swimlanes.
 * Swimlanes are linked to a Pool
 * App will have only one Pool.
 */
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="Header">Echo Tours Boat Tracker</div>
        <Pool />
      </div>
    );
  }
}

export default App;