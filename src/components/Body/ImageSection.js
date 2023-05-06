import React from "react";
import Container from "../UI/Container";
import FloatingShapes from "./FloatingShapes";
import "./ImageSection.css";
const gradientBG = require("../../assets/images/Untitled.png");
const firstSectionImage = require("../../assets/images/first-section-big-image.png");

const ImageSection = (props) => {
  return (
    <Container className="red-bg">
      <div className="image-section">
        <div className="gradient-image">
          <img src={gradientBG} className="gradient-background" />
          <img src={firstSectionImage} className="image-style" />
          <FloatingShapes />
        </div>
      </div>
    </Container>
  );
};

export default ImageSection;
