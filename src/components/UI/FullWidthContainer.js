import React from "react";
import "./FullWidthContainer.css";

const FullWidthContainer = (props) => {
  return (
    <div
      className={`container-fluid ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default FullWidthContainer;
