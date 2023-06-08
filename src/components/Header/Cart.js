import React, { useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CarModal from "../UI/overlays/CartModal";
import CartContext from "../Context/CartContext";
import Modal from "../UI/overlays/Modal";
import { useState, useContext } from "react";
import "./Cart.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [cartState, updateCartState] = useState(false);
  useEffect(() => {
    if (cartState == false && ctx.plansList.length === 1) {
      updateCartState(true);
    }
  }, [ctx.plansList]);

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
          ({ctx.plansList.length})
          <FaShoppingCart />
        </span>
      </button>
    </>
  );
};

export default Cart;
