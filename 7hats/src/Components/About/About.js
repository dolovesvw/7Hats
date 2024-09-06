import React from "react";
import "./About.css";
import logo from '../../Data/Assets/Images/tour-image.jpg';
import { FaUserAlt } from "react-icons/fa";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        
        {/* Left Column */}
        <div className="text-section">
          <h3>About the Firm</h3> {/* Added "About the Firm" */}
          <h2>Fantastic Services Provided by 7Hats</h2>
          
          <div className="icon-list">
            <div className="icon-list-column">
              <FaUserAlt className="icon" />
              <p>Ut Pharetra Sit</p>
              <FaUserAlt className="icon" />
              <p>Morbi Non Arcu</p>
              <FaUserAlt className="icon" />
              <p>Vitae Suscipit Tellus</p>
            </div>
            <div className="icon-list-column">
              <FaUserAlt className="icon" />
              <p>Pharetra Magna</p>
              <FaUserAlt className="icon" />
              <p>Faucibus Purus In</p>
              <FaUserAlt className="icon" />
              <p>Morbi Non Arcu</p>
            </div>
          </div>

          <div className="acta-buttons">
            <a href="#more" className="acta-btn">View More</a>
            <a href="#book" className="acta-btn secondary">Book Your Adventure</a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="about-image">
          <img src={logo} alt="Adventure" />
          <div className="about-quote">
            <p>"Aliquam quis nisi rutrum, aliquam erat ac, aliquam purus. Nulla pellentesque gravida rutrum." - Jadir Khan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;



