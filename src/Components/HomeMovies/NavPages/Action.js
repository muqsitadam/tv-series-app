import React, { useState, useEffect } from "react";

function Action (){
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((data) => {
              const filteredShows = data.filter((show) => show.genres.includes("Action"));
              const reducedShows = filteredShows.slice(0,20)
              setShows(reducedShows)})
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  console.log(shows)

    return(
      <div>
        <p className="mt-4 text-2xl text-center font-mono italic font-bold">Action Series</p>
        <hr/>
        <ul className="flex flex-row flex-grow flex-wrap justify-center">
          {shows.map((series) => {
            const imageUrl = series.image ? series.image.medium : null;

            return(
              <div key={series.id} className="m-2 w-60 border-2 border-bluegray-300 rounded-xl">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={series.name}
                className="w-full rounded-t-xl mb-1" 
              />
            )}
             <p className="px-1 my-1"><span className="italic font-medium font-lg"> Title:</span> {series.name}</p>
             <p className="px-1 my-1"><span className="italic font-medium font-lg"> Release Date:</span> {series.premiered}</p>
             <p className="px-1 my-1 text-blue-800"><a target="blank" href={series.url} className="font-medium font-lg"> Read more...</a></p>
             </div>
            )
          })}
        </ul>
      </div>
    )
}

export default Action
