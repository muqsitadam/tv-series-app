import React from "react";

function SearchBar(){
    return(
        <div className="w-full mt-4">
            <p className="text-center">Search your favourite movie here.</p>
            <div className="w-full text-center my-1">
                <input type="text" className="border-2 px-3 border-black h-10 rounded-l-lg w-1/4" />
                <button type="submit" className="p-2 bg-slate-600 rounded-r-lg text-zinc-100">Search</button>
            </div>
        </div>
    )
}

export default SearchBar