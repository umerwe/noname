import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Blinks Consultant Logo" height="40" />
          </Link>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`} id="sideMenu">
        <div className="close-btn" onClick={toggleMenu}>×</div>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/services" onClick={toggleMenu}>Services</Link>
        <Link to="/blogs" onClick={toggleMenu}>Blogs</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>

      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} id="overlay" onClick={toggleMenu}></div>
    </>
  );
};

export default Navbar;