import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about__section">
      <div className="about__image">
        <img
          src="../../assets/Rectangle.png"
          alt="About Im\age"
          className="image__two"
        />
        <img
          src="../../assets/about-image.png"
          alt="About Im\age"
          className="image__one"
        />
      </div>
      <div className="about__text">
        <div className="about__left--images">
          <img src="../../assets/Vector 3.png" alt="" />
          <img src="../../assets/Vector 2.png" alt="" />
          <img src="../../assets/Vector 1.png" alt="" />
          <p className="heading__tag">ABOUT US</p>
        </div>
        <p className="description">
          Reliable Airport Taxis; Your Trusted Transportation Partner
        </p>
        
        <div className="checkboxes">
          <div className="first__text">
            <img src="../../assets/noun-tick.png" alt="" />
            <p>Reliable Airport Transport</p>
          </div>
          <div className="first__text">
            <img src="../../assets/noun-tick.png" alt="" />
            <p>Convenient Booking Process</p>
          </div>
          <div className="first__text">
            <img src="../../assets/noun-tick.png" alt="" />
            <p>Convenient Booking Process</p>
          </div>
          <button className="about__button">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
