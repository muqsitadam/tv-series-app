import React from "react";

function Navbar() {
    return(
        <div className="flex flex-row w-full bg-slate-700 py-12 text-zinc-50">
            <p className="w-1/2 text-lg">Logo</p>
            <div className="flex flex-row flex-grow">
                <p className="basis-1/3 hover:text-lg">Crime</p>
                <p className="basis-1/3 hover:text-lg">Drama</p>
                <p className="basis-1/3 hover:text-lg">Action</p>
            </div>            
        </div>
    )
}

export default Navbar