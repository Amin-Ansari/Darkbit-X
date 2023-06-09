import React from "react";
import PlanListItem from "./PlanListItem";
import "./PlanExtraList.css";

const PlanExtraList = (props) => {
  return <ul className="plan-extras-list">{props.children}</ul>;
};

export default PlanExtraList;
