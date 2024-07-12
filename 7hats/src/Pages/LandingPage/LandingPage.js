import './LandingPage.css';
import React, { useState } from 'react';

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="navbar-logo">7Hats</div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          &#9776;
        </div>
        <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
          <li><a href="#about">About Us</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact Us</a></li>
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
        <h2>About Us</h2>
        <p>7Hats is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo. Porta lorem mollis aliquam ut porttitor leo. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Enim ut tellus elementum sagittis vitae et. Pharetra et ultrices neque ornare aenean euismod. Sed blandit libero volutpat sed. Fermentum posuere urna nec tincidunt. Quam vulputate dignissim suspendisse in est. Id neque aliquam vestibulum morbi blandit cursus risus at. Tellus at urna condimentum mattis pellentesque id nibh tortor. Nunc sed id semper risus in hendrerit gravida. Habitant morbi tristique senectus et. Tellus mauris a diam maecenas sed enim ut sem. Id ornare arcu odio ut sem.</p>
      </section>

      <section id="pricing" className="pricing">
        <h2>Pricing</h2>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Dolore</h3>
            <div className="price-container">
              <h2>$450<span>/one time</span></h2>
              <p className="annual">Lorem ipsum dolor sit amet.</p>
            </div>
            <button className="btn">Buy plan</button>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Labore et dolore magna aliqua. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.</li>
              <li> Sit amet luctus venenatis lectus.</li>
              <li>48-hour support response time</li>
            </ul>
          </div>
          <div className="plan popular-plan">
            <h3>Lorem</h3>
            <div className="price-container">
              <h2>$600<span>/one time</span></h2>
              <p className="annual">Lorem ipsum dolor sit amet.</p>
            </div>
            <button className="btn">Buy plan</button>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Labore et dolore magna aliqua.</li>
              <li>Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.</li>
              <li>24-hour support response time</li>
              <li>Sit amet luctus venenatis lectus.</li>
            </ul>
          </div>
          <div className="plan">
            <h3>Nulla</h3>
            <div className="price-container">
              <h2>$1000<span>/one time</span></h2>
              <p className="annual">Lorem ipsum dolor sit amet.</p>
            </div>
            <button className="btn">Buy plan</button>
            <ul>
              <li>Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Labore et dolore magna aliqua.</li>
              <li>1-hour, dedicated support response time</li>
              <li>Sit amet luctus venenatis lectus.</li>
              <li>Felis donec et odio pellentesque diam. Semper quis lectus nulla at volutpat.</li>
            </ul>
          </div>
        </div>
      </section>

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
        <p>&copy; 2024 SevenHats. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;