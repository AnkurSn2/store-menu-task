// src/components/Meals.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealsByCategory } from '../services/api';
import MealDetail from './MealDetail';
import './Meals.css';

const Meals = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      console.log(`Fetching meals for category: ${category}`);
      const mealsData = await fetchMealsByCategory(category);
      console.log('Fetched meals data:', mealsData);
      setMeals(mealsData);
    };
    getMeals();
  }, [category]);

  return (
    <div className="meals">
      <h1>Meals in {category}</h1>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>
            <MealDetail meal={meal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;
