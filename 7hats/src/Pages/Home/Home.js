// Home.js
import Navbar from '../../Components/Navbar/Navbar.js';
import Header from '../../Components/Header/Header';
import About from '../../Components/About/About';
import { ToursSection } from '../../Components/Tours/TourSection'; // Adjusted import to use named export
import Footer from '../../Components/Footer/Footer';
import ToTheTop from '../../Components/BT/ToTheTop.js';

const Home = () => {
    return (
        <div className="landing-container">
            <Navbar />
            <Header />
            <About />
            <ToursSection />
            <Footer />
            <ToTheTop />
        </div>
    );
};

export default Home;
