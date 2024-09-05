import React from "react";

function SearchBar({handleInput, handleSubmit}){ 
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          handleSubmit();
        }
      };      
    return(
        <div className="w-full mt-4">
            <p className="text-center">Search your favourite movie here.</p>
            <div className="w-full text-center my-1">
                <input 
                    type="text" 
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    className="border-2 px-3 border-black h-10 rounded-l-lg w-1/4" 
                />
                <button 
                    type="submit"
                    onClick={handleSubmit}
                    className="p-2 bg-slate-600 rounded-r-lg text-zinc-100"
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar