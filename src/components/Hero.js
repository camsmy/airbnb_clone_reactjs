import React from "react"
function HeroImg(){
    return(
        <main>
            <div className="container">
                <div className="flex justify-content-center">
                    <img src="../images/hero_img.png" alt="Main" className="hero--img"/>
                </div>
                <Herocontent/>
            </div>
        </main>
    )
}

function Herocontent(){
    return(
        <section className="hero--content">
        <h2 className="Hero--header">Online Experiences</h2>
        <p className="Hero-subheader">Join unique interactive
        activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export {HeroImg};