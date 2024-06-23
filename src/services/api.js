import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/categories.php`);
  return response.data.categories;
};

export const fetchMealsByCategory = async (category) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals;
};

export const fetchMealDetail = async (id) => {
  const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
  return response.data.meals[0];
};

export const fetchRandomMeal = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await response.json();
  return data.meals[0];
};

