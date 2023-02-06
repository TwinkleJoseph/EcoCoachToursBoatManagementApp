import "../styles/App.css";
import Pool from "./Pool"

import React, { Component } from "react";



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