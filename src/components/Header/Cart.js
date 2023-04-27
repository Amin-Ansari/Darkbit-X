import React, { useEffect, useRef } from "react";
import "./Cart.css";

const Cart = (props) => {
  const basketCartRef = useRef();
  return (
    <button
      type="button"
      className={`cart-button ${props.className ? props.className : ""}`}
    >
      سبد خرید <span>(0)</span>
    </button>
  );
};

export default Cart;
