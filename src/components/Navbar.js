import React from "react";
import airbnb from "../images/AirBnb_Logo.png"
export default function Navbar(){
    return(
        <nav className="">
            <div className="nav--contents">
                <div className="flex">
                <img src={airbnb} alt="airbnb logo" className="nav--logo"/>
                </div>
            </div>
        </nav>
    )
}