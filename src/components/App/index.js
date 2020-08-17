import React, { Component } from "react";
import Intro from "../Intro";
import "./App.css";
import "whatwg-fetch";

class App extends Component {
  state = {
    series: [],
  };

  // componentDidMount() {
  //   const series = ["Vikings", "The Witcher"];

  //   setTimeout(() => {
  //     this.setState({ series });
  //     //If they have the same name like that series...
  //     //You can use just one of them.
  //   }, 2000);
  // }

  componentDidMount() {
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then((response) => response.json())
      .then((json) => this.setState({ series: json }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>TV Series List</p>
        </header>
        <Intro message="Here you can find all of your most watched series" />
        The number of series here is : {this.state.series.length};
      </div>
    );
  }
}

export default App;
