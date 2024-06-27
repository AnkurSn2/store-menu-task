import React, { useState } from 'react';
import { fetchRandomMeal } from '../services/api';
import './MealGenerator.css';
import Card from '@mui/material/Card';

const MealGenerator = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  const generateRandomMeal = async () => {
    const mealData = await fetchRandomMeal();
    setRandomMeal(mealData);
  };

  return (
    <div className="meal-generator">
      <h1>Random Meal Generator</h1>
      <button onClick={generateRandomMeal}>Generate Meal</button>
      {randomMeal && (
        <Card className="random-meal">
          <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
          <h2>{randomMeal.strMeal}</h2>
        </Card>
      )}
    </div>
  );
};

export default MealGenerator;
