import React from "react";
import Container from "../UI/Container";
import "./ImageSection.css";
const gradientBG = require("../../assets/images/Untitled.png");
const firstSectionImage = require("../../assets/images/first-section-big-image.png");
const shape1 = require("../../assets/images/shape-1.png");
const shape2 = require("../../assets/images/shape-2.png");
const shape3 = require("../../assets/images/shape-3.png");

const ImageSection = (props) => {
  return (
    <Container className="red-bg">
      <div className="image-section">
        <div className="gradient-image">
          <img src={gradientBG} className="gradient-background" />
          <img src={firstSectionImage} className="image-style" />
          <div className="shape-container">
            <img src={shape1} className="shape-style shape-1" />
            <img src={shape2} className="shape-style shape-2" />
            <img src={shape3} className="shape-style shape-3" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageSection;
