// src/Pages/About/AboutPage.js
import React from 'react';
import './AboutPage.css';
import SNavbar from '../../Components/SmallNavbar/SNavbar'; // Adjust the path if needed
import signature from '../../Data/Assets/Images/Signature.png';
import founder from '../../Data/Assets/Images/founder.png';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Add the SmallNavbar component here */}
      <SNavbar />
      <div className="content">
        <h1>OUR STORY</h1>
        <div className="text-and-photo">
          <div className="text-content">
            <p>
              In 2023, we launched 7Hats to revolutionize the tourism industry by offering tailor-made experiences. Inspired by wanderlust, we aim to bring unique adventures to life, guiding you through diverse landscapes, rich cultures, and unforgettable memories.
              <br/><br/>
              Our journey began with a single idea: to make travel more accessible and personalized. Today, we’re proud to have connected countless explorers with the world, building a community that thrives on curiosity, excitement, and the love of discovery.
            </p>
            <div className="signature-section">
              <img src={signature} alt="Signature" className="signature-image" />
              <p className="founder-name">Andrew Kim<br/><span>Founder | CEO</span></p>
            </div>
          </div>
          {/* Photo of the founder */}
          <img src={founder} alt="Founder" className="founder-photo" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

