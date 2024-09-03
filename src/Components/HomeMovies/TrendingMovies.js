import React, { useState, useEffect } from "react";

function TrendingMovies() {
  const [shows, setShows] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjE3NDljNDBmNWYxYzI0NDI4MTU2NmU5OWI0YzU1YiIsIm5iZiI6MTcyNTI4MDc4Ni4wMDc3ODQsInN1YiI6IjYzMWUwMGUzNjdkY2M5MDA4MjgyMGYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MoSNIltgtnYktfrSeW88s8911njSygMSr9AHUV_OLAI'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular', options)
      .then((response) => response.json())
      .then((data) => setShows(data.results))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <p className="mt-4 text-2xl text-center font-mono italic font-bold">TRENDING MOVIES</p>
      <hr/>
      <ul className="flex flex-row flex-grow flex-wrap justify-center">
        {shows.map((show) => {
          const imageUrl = `https://image.tmdb.org/t/p/w500${show.poster_path}`

          if (show.overview.length > 100) {
            show.overview =  show.overview.substring(0, 100) + " ...Read more";
          } else {
            show.overview = show.overview
          }

          return(
          <div key={show.id} className="m-2 w-60 border-2 border-bluegray-300 rounded-xl">
           {imageUrl && (
              <img
              src={imageUrl}
              alt={show.title}
              className="w-full rounded-t-xl mb-1" 
             />
           )}
           <p className="px-1 my-1"><span className="italic font-medium font-lg"> Title:</span> {show.title}</p>
           <p className="px-1 my-1"><span className="italic font-medium font-lg"> Overview:</span> {show.overview}</p>
           <p className="px-1 my-1"><span className="italic font-medium font-lg"> Release Date:</span> {show.release_date}</p>
          </div>
          )
        })}
      </ul>
    </div>
  );
}

export default TrendingMovies;
