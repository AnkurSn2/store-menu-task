// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/favourites">My Favourites</NavLink></li>
        <li><NavLink to="/meal-generator">Meal Generator</NavLink></li>
        <li><NavLink to="/about-me">About Me</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
