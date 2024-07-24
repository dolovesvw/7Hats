// src/Components/WebReviews/Reviews.js
import './Reviews.css';

const Reviews = () => (
  <section id="reviews" className="reviews">
    <h2>Reviews</h2>
    <div className="review-cards">
      <div className="review-card">
        <p>"Amazing experience! Highly recommend 7Hats for any adventure seekers."</p>
        <h4>- John Doe</h4>
      </div>
      <div className="review-card">
        <p>"A trip to remember! The service and tours were top-notch."</p>
        <h4>- Jane Smith</h4>
      </div>
      <div className="review-card">
        <p>"Excellent tours with knowledgeable guides. Five stars!"</p>
        <h4>- Robert Brown</h4>
      </div>
    </div>
  </section>
);

export default Reviews;
