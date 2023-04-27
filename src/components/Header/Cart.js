import React, { useEffect, useRef } from "react";
import "./Cart.css";

const Cart = (props) => {
  const basketCartRef = useRef();
  return (
    <button type="button" className="cart-button large-sc-cart">
      سبد خرید <span>(100)</span>
    </button>
  );
};

export default Cart;
