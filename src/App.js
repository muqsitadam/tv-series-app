import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import TrendingMovies from "./Components/HomeMovies/TrendingMovies";
import TopRatedMovies from "./Components/HomeMovies/TopRatedMovies";

class App extends Component{
    constructor(){
        super()
        this.state = {
            input: ""
        }
    }

    render(){
        return(
            <div className="w-full">
                <Navbar/>
                <SearchBar/>
                <p>A new TV Series App, Check out our latest series</p>
                <TrendingMovies/>
                <TopRatedMovies/>
            </div>
        )
    }

}

export default App