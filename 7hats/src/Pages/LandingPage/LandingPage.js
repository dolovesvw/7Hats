import './LandingPage.css';
import React, { useState } from 'react';
import ToursSection from '../../Components/Main/Tours/TourSection.js'; // Adjust the import path as per your project structure

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="landing-container">
      <div className="top-info">
        <span>00-123-456789 | Bernard 120, Lo-Reninge, Belgium | info@example.com</span>
        <div className="top-links">
          <a href="#faq">Faq</a>
          <a href="#tos">Terms Of Service</a>
        </div>
      </div>
      <div class="divider"></div>
      <nav className="navbar">
        <div className="navbar-logo">7Hats</div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          &#9776;
        </div>
        <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li className="navbar-phone">
            <i className="fas fa-phone-alt"></i> Call Us +000 123 456 789
          </li>
        </ul>
      </nav>

      <header className="header">
        <div className="header-content">
          <h1>Welcome to 7Hats</h1>
          <p>Your adventure starts here</p>
          <button className="cta-btn">Explore Now</button>
        </div>
      </header>

      <section id="about" className="about">
        <div className="about-content">
          <div className="about-header">
            <h2>About Us</h2>
            <i className="fas fa-globe"></i> {/* Example icon, replace with appropriate icon */}
          </div>
          <div className="about-details">
          <div className="about-image">
              <img src="https://framerusercontent.com/images/LFk5B5IxBlb2wEVCa388JSoBfJQ.jpg" alt="Adventure" />
            </div>
            <div className="about-text">
              <p>Embark on extraordinary adventures with 7Hats, where every journey is a story waiting to be told. Our mission is to redefine exploration by combining thrilling experiences with cultural immersion and sustainable travel practices.</p>
              <p>From scaling majestic peaks to diving into vibrant underwater worlds, each trip is meticulously crafted to inspire, educate, and leave a lasting impact. We believe in preserving the natural beauty of our planet while enriching the lives of those who dare to explore it.</p>
              <a href="#about" className="cta-btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <ToursSection />

      <section id="reviews" className="reviews">
        <h2>Reviews</h2>
        <div className="review-cards">
          <div className="review-card">
            <p>"Amazing experience! Highly recommend 7Hats for any adventure seekers."</p>
            <h4>- John Doe</h4>
          </div>
          <div className="review-card">
            <p>"A trip to remember! The service and tours were top-notch."</p>
            <h4>- Jane Smith</h4>
          </div>
          <div className="review-card">
            <p>"Excellent tours with knowledgeable guides. Five stars!"</p>
            <h4>- Robert Brown</h4>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#HelpCntr">Help Center</a></li>
              <li><a href="#ToS">Terms of Service</a></li>
              <li><a href="#Privacy">Privacy Policy</a></li>
              <li><a href="#Refund">Refund Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@sevenhats.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="social-media">
              <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SevenHats. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
