import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";

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
                <p>A new TV Series App</p>
            </div>
        )
    }

}

export default App