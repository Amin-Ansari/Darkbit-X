import React, { useContext } from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";

const contextReducerFnt = (state, action) => {
  let plans = { ...state };
  console.log(plans);
  let exestingList = plans.plansList;

  if (action.type === "ADD") {
    if (exestingList.length) {
      alert("not empty");
      console.log(plans);
    } else {
      alert("empty");
      const list = [action.newPlan];
      plans = { plansList: list };
    }
  }
  if (action.type === "REMOVE") {
    plans.plansList.splice(action.planIndex, 1);
  }
  return plans;
};

const CartContextProvider = (props) => {
  const [contextReducer, reducerDispatch] = useReducer(contextReducerFnt, {
    plansList: [],
  });
  const addToList = (plan) => {
    reducerDispatch({ type: "ADD", newPlan: plan });
  };
  const removeFromList = (index) => {
    reducerDispatch({ type: "REMOVE", planIndex: index });
  };

  return (
    <CartContext.Provider
      value={{
        ...contextReducer,
        add: addToList,
        remove: removeFromList,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
