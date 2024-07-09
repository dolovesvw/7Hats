import Navbar from '../Navbar/Navbar.js';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="branding">
        <h1>7Hats</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
