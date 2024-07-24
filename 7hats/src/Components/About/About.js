// src/Components/About/About.js
import './About.css';

const About = () => (
  <section id="about" className="about">
    <div className="about-content">
      <div className="about-header">
        <h2>About Us</h2>
        <i className="fas fa-globe"></i>
      </div>
      <div className="about-details">
        <div className="about-image">
          <img src="https://framerusercontent.com/images/LFk5B5IxBlb2wEVCa388JSoBfJQ.jpg" alt="Adventure" />
        </div>
        <div className="about-text">
          <p>Embark on extraordinary adventures with 7Hats, where every journey is a story waiting to be told...</p>
          <p>From scaling majestic peaks to diving into vibrant underwater worlds...</p>
          <a href="#about" className="cta-btn">Learn More</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
