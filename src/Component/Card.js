import React from "react";
import Cardimg from "../Images/kattie.png";
import starimg from "../Images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={Cardimg} alt="kattie-img" className="card--img" />
      <div className="card-status">
        <img src={starimg} alt="star-img" className="star-img" />
        <span>5.0</span>
        <span> (6). USA</span>
      </div>
      <p className="card--pera">Life lessons with Katie Zaferes</p>
      <p className="card--unit">
        <span className="card-price">From $136 </span>/ person
      </p>
    </div>
  );
}
