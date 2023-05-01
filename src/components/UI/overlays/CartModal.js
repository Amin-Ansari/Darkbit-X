import React from "react";
import "./CartModal.css";
import GradientButton from "../GradientButton";
import { FiX } from "react-icons/fi";

const CarModal = (props) => {
  return (
    <div className="cart-modal">
      <header className="modal-header">
        <h3>سبد خرید شما</h3>
        <span onClick={props.closeModal}>
          <FiX />
        </span>
      </header>
      <div className="modal-body">
        <p>سبد خرید شما خالی می باشد</p>
        <GradientButton>شروع خرید</GradientButton>
      </div>
    </div>
  );
};

export default CarModal;
