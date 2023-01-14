import React from "react";
export default function Card(props) {
    // console.log(props.airbnb);
    let badgeText
    if (props.airbnb.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.airbnb.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.airbnb.coverImg} alt="img" className="card--image" />
            <div className="card--stats">
                <img src="./images/Star 1.png" alt="Star" className="card--star" />
                <span>{props.airbnb.stats.rating}</span>
                <span className="grey">&nbsp; ({props.airbnb.stats.reviewCount}) • </span>
                <span className="grey">&nbsp; {props.airbnb.location}</span>
            </div>
            <p className="card--title">{props.airbnb.title}</p>
            <p className="card--price"><span className="bold">From ${props.airbnb.price}</span> / person</p>
        </div>
    )
}  