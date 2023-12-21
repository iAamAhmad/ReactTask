// AdSection.js

import React from "react";
import "./AdSection.css";

const AdSection = () => {
  return (
    <div className="ad-container">
      <div className="ad-left">
        <h4>Book For Local</h4>
        <p>Get 20% off on selected items. Limited time offer!</p>
        <button>Shop Now</button>
        <img src="../../assets/image 7.png" alt="Left Ad" />
      </div>
      <div className="ad-right">
        <h4>Flash Sale</h4>
        <p>Hurry up! Grab your favorite items before they're gone.</p>
        <button>Explore Deals</button>
        <img src="../../assets/image 8.png" alt="Right Ad" />
      </div>
    </div>
  );
};

export default AdSection;
