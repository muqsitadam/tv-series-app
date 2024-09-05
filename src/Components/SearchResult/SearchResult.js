import React from "react";

function SearchResult({results}){
    if (results.length > 0) {
        return(
            <div>
                <h2  className="mt-4 text-2xl text-center font-mono italic font-bold">Search Results:</h2>
                <ul className="flex flex-row flex-grow flex-wrap justify-center">
                    {results.map((show) => {
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
        )
    }
    return <p  className="mt-4 text-2xl text-center font-mono italic font-bold"> No results found!</p>
}

export default SearchResult