import React, { useContext } from "react";
import "./CartModal.css";
import GradientButton from "../GradientButton";
import PlanRemoveButton from "./PlanRemoveButton";
import CartContext from "../../Context/CartContext";
import { FiX } from "react-icons/fi";

const CarModal = (props) => {
  const cartCtx = useContext(CartContext);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (let item of cartCtx.plansList) {
      totalPrice = Number(item.price.split(",").join("")) + totalPrice;
    }
    return totalPrice;
  };
  const putCollons = () => {
    const arraiedPrice = String(calculateTotalPrice()).split("");
    let collinedPrice = [];
    do {
      if (arraiedPrice.length >= 2) {
        let portion = arraiedPrice.splice(arraiedPrice.length - 1, 3);
        collinedPrice.push(portion);
        portion = "";
      } else {
        let portion = arraiedPrice.splice(arraiedPrice.length - 1, 2);
        collinedPrice.push(portion);
        portion = "";
      }
    } while (arraiedPrice.length > 0);

    return collinedPrice.reverse().join(",");
  };
  const contextPlacer = () => {
    const plansInCart = cartCtx.plansList;
    if (!cartCtx.plansList.length) {
      return (
        <>
          <p>سبد خرید شما خالی می باشد</p>
          <GradientButton>شروع خرید</GradientButton>
        </>
      );
    } else {
      return (
        <div className="plans-stock">
          <div className="added-plans-container">
            <ul>
              {plansInCart.map((item, index) => (
                <li key={index} className="plan-item-inCart">
                  <div>
                    <h5 className="plan-title-cart">{item.title}</h5>
                    <p>
                      قیمت: <span className="price-cart">{item.price}</span>
                      <span className="toman-cart">تومان</span>
                    </p>
                  </div>
                  <div>
                    <PlanRemoveButton keyIndex={index}>حذف</PlanRemoveButton>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="total-price-container">
            <div className="total-section">
              جمع کل: <p className="total-price-cart">{putCollons()}</p>
            </div>
            <GradientButton>تسویه حساب</GradientButton>
          </div>
        </div>
      );
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
