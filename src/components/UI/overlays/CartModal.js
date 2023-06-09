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
    let firstPhaseArray = [];
    const collinedPrice = [];

    do {
      if (arraiedPrice.length >= 2) {
        firstPhaseArray = arraiedPrice.splice(-3, 3);
        firstPhaseArray = firstPhaseArray.join("");
        collinedPrice.unshift(firstPhaseArray);
        firstPhaseArray = [];
      } else {
        firstPhaseArray = arraiedPrice.splice(-3, 2);
        firstPhaseArray = firstPhaseArray.join("");
        collinedPrice.unshift(firstPhaseArray);
        firstPhaseArray = [];
      }
    } while (arraiedPrice.length > 0);
    return collinedPrice.join(",");
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
              جمع کل:{" "}
              <p className="total-price-cart">
                {putCollons()}
                <span className="total-toman">تومان</span>
              </p>
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
