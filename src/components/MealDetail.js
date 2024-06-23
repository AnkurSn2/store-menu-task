import React from 'react';
import './MealDetail.css';

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
    <div className="meal-detail">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
      <button className="fav-button" onClick={toggleFavourite}>
        ❤
      </button>
      {onRemoveFavourite && (
        <button className="remove-button" onClick={onRemoveFavourite}>
          Remove
        </button>
      )}
    </div>
  );
};

export default MealDetail;
