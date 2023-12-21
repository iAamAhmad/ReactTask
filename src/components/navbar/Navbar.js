// Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const handleLinkClick = (linkNumber) => {
    setActiveLink(linkNumber);
  };

  return (
    <div className="full__navbar">
      <div className="left__navbar">
      <div className="logo">
        <img src="../../assets/logo.png" alt="Logo " />
      </div>
      <div className="links">
        <a
          href="/"
          className={activeLink === 1 ? 'active' : ''}
          onClick={() => handleLinkClick(1)}
        >
          Home
        </a>
        <a
          href="/about"
          className={activeLink === 2 ? 'active' : ''}
          onClick={() => handleLinkClick(2)}
        >
          About Us
        </a>
        <a
          href="/"
          className={activeLink === 3 ? 'active' : ''}
          onClick={() => handleLinkClick(3)}
        >
          Contact Us
        </a>
        <a
          href="/book"
          className={activeLink === 4 ? 'active' : ''}
          onClick={() => handleLinkClick(4)}
        >
          Book Online
        </a>
      </div>
      </div>
      <div className="buttons">
        <button className="blue__button">Sign in</button>
        <button className="blue__button--none">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
