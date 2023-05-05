import React from "react";
import Container from "../UI/Container";
import "./ImageSection.css";
const gradientBG = require("../../assets/images/Untitled.png");

const ImageSection = (props) => {
  return (
    <Container>
      <div className="image-section">
        <div className="gradient-image">
          <img src={gradientBG} />
        </div>
      </div>
    </Container>
  );
};

export default ImageSection;
