import React from 'react';
import './MealDetail.css';
import { Card } from '@mui/material';

const MealDetail = ({ meal, onRemoveFavourite }) => {
  const toggleFavourite = () => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const isFavourite = storedFavourites.some(fav => fav.idMeal === meal.idMeal);

    let updatedFavourites;
    if (isFavourite) {
      updatedFavourites = storedFavourites.filter(fav => fav.idMeal !== meal.idMeal);
    } else {
      updatedFavourites = [...storedFavourites, meal];
    }

    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <div>
    <Card className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h4>{meal.strMeal}</h4>
      <button className="fav-button" onClick={toggleFavourite}>❤</button>
      {onRemoveFavourite && (
        <button className="remove-button" onClick={onRemoveFavourite}>
          Remove
        </button>
      )}
    </Card>
    </div>
  );
};

export default MealDetail;
