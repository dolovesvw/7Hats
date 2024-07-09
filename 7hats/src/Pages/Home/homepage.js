import Header from '../../Components/Header/Header.js';
import Tours from '../../Components/Main/Tours/Tours.js';
import About from '../../Components/Main/About/About.js';
import Contact from '../../Components/Main/Contact/Contact.js';
import Footer from '../../Components/Footer/Footer.js';

function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Tours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
