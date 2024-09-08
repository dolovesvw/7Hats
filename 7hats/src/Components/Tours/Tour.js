import './Tour.css'; // Styling for Tour component

const Tour = ({ imageSrc, name, country, numberOfPeople, price, alignRight }) => {
  return (
    <div className={`tour-card ${alignRight ? 'align-right' : 'align-left'}`}>
      <img src={imageSrc} alt={name} className="tour-image" />
      <div className="tour-details">
        <h3 className="tour-name">{name}</h3>
        <p className="tour-info">{country} | {numberOfPeople}</p>
        <p className="tour-price">{price}</p>
      </div>
    </div>
  );
};

export default Tour;