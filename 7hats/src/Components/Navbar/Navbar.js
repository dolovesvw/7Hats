import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../Data/Assets/Images/7hatsblue.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // Adjust this value if needed
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSolid ? 'solid' : ''}`}>
      <div className="navbar-left">
        <ul className="navbar-links">
          <li><a href="#home" onClick={handleSmoothScroll}>Home</a></li>
          <li><a href="#locations" onClick={handleSmoothScroll}>Locations</a></li>
          <li><a href="#tourspage" onClick={handleSmoothScroll}>Tours</a></li>
          <li><a href="#contact" onClick={handleSmoothScroll}>Contact Us</a></li>
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
          <li><a href="#home" onClick={handleSmoothScroll}>Home</a></li>
          <li><a href="#locations" onClick={handleSmoothScroll}>Locations</a></li>
          <li><a href="#tourspage" onClick={handleSmoothScroll}>Tours</a></li>
          <li><a href="#contact" onClick={handleSmoothScroll}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
