// src/pages/ContactUs.js
import React, { useState } from 'react';
import './ContactPage.css';
import SNavbar from '../../Components/SmallNavbar/SNavbar'; // Importing the navbar component

const ContactUs = () => {
  const [message, setMessage] = useState('');

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="page-container">
      <SNavbar className="navbar" /> {/* Placing the Navbar at the top */}
      <div className="contact-page-container">
        <div id="contact" className="contact-page">
          <h2 className="subtitle">Speak With Us</h2>
          <h1 className="title">DO YOU HAVE ANY INQUIRIES?</h1>
          <form className="contact-form">
            <input type="text" placeholder="Name" className="input" />
            <select className="input">
              <option>Interested In?</option>
              <option>Italy</option>
              <option>Spain</option>
              <option>Greece</option>
            </select>
            <input type="email" placeholder="Email ID" className="input" />
            <input type="tel" placeholder="Mobile Number" className="input" />
            <select className="input">
              <option>Select Budget</option>
              <option>$100 - $500</option>
              <option>$500 - $1000</option>
              <option>$1000+</option>
            </select>
            <textarea
              placeholder="Message"
              className="textarea"
              maxLength="800"
              value={message}
              onChange={handleTextareaChange}
            ></textarea>
            <small className="char-count">{message.length} / 800 characters</small>
            <button type="submit" className="button">Submit Query</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
