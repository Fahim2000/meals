import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import "./Foods.css";
const Foods = () => {
  const [meals, setMeals] = useState([]);
  const [selected, setSelected] = useState("");
  const handleSelected = (food) => {
    setSelected(food);
  };
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div className="food-container">
      <div className="food-details">
        {meals.map((meal) => (
          <Food
            key={meal.idMeal}
            meal={meal}
            handleSelected={handleSelected}
          ></Food>
        ))}
      </div>
      <div>
        <Cart slected={selected}></Cart>
      </div>
    </div>
  );
};

export default Foods;
