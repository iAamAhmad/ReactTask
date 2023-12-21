import React from "react";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="choose-us__container">
      <div className="choose__left--images">
        <img src="../../assets/Vector 3.png" alt="" />
        <img src="../../assets/Vector 2.png" alt="" />
        <img src="../../assets/Vector 1.png" alt="" />
        <p className="heading__tag">WHY CHOOSE US</p>
      </div>
      <p className="section__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        quas.
      </p>
      <div className="choose-options__container">
        <div className="choose__option">
          <h4 className="option__title">24/7 Support</h4>
          <p className="option__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            minus tempora ipsa, voluptatem earum voluptatum porro quibusdam
            eveniet.
          </p>
        </div>
        <div className="choose__option">
          <h4 className="option__title">Vehicle Selection</h4>
          <p className="option__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            minus tempora ipsa, voluptatem earum voluptatum porro quibusdam
            eveniet.
          </p>
        </div>
        <div className="choose__option">
          <h4 className="option__title">Secure</h4>
          <p className="option__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            minus tempora ipsa, voluptatem earum voluptatum porro quibusdam
            eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
