import React, { useState } from 'react';
import './Header.css';
import Carousel from '../Carousel/Carousel';

const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [headerText, setHeaderText] = useState({
    title: 'Reserve Your Boat for Adventure Visit',
    description: 'Vivamus nec lectus non ex fermentum suscipit pellentesque sit amet lectus.',
  });

  const handleImageChange = (imageName) => {
    setBackgroundImage(imageName);

    let newHeaderText = {};

    switch (imageName) {
      case 'Italy':
        newHeaderText = {
          title: 'Explore the Beauty of Italy',
          description: 'Experience the stunning coastlines and rich culture of Italy.',
        };
        break;
      case 'Greece':
        newHeaderText = {
          title: 'Discover the Wonders of Greece',
          description: 'Sail through the historic islands and enjoy the Mediterranean sun.',
        };
        break;
      case 'Spain':
        newHeaderText = {
          title: 'Uncover the Charm of Spain',
          description: 'Join us for a tour of Spain’s vibrant cities and scenic beaches.',
        };
        break;
      // Add more cases for other images
      default:
        newHeaderText = {
          title: 'Reserve Your Boat for Adventure Visit',
          description: 'Vivamus nec lectus non ex fermentum suscipit pellentesque sit amet lectus.',
        };
    }

    setHeaderText(newHeaderText);
  };

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="header-content">
        <h1>{headerText.title}</h1>
        <p>{headerText.description}</p>
        <button className="cta-btn">Explore Now</button>
        <div className="carousel-container">
          <Carousel onImageChange={handleImageChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
