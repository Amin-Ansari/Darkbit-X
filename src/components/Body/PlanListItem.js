import React from "react";
import "./PlanListItem.css";

const PlanListItem = (props) => {
  return (
    <li className="plan-list-item">
      <span>{props.children}</span>
      {props.itemContent}
    </li>
  );
};

export default PlanListItem;
