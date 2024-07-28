import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSublist, setShowSublist] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Alaziz</div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/find-donor">Find Donor</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li
        onMouseEnter={() => setShowSublist(true)}
        onMouseLeave={() => setShowSublist(false)}
      >
        <Link to="/register-as-donor">Register Now</Link>
        {showSublist && (
          <ul className="sublist">
            <li>
              <Link to="/register-as-organization">Register As Organization</Link>
            </li>
            <li>
              <Link to="/register-as-donor">Register As Donor</Link>
            </li>
          </ul>
        )}
      </li>
        </ul>
      </nav>
      <div className="login">
        <button>
        
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Log In
          </Link>
        </button>
      </div>
      <div className="menu-button" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Navbar;
