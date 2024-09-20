import './ToursSection.css'; // Styling for ToursSection
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Tour component
const Tour = ({ imageSrc, name, country, numberOfPeople, price, alignRight }) => {
  return (
    <div className={`tour-card ${alignRight ? 'align-right' : 'align-left'}`}>
      {/* Image section */}
      <img src={imageSrc} alt={name} className="tour-image" />
      
      {/* Details section */}
      <div className="tour-details">
        <h3 className="tour-name">{name}</h3>
        <p className="tour-info">{country} | {numberOfPeople} Persons</p>
        <p className="tour-price">{price} / Room</p>
      </div>
    </div>
  );
};

// TourPage component (you can customize this)
const TourPage = () => {
  return (
    <div>
      <h1>Explore All Tours</h1>
      <p>This is the Tour Page where you can find all the tours listed.</p>
    </div>
  );
};

// ToursSection component
const ToursSection = () => {
  const toursData = [
    {
      imageSrc: 'https://neera.wpengine.com/wp-content/plugins/vikbooking/site/resources/uploads/tour-detail-6.jpg',
      name: 'Tour Name 1',
      country: 'Country 1',
      numberOfPeople: '2',
      price: '$200'
    },
    {
      imageSrc: 'https://neera.wpengine.com/wp-content/plugins/vikbooking/site/resources/uploads/tour-detail-6.jpg',
      name: 'Tour Name 2',
      country: 'Country 2',
      numberOfPeople: '4',
      price: '$250'
    },
    {
      imageSrc: 'https://neera.wpengine.com/wp-content/plugins/vikbooking/site/resources/uploads/tour-detail-6.jpg',
      name: 'Tour Name 3',
      country: 'Country 3',
      numberOfPeople: '4',
      price: '$250'
    },    
    {
      imageSrc: 'https://neera.wpengine.com/wp-content/plugins/vikbooking/site/resources/uploads/tour-detail-6.jpg',
      name: 'Tour Name 4',
      country: 'Country 4',
      numberOfPeople: '4',
      price: '$250'
    },
  ];

  return (
    <section className="tours-section">
      <h2 className="section-title">Top Tours</h2>
      <div className="tour-cards">
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
      <div className="explore-all-btn">
        {/* Using href for navigation */}
        <a href="/tours">
          <button>Explore All Tours</button>
        </a>
      </div>
    </section>
  );
};

// Main component with routing
const Main = () => {
  return (
    <Router>
      <Routes>
        {/* Route for ToursSection (homepage) */}
        <Route path="/" element={<ToursSection />} />
        
        {/* Route for TourPage */}
        <Route path="/tours" element={<TourPage />} />
      </Routes>
    </Router>
  );
};

export { Tour, ToursSection, Main};
