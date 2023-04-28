import React, { useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";

const Cart = (props) => {
  const basketCartRef = useRef();
  return (
    <button
      type="button"
      className={`cart-button ${props.className ? props.className : ""}`}
    >
      {props.children}{" "}
      <span className="stock-icon">
        (0)
        <FaShoppingCart />
      </span>
    </button>
  );
};

export default Cart;
