import React, { useState, useEffect } from 'react';
import './Carousel.css';
import logo from '../../Data/Assets/Images/Italy.png';
import logo1 from '../../Data/Assets/Images/Greece.png';
import logo2 from '../../Data/Assets/Images/Spain.png';

const images = [
  { src: logo, name: 'Italy' },
  { src: logo1, name: 'Greece' },
  { src: logo2, name: 'Spain' },
  // Add more image objects as needed
];

const Carousel = ({ onImageChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const currentImage = images[currentIndex];
    // Update the header background image
    const headerElement = document.querySelector('.header');
    if (headerElement) {
      headerElement.style.backgroundImage = `url(${currentImage.src})`;
    }
    // Notify the parent component of the image change
    onImageChange(currentImage.name);
  }, [currentIndex, onImageChange]);

  return (
    <div className="carousel-container">
      <button className="carousel-nav carousel-prev" onClick={handlePrevClick}>
        ← Prev
      </button>
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image-wrapper ${
              index === currentIndex ? 'selected' : ''
            }`}
          >
            <img
              src={image.src}
              alt={`carousel ${image.name}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
      <button className="carousel-nav carousel-next" onClick={handleNextClick}>
        Next →
      </button>
    </div>
  );
};

export default Carousel;
