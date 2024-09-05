import React from "react";

function Navbar() {
    return(
        <nav className="flex flex-row w-full bg-slate-700 py-12 text-zinc-50">
            <a href="/" className="w-2/3 mx-1 text-lg">Logo</a>
            <ul className="flex flex-row flex-grow">
                <li className="basis-1/3 cursor-pointer hover:text-lg">
                    <a href="/crime">Crime</a>
                </li>
                <li className="basis-1/3 cursor-pointer hover:text-lg">
                    <a href="/drama">Drama</a>
                </li>
                <li className="basis-1/3 cursor-pointer hover:text-lg">
                    <a href="/action">Action</a>
                </li>
            </ul>            
        </nav>
    )
}

export default Navbar