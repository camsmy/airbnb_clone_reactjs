import React from "react";
import Navbar from "./components/Navbar";
import "./style.css"
import {HeroImg} from "./components/Hero"
import Cards from "./components/Card"
export default function App(){
    return (
        <>
        <Navbar/>
        <HeroImg/>
        <Cards/>
        </>
    )
}