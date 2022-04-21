import React from "react";
import heroimg from "../Images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src={heroimg} alt="hero-img" />
      </div>

      <div className="hero-intro">
        <h1 className="hero-tittle">Online Experiences</h1>
        <p className="hero-des">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
