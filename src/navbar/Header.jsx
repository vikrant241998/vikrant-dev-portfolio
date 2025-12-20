import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className="header">
      <div className="logo"><NavLink to="/"> Portfolio </NavLink></div>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
        <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
        <NavLink to="/service" onClick={() => setIsMenuOpen(false)}>Service</NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
      </nav>

      <div id="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon 
          icon={faBars} 
        />
      </div>
    </header>
  );
};

export default Header;