import React, { useState, useCallback } from 'react';
import './Header.css';
import Carousel from '../Carousel/Carousel';
import italyImage from '../../Data/Assets/Images/Italy.png';
import greeceImage from '../../Data/Assets/Images/Greece.png';
import spainImage from '../../Data/Assets/Images/Spain.png';

const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState(italyImage);
  const [headerText, setHeaderText] = useState({
    title: 'Explore the Beauty of Italy',
    description: 'Experience the stunning coastlines and rich culture of Italy.',
  });

  const handleImageChange = useCallback((imageName) => {
    let newBackgroundImage;
    let newHeaderText = {};

    switch (imageName) {
      case 'Italy':
        newBackgroundImage = italyImage;
        newHeaderText = {
          title: 'Explore the Beauty of Italy',
          description: 'Experience the stunning coastlines and rich culture of Italy.',
        };
        break;
      case 'Greece':
        newBackgroundImage = greeceImage;
        newHeaderText = {
          title: 'Discover the Wonders of Greece',
          description: 'Sail through the historic islands and enjoy the Mediterranean sun.',
        };
        break;
      case 'Spain':
        newBackgroundImage = spainImage;
        newHeaderText = {
          title: 'Uncover the Charm of Spain',
          description: 'Join us for a tour of Spain’s vibrant cities and scenic beaches.',
        };
        break;
      default:
        newBackgroundImage = italyImage;
        newHeaderText = {
          title: 'Explore the Beauty of Italy',
          description: 'Experience the stunning coastlines and rich culture of Italy.',
        };
    }

    setBackgroundImage(newBackgroundImage);
    setHeaderText(newHeaderText);
  }, []);

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="header-content">
        <h1>{headerText.title}</h1>
        <p>{headerText.description}</p>
        <button className="hcta-btn">Explore Now</button>
        <div className="carousel-container">
          <Carousel onImageChange={handleImageChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
