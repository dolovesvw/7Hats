import React, { useState } from 'react';
import './SNavbar.css'; 
import slogo from '../../Data/Assets/Images/7hatswhite.png';

const SmallNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="small-navbar">
      <div className="logo">
        <img src={slogo} alt="Logo" />
      </div>

      {/* Desktop nav links */}
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/tours">Tours</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>

      {/* Right section with Book Now button and hamburger menu */}
      <div className="right-section">
        <button className="book-now-button">Book Now</button>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>

      {/* Mobile side menu */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/tours">Tours</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      {/* Background overlay for mobile side menu */}
      {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default SmallNavbar;
