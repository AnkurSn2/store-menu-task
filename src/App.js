// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Favourites from './components/Favourites';
import MealGenerator from './components/MealGenerator';
import AboutMe from './components/AboutMe';
import Meals from './components/Meals';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/meal-generator" element={<MealGenerator />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/menu/:category" element={<Meals />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
