import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Food.css";
const Food = (props) => {
  const { strMeal, strCategory, strMealThumb } = props.meal;
  const { handleSelected } = props;

  return (
    <div className="food">
      <img src={strMealThumb} alt="" />
      <h3>Food name : {strMeal}</h3>
      <h3>Food category:{strCategory}</h3>
      <button className="select-btn" onClick={() => handleSelected(strMeal)}>
        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Select
      </button>
    </div>
  );
};

export default Food;
