import React, { useContext } from "react";
import "./CartModal.css";
import GradientButton from "../GradientButton";
import CartContext from "../../Context/CartContext";
import { FiX } from "react-icons/fi";

const CarModal = (props) => {
  const cartCtx = useContext(CartContext);

  const contextPlacer = () => {
    if (!cartCtx.plansList.length) {
      return (
        <>
          <p>سبد خرید شما خالی می باشد</p>
          <GradientButton>شروع خرید</GradientButton>
        </>
      );
    } else {
      return <div>hello world</div>;
    }
  };
  return (
    <div className="cart-modal">
      <header className="modal-header">
        <h3>سبد خرید شما</h3>
        <span onClick={props.closeModal}>
          <FiX />
        </span>
      </header>
      <div className="modal-body">{contextPlacer()}</div>
    </div>
  );
};

export default CarModal;
