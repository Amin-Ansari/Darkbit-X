import React, { useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CarModal from "../UI/overlays/CartModal";
import Modal from "../UI/overlays/Modal";
import { useState } from "react";
import "./Cart.css";

const Cart = (props) => {
  const [cartState, updateCartState] = useState(false);

  const setCartToTrue = () => {
    updateCartState(true);
  };
  const setCartToFalse = () => {
    updateCartState(false);
  };
  return (
    <>
      {cartState && (
        <Modal onClosingModal={setCartToFalse}>
          <CarModal closeModal={setCartToFalse} />
        </Modal>
      )}
      <button
        type="button"
        className={`cart-button ${props.className ? props.className : ""}`}
        onClick={setCartToTrue}
      >
        {props.children}{" "}
        <span className="stock-icon">
          (0)
          <FaShoppingCart />
        </span>
      </button>
    </>
  );
};

export default Cart;
