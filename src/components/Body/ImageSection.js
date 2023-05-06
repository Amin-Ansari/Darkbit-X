import React from "react";
import Container from "../UI/Container";
import "./ImageSection.css";
const gradientBG = require("../../assets/images/Untitled.png");
const firstSectionImage = require("../../assets/images/first-section-big-image.png");

const ImageSection = (props) => {
  return (
    <Container>
      <div className="image-section">
        <div className="gradient-image">
          <img src={gradientBG} className="gradient-background" />
          <img src={firstSectionImage} className="image-style" />
        </div>
      </div>
    </Container>
  );
};

export default ImageSection;
