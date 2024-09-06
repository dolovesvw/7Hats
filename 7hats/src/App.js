import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Tours from './Pages/Tours/TourPage';
import About from './Pages/About/AboutPage';
import Contact from './Pages/Contact/ContactPage';
import Loading from './Components/Loading/Loading'; // Import the Loading component

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      // Simulate loading of assets (e.g., images, data)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second loading time
      setIsLoading(false);
    };

    loadAssets();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route for any unmatched paths */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
