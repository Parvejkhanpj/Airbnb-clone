import React from "react";
import navlogo from "../Images/airbnb-logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <img src={navlogo} alt="airbnb-logo" />
      </nav>
    </div>
  );
}
