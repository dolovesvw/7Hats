// src/Components/SNavbar.js
import React from 'react';
import './SNavbar.css'; // Import your CSS file for styling
import slogo from '../../Data/Assets/Images/7hatswhite.png'; // Ensure the path is correct

const SmallNavbar = () => {
  return (
    <nav className="small-navbar">
      <div className="logo">
        <img src={slogo} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/tours">Tour</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>

      <div className="right-section">
        <button className="book-now-button">Book Now</button>
        <div className="hamburger-menu">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default SmallNavbar;
