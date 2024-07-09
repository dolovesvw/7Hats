import './Tours.css';

const Tours = () => {
  return (
    <div className="tours-container">
      <h1>Reserve Your Dream Location</h1>
      <div className="tour-item">
        <div className="tour-image"></div>
        <div className="tour-details">
          <h2>Ocean Rider</h2>
          <p>$200 / Room</p>
          <p>USA, 2 Persons, Zona B</p>
          <button className="details-btn">Details</button>
        </div>
      </div>
      <div className="tour-item">
        <div className="tour-image"></div>
        <div className="tour-details">
          <h2>Sail Away</h2>
          <p>$300 / Room</p>
          <p>Caribbean, 4 Persons, Zona A</p>
          <button className="details-btn">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Tours;
