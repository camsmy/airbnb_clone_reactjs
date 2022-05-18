import React from "react";
import Navbar from "./components/Navbar";
import "./style.css"
import {HeroImg} from "./components/Hero"
import Cards from "./components/Card"
import Data from "./data";
export default function App(){
    const cardData = Data.map(
        el => {
            return(
            <div>
                <Cards 
                    img={el.coverImg}
                    rating={el.stats.rating}
                    reviewCount={el.stats.reviewCount}
                    location={el.location}
                    title={el.title}
                    price={el.price}
                    openSpots={el.openSpots}
                />
            </div>
            )
           })

     return (
        <>
         <Navbar/>
         <HeroImg/>
         <section>
            <div className="container-scroll flex">
         {cardData}
         </div>
         </section>
        </>
     
     )
}