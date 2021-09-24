import React from "react";
import "./Cart.css";
const Cart = (props) => {
  console.log(props.slected);
  return (
    <div className="selected-meals">
      <h3>Selected meals</h3>
      <p>
        meals selected : <span className="dark">{props.slected}</span>{" "}
      </p>
    </div>
  );
};

export default Cart;
