import './Footer.css';
import logo from '../../Data/Assets/Images/7hatsblue.png';
import partner1 from '../../Data/Assets/Images/raraspain.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* First Column: Logo and Social Links */}
      <div className="footer-section">
        <img src={logo} alt="SevenHats Logo" className="footer-logo" />
        <p>&copy; 2024 SevenHats</p>
        <div className="social-media">
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Second Column: About */}
      <div className="footer-section">
        <h4>About</h4>
        <ul>
          <li><i className="fas fa-map-marker-alt"></i> Building British Iceland</li>
          <li><i className="fas fa-clock"></i> Mon - Fri: 9AM - 10PM</li>
          <li><i className="fas fa-envelope"></i> info@sevenhats.com</li>
          <li><i className="fas fa-phone"></i> +123 456 7890</li>
        </ul>
      </div>

      {/* Third Column: Best Services */}
      <div className="footer-section">
        <h4>Best Services</h4>
        <ul>
          <li><i className="fas fa-anchor"></i> Deck Boats</li>
          <li><i className="fas fa-ship"></i> Jet Boats</li>
          <li><i className="fas fa-motorcycle"></i> Motor Boats</li>
          <li><i className="fas fa-sailboat"></i> Sail Boats</li>
        </ul>
      </div>

      {/* Fourth Column: Contact/Subscribe */}
      <div className="footer-section">
        <h4>Get in Touch</h4>
        <p>We Don't Send Spam So Don't Worry</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Email Address" />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="footer-logos">
        <img src={partner1} alt="Partner 1" />
        <img src={partner1} alt="Partner 2" />
        <img src={partner1} alt="Partner 3" />
      </div>
    </div>
  </footer>
);

export default Footer;
