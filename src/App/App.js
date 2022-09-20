import React, { Component } from "react";
import SearchInput from "../Components/SearchBar/SearchInput";
import Navigation from "../Components/Navigation/Navigation";
import "./App.css";

class App extends Component {
  //Learning state all again.. lol
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

onInputChange = (event) => {
  console.log(event.target.value)
}



onSearchButton = () => {
  const response = fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=621749c40f5f1c244281566e99b4c55b"
  ).then((response) => response.json());
  console.log(response)
}

  render() {
    return (
      <div className="App">
        <Navigation/>
        <SearchInput 
        onInputChange={this.onInputChange} 
        onSearchButton={this.onSearchButton} />
      </div>
    );
  }
}

export default App;
