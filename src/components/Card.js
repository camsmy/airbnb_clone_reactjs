import React from "react"
import pictures from "../images/katie.png"
import star from "../images/star1.png"
export default function Card(){
    return(
        <section>
            <div className="container flex">
                <div className="card">
                    <div className="card--image-container">
                        <img src={pictures} alt="teachers" className="card--image"/>
                        <div className="card--image-tag">SOLD OUT</div>
                    </div>
                    <div className="flex card--content">
                    <img src={star} alt="star icon" className="card--star"/>
                    <p className="card--rating"><span className="card--rate">5.0</span>(6) • USA</p>
                    </div>
                    <div className="card--content">
                    <p className="card--text">Life lessons with Katie Zaferes</p>
                    </div>
                    <div className="flex card--content">
                    <p className="card--text"><span className="card--bold">From $136</span> / person</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card--image-container">
                        <img src={pictures} alt="teachers" className="card--image"/>
                        <div className="card--image-tag">ONLINE</div>
                    </div>
                    <div className="flex card--content">
                    <img src={star} alt="star icon" className="card--star"/>
                    <p className="card--rating"><span className="card--rate">5.0</span>(30) • USA</p>
                    </div>
                    <div className="card--content">
                    <p className="card--text">Learn wedding photography</p>
                    </div>
                    <div className="flex card--content">
                    <p className="card--text"><span className="card--bold">From $125</span> / person</p>
                    </div>
                </div>
            </div>
        
        </section>
    )
}