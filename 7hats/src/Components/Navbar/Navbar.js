import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../../Data/Assets/Images/7hatsblue.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the value to determine when the color changes
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'solid' : ''}`}> {/* Apply the 'solid' class when scrolled */}
      <div className="navbar-left">
        <ul className="navbar-links">
          <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
          <li><Link to="/tours" onClick={() => setIsNavOpen(false)}>Tours</Link></li>
          <li><Link to="/about" onClick={() => setIsNavOpen(false)}>Abuout Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
      <div className="navbar-center">
        <img src={logo} alt="7Hats" className="navbar-logo" loading="lazy" />
      </div>
      <div className="navbar-right">
        <div className="navbar-phone">
          <i className="fas fa-phone-alt" aria-label="Phone icon"></i> Call Us +000 123 456 789
        </div>
        <button className="quote-btn">Request A Quote</button>
        <div className="navbar-toggle" onClick={toggleNavbar} aria-label="Toggle navigation menu">
          &#9776;
        </div>
      </div>

      {/* Dark overlay */}
      <div className={`navbar-overlay ${isNavOpen ? 'show' : ''}`} onClick={toggleNavbar}></div>

      {/* Applying the open class conditionally */}
      <div className={`navbar-links-container ${isNavOpen ? 'open' : ''}`}>
        <ul className="navbar-links mobile">
          <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
          <li><Link to="/tours" onClick={() => setIsNavOpen(false)}>Tours</Link></li>
          <li><Link to="/about" onClick={() => setIsNavOpen(false)}>Abuout Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
