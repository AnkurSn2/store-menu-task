import React, { useState, useEffect } from 'react';
import MealDetail from './MealDetail';
import './Favourites.css';
import Card from '@mui/material/Card';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  const removeFavourite = (mealId) => {
    const updatedFavourites = favourites.filter(meal => meal.idMeal !== mealId);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <div className="favourites">
      <h1>My Favourite Meals</h1>
      <ul>
        {favourites.map(meal => (
          <div key={meal.idMeal} className='fav-meals'>
            <MealDetail meal={meal} onRemoveFavourite={() => removeFavourite(meal.idMeal)} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
