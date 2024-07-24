// src/Components/Navbar/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#tourspage">Tours</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="navbar-center">
        <div className="navbar-logo">7Hats</div>
      </div>
      <div className="navbar-right">
        <div className="navbar-phone">
          <i className="fas fa-phone-alt"></i> Call Us +000 123 456 789
        </div>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
