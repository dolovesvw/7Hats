// src/Components/Footer/Footer.js
import './Footer.css';

const Footer = () => (
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
);

export default Footer;
