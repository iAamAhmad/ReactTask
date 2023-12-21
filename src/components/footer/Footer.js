import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main__footer">
      <div className="footer__one">
        <img src="../../assets/logo.png" alt="" />
        <p>
          Britian Airport Cars gives you the blocks and components you need to
          have joyful journey.
        </p>
      </div>
      <div className="footerLinks">
        <h5>Company</h5>
        <a href="/">About Us</a>
        <a href="/">Book Online</a>
      </div>
      <div className="footerLinks">
        <h5>Help</h5>
        <a href="/">Contact Us</a>
        <a href="/">FAQ</a>
      </div>
      <div className="footerLinks">
        <h5>Booking</h5>
        <a href="/">Online Booking</a>
        <a href="/">Booking History</a>
      </div>
      <hr />
      <div className="copyright">
        <p>&copy; 2023 Viion TechNology!. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
