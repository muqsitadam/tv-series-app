import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import TrendingMovies from "./Components/HomeMovies/TrendingMovies";
import TopRatedMovies from "./Components/HomeMovies/TopRatedMovies";
import Drama from "./Components/HomeMovies/NavPages/Drama";
import Action from "./Components/HomeMovies/NavPages/Action";
import Crime from "./Components/HomeMovies/NavPages/Crime";
import SearchResult from "./Components/SearchResult/SearchResult";

class App extends Component{
    constructor(){
        super()
        this.state = {
            input: "",
            submitInput: '',
            searchedResults: [],
            isSearchSubmitted: false
        }
    }

    handleInput = (event)=>{
        this.setState({
            input: event.target.value,
        })
    }

    handleSubmit = () =>{
        const searchedTerm = this.state.input
        this.setState({
            submitInput: searchedTerm,
            isSearchSubmitted: true
        },
        ()=>{
            const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjE3NDljNDBmNWYxYzI0NDI4MTU2NmU5OWI0YzU1YiIsIm5iZiI6MTcyNTI4MDc4Ni4wMDc3ODQsInN1YiI6IjYzMWUwMGUzNjdkY2M5MDA4MjgyMGYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MoSNIltgtnYktfrSeW88s8911njSygMSr9AHUV_OLAI",
            },
            };
    
            fetch(`https://api.themoviedb.org/3/search/movie?query=${searchedTerm}`,options)
            .then((response) => response.json())
            .then((data) => {
                if(!data.results.length==0){
                    this.setState({searchedResults: data.results})
                }else{
                    console.warn("No results found")
                    // this.setState({searchedResults: []})
                }
            })                   
            .catch((error) => console.error("Error fetching data: ", error));
            console.log(this.state.searchedResults)
        })
    }

    render(){
        // const [searchedResults, isSearchSubmitted] = this.state
        return(
            <div className="w-full">
                <Navbar/>
                <SearchBar 
                    handleInput={this.handleInput} 
                    handleSubmit={this.handleSubmit} 
                />
                {this.state.isSearchSubmitted?
                <SearchResult results={this.state.searchedResults}/>
                :
                <Routes>
                    <Route path="/" element={
                        <>
                            <TrendingMovies/>
                            <TopRatedMovies/>
                        </>
                    }/>
                    <Route path="/crime" element={<Crime/>}/>
                    <Route path="/action" element={<Action/>}/>
                    <Route path="/drama" element={<Drama/>}/>
                </Routes>
                }
            </div>
        )
    }

}

export default App