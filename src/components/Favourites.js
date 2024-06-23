import React, { useState, useEffect } from 'react';
import MealDetail from './MealDetail';
import './Favourites.css';

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
          <li key={meal.idMeal}>
            <MealDetail meal={meal} onRemoveFavourite={() => removeFavourite(meal.idMeal)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
