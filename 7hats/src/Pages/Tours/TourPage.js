import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './TourPage.css';
import SNavbar from '../../Components/SmallNavbar/SNavbar';
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
const ToursSection = ({ selectedCountry }) => {
  const toursData = [
    {
      imageSrc: tour1,
      name: 'Santorini Cruise',
      country: 'Greece',
      numberOfPeople: '2 - 4 Persons',
      price: '$150 / Room',
    },
    {
      imageSrc: tour1,
      name: 'Venice Sail',
      country: 'Italy',
      numberOfPeople: '2 - 5 Persons',
      price: '$200 / Room',
    },
    {
      imageSrc: tour1,
      name: 'Barcelona Explorer',
      country: 'Spain',
      numberOfPeople: '1 - 4 Persons',
      price: '$120 / Room',
    },
  ];

  // Filter tours based on the selected country
  const filteredTours = toursData.filter(tour => tour.country === selectedCountry || selectedCountry === 'All');

  return (
    <section className="page-tours-section">
      <div className="page-tour-cards">
        {filteredTours.map((tour, index) => (
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

// Country Selection Component
const CountrySelection = ({ selectedCountry, setSelectedCountry }) => {
  const countries = ['All', 'Greece', 'Italy', 'Spain'];

  return (
    <div className="country-selection">
      {countries.map((country, index) => (
        <button
          key={index}
          className={`country-button ${selectedCountry === country ? 'active' : ''}`}
          onClick={() => setSelectedCountry(country)}
        >
          {country}
        </button>
      ))}
    </div>
  );
};

// Main Page Component
const TourPage = () => {
  const location = useLocation(); // Get location
  const queryParams = new URLSearchParams(location.search);
  const countryFromQuery = queryParams.get('country') || 'All'; // Get country from query or default to 'All'

  const [selectedCountry, setSelectedCountry] = useState(countryFromQuery);

  return (
    <div id="tour-info" className="page">
      <SNavbar />
      <CountrySelection selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
      <ToursSection selectedCountry={selectedCountry} />
    </div>
  );
};

export default TourPage;
