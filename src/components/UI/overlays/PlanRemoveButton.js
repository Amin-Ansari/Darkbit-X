import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";

const PlanRemoveButton = (props) => {
  const buttonCtx = useContext(CartContext);
  const removeThePlan = () => {
    buttonCtx.remove(props.keyIndex);
  };
  return <button onClick={removeThePlan}>{props.children}</button>;
};

export default PlanRemoveButton;
