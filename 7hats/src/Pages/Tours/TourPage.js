// src/pages/TourPage.js
import React from 'react';
import './TourPage.css';
import SNavbar from '../../Components/SmallNavbar/SNavbar'; // Adjust the path if needed
import tour1 from '../../Data/Assets/Images/tour-image.jpg';

// Individual Tour Component
const Tour = ({ imageSrc, name, country, numberOfPeople, price, alignRight }) => {
  return (
    <div className={`page-tour-card ${alignRight ? 'align-right' : 'align-left'}`}>
      <img src={imageSrc} alt={name} className="tour-image" />
      <div className="page-tour-details">
        <h3 className="tour-name">{name}</h3>
        <p className="tour-info">
          {country} | {numberOfPeople}
        </p>
        <p className="tour-price">{price}</p>
        <button className="page-details-button">Details</button>
      </div>
    </div>
  );
};

// Tours Section Component
const ToursSection = () => {
  const toursData = [
    {
      imageSrc: tour1,
      name: 'Robin Yacht',
      country: 'Canada, Zona A',
      numberOfPeople: '2 - 6 Persons',
      price: '$100/ Room',
    },
    {
      imageSrc: tour1,
      name: 'Sea Roger',
      country: 'French, Zona B',
      numberOfPeople: '2 - 3 Persons',
      price: '$100/ Room',
    },
    {
      imageSrc: tour1,
      name: 'Robin Yacht',
      country: 'Canada, Zona A',
      numberOfPeople: '2 - 6 Persons',
      price: '$100/ Room',
    },
    {
      imageSrc: tour1,
      name: 'Sea Roger',
      country: 'French, Zona B',
      numberOfPeople: '2 - 3 Persons',
      price: '$100/ Room',
    },
    // Add more tour objects as needed
  ];

  return (
    <section className="page-tours-section">
      <div className="page-tour-cards">
        {toursData.map((tour, index) => (
          <Tour
            key={index}
            imageSrc={tour.imageSrc}
            name={tour.name}
            country={tour.country}
            numberOfPeople={tour.numberOfPeople}
            price={tour.price}
            alignRight={index % 2 === 1} // Alternate alignment based on index
          />
        ))}
      </div>
    </section>
  );
};

// Main Page Component
const TourPage = () => {
  return (
    <div id="tour-info" className="page">
      <SNavbar />
      <ToursSection />
    </div>
  );
};

export default TourPage;
