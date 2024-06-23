// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <div className="home-buttons">
        <Link to="/menu">Menu</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/meal-generator">Random Meal</Link>
      </div>
    </div>
  );
};

export default Home;
