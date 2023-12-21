// BookingForm.js

import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="booking__form">
      <div className="form__section">
        <div className="heading">
          <p className="heading__tag">BOOK YOUR CAB</p>
          <p className="heading__para">
            Please Enter details to Book your Ride
          </p>
        </div>
        <div className="form__row">
          <div className="first">
            <p>Name</p>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="first">
            <p>Email</p>
            <input type="text" placeholder="Enter Email" />
          </div>
        </div>
        <div className="form__row">
          <div className="first">
            <p>Phone Number</p>
            <input type="text" placeholder="Enter Phone Number" />
          </div>
          <div className="first">
            <p>Choose Vehicle</p>
            <input type="text" placeholder="Choose Vehicle" />
          </div>
        </div>
        <div className="form__row">
          <div className="first">
            <p>Starting Point</p>
            <input type="text" placeholder="Enter Starting Point" />
          </div>
          <div className="first">
            <p>Ending Point</p>
            <input type="text" placeholder="Enter Ending Point" />
          </div>
        </div>
        <div className="form__row">
          <div className="first">
            <p>Date</p>
            <input type="date" />
          </div>
          <div className="first">
            <p>Time</p>
            <input type="time" />
          </div>
        </div>
        <div className="form__row">
          <div className="first">
            <p>Notes For Driver</p>
            <textarea placeholder="Notes"></textarea>
          </div>
        </div>
        {/* payment section  */}
        <div className="payment__section">
          <p>Choose Your Payment Method</p>
          <div className="option__payment">
            <input
              type="radio"
              name="Pay By Card"
              id=""
              placeholder="Pay By Card"
            />
            <p>Pay by Card</p>
          </div>
          <div className="wait__div">
            <img src="../../assets/check.png" alt="wait log" />
            <p>WAIT AND RETURN</p>
          </div>
          <button className="payment__button--paypal">BOOK NOW</button>
        </div>
      </div>
      <div className="map__section">
        <img src="../../assets/image.jpg" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
