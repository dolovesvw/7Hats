import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import ToursSection from './Components/Tours/TourSection';
import Reviews from './Components/WebReviews/Reviews';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const LandingPage = () => (
  <div className="landing-container">
    <Navbar />
    <Header />
    <About />
    <ToursSection />
    <Reviews />
    <Contact />
    <Footer />
  </div>
);

export default LandingPage;
