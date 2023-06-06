import React from "react";
import "./GradientButton.css";

const GradientButton = (props) => {
  return (
    <button
      className={`gradient-button ${props.className ? props.className : ""}`}
      onClick={props.onBarsClicked || props.eventfnt}
    >
      <div className="gradient-bg"></div>
      <div className="grad-button-text">{props.children}</div>
    </button>
  );
};

export default GradientButton;
