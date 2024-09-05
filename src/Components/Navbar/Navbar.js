import React from "react";
import logo from "../../Assets/logo.png"

function Navbar() {
    return(
        <nav className="flex flex-row w-full bg-slate-700 text-zinc-50">
            <a href="/" className="w-2/3">
                <img
                    src={logo}
                    className="w-16 h-16"
                />
            </a>
            <ul className="flex flex-row flex-grow ">
                <li className="basis-1/3 mt-4 cursor-pointer hover:text-lg">
                    <a href="/crime">Crime</a>
                </li>
                <li className="basis-1/3 mt-4 cursor-pointer hover:text-lg">
                    <a href="/drama">Drama</a>
                </li>
                <li className="basis-1/3 mt-4 cursor-pointer hover:text-lg">
                    <a href="/action">Action</a>
                </li>
            </ul>            
        </nav>
    )
}

export default Navbar