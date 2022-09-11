import React, { Component } from "react";
import SearchInput from "../Components/SearchBar/SearchInput";
import Navigation from "../Components/Navigation/Navigation";
import "./App.css";

class App extends Component {
  //Learning state all again.. lol
  constructor(){
    super(),
    this.state = {
      input: ''
    }
  }

onInputChange = (event) => {
  console.log
}

  render() {
    return (
      <div className="App">
        <Navigation/>
        <SearchInput/>
      </div>
    );
  }
}

export default App;
