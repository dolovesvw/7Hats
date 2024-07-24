import Tour from './Tour'; // Adjust the import path as per your project structure
import './ToursSection.css'; // Styling for ToursSection

const ToursSection = () => {
  const toursData = [
    {
      imageSrc: 'https://neera.wpengine.com/wp-content/plugins/vikbooking/site/resources/uploads/tour-detail-6.jpg',
      name: 'Tour Name 1',
      country: 'Country 1',
      numberOfPeople: '2 People',
      price: '$200/Person'
    },
    {
      imageSrc: 'https://neera.wpengine.com/wp-content/plugins/vikbooking/site/resources/uploads/tour-detail-6.jpg',
      name: 'Tour Name 2',
      country: 'Country 2',
      numberOfPeople: '4 People',
      price: '$250/Person'
    },
    {
      imageSrc: 'https://neera.wpengine.com/wp-content/plugins/vikbooking/site/resources/uploads/tour-detail-6.jpg',
      name: 'Tour Name 2',
      country: 'Country 2',
      numberOfPeople: '4 People',
      price: '$250/Person'
    },    {
      imageSrc: 'https://neera.wpengine.com/wp-content/plugins/vikbooking/site/resources/uploads/tour-detail-6.jpg',
      name: 'Tour Name 2',
      country: 'Country 2',
      numberOfPeople: '4 People',
      price: '$250/Person'
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
        <button>Explore All Tours</button>
      </div>
    </section>
  );
};

export default ToursSection;
