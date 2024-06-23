import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../services/api';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    };
    getCategories();
  }, []);

  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="categories">
        {categories.map(category => (
          <Link key={category.idCategory} to={`/menu/${category.strCategory}`} className="category-link">
            {category.strCategory}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
