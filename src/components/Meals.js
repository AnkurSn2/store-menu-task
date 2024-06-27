import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealsByCategory } from '../services/api';
import MealDetail from './MealDetail';
import './Meals.css';
import Card from '@mui/material/Card';

const Meals = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const mealsData = await fetchMealsByCategory(category);
      setMeals(mealsData);
    };
    getMeals();
  }, [category]);

  return (
    <div className='meal-header'>
    <h1>Meals in {category}</h1>
    <div className="meals">
      {meals.map(meal => (
        <div key={meal.idMeal} >
            <MealDetail meal={meal}/>
          </div>
      ))}
    </div>
    </div>
  );
};

export default Meals;
