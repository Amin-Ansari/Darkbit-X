import React from "react";
import "./FloatingShapes.css";
import Shape from "./Shape";
const shape1 = require("../../assets/images/shape-1.png");
const shape2 = require("../../assets/images/shape-2.png");
const shape3 = require("../../assets/images/shape-3.png");

const FloatingShapes = (props) => {
  return (
    <div className="shape-container">
      <Shape src={shape1} className="shape-style shape-1" />
      <Shape src={shape2} className="shape-style shape-2" />
      <Shape src={shape3} className="shape-style shape-3" />
    </div>
  );
};

export default FloatingShapes;
