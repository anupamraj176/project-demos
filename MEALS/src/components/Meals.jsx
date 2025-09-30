import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css"; // Import CSS

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        console.log(response.data.meals);
        setItems(response.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const itemslist = items.map(({ idMeal, strMeal, strMealThumb }) => (
    <div key={idMeal} className="meal-card">
      <h2 className="meal-title">{strMeal}</h2>
      <p className="meal-id">Meal ID: {idMeal}</p>
      <img src={strMealThumb} alt={strMeal} className="meal-image" />
    </div>
  ));

  return <div className="meals-grid">{itemslist}</div>;
};

export default Meals;
