import React, { useState, useCallback, useEffect } from 'react';
import './Carousel.css';
import italyImage from '../../Data/Assets/Images/Italy.png';
import greeceImage from '../../Data/Assets/Images/Greece.png';
import spainImage from '../../Data/Assets/Images/Spain.png';

const images = [
  { src: italyImage, name: 'Italy' },
  { src: greeceImage, name: 'Greece' },
  { src: spainImage, name: 'Spain' },
];

const Carousel = ({ onImageChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

  const handleNextClick = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    if (onImageChange) {
      onImageChange(images[currentIndex].name);
    }
  }, [currentIndex, onImageChange]);

  return (
    <div className="carousel-container">
      <button className="carousel-nav carousel-prev" onClick={handlePrevClick}>
        ← Prev
      </button>
      <div className="carousel-images">
        {images.map((image, index) => {
          const isSelected = index === currentIndex;
          return (
            <div
              key={index}
              className={`carousel-image-wrapper ${isSelected ? 'selected' : ''}`}
            >
              <img
                src={image.src}
                alt={`carousel ${image.name}`}
                className={`carousel-image ${isSelected ? 'highlight' : ''}`}
              />
            </div>
          );
        })}
      </div>
      <button className="carousel-nav carousel-next" onClick={handleNextClick}>
        Next →
      </button>
    </div>
  );
};

export default Carousel;
