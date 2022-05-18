import React from "react"
export default function Card(props){
    return(
            <>
                <div className="card">
                    <div className="card--image-container">
                    <img src={`./images/${props.img}`} alt="teachers" className="card--image"/> 
                        {props.openSpots === 0 && <div className="card--image-tag">SOLD OUT</div>}
                        {props.openSpots > 0 && <div className="card--image-tag">{props.location}</div>}
                    </div>
                    <div className="flex card--content">
                    <img src="../images/star1.png" alt="star icon" className="card--star"/>
                    <p className="card--rating"><span className="card--rate">{props.rating}</span>({props.reviewCount}) • {props.location}</p>
                    </div>
                    <div className="card--content">
                    <p className="card--text">{props.title}</p>
                    </div>
                    <div className="flex card--content">
                    <p className="card--text"><span className="card--bold">From ${props.price}</span> / person</p>
                    </div>
                </div>
                
                </>

                
    )
}