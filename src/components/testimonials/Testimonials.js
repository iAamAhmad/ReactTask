// Testimonials.js

import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <div className="left-testimonial">
        <div className="testimonials__images">
          <img src="../../assets/Vector 3.png" alt="" />
          <img src="../../assets/Vector 2.png" alt="" />
          <img src="../../assets/Vector 1.png" alt="" />
          <p className="heading__tagOne">TESTEMONIALS</p>
        </div>

        <h6>What Clients Are Saying About Us?</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          veritatis voluptatum quos mollitia!
        </p>
      </div>

      <div className="right-testimonial">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          unde rerum corporis doloremque.
        </p>
        <div className="name-image-testimonial">
          <img src="../../assets/Ellipse.png" alt="icture" />
          <div className="desc-testimonial">
            <h3>JP Morgan</h3>
            <p>This is good</p>
            <div className="rating-testimonial">
              <span>&#9733;</span> {/* Unicode character for star */}
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
