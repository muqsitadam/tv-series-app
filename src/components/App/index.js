import React, { Component } from "react";
import Intro from "../Intro";
import Series from "../../containers/Series";
import "./App.css";
import "whatwg-fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>TV Series List</p>
        </header>
        <Intro message="Here you can find all of your most watched series" />
        <Series />
      </div>
    );
  }
}

export default App;
