import React, { Children } from "react";
import "./MegamenuUi.css";

const MegamenuUi = (props) => {
  return <ul className="mega-ul">{props.children}</ul>;
};

export default MegamenuUi;
