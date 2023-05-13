import React from "react";
import Container from "../UI/Container";
import FloatingShapes from "./FloatingShapes";
import "./ImageSection.css";
import useOnScreen from "../APIs/useOnScreen";
const gradientBG = require("../../assets/images/Untitled.png");
const firstSectionImage = require("../../assets/images/first-section-big-image.png");

const ImageSection = (props) => {
  const [bgRef, isBgVisible] = useOnScreen({ threshold: 0.2 });
  const [imageRef, isImageVisible] = useOnScreen({
    threshold: 0.05,
  });

  return (
    <Container>
      <div className="image-section">
        <div className={`gradient-image`}>
          <img
            src={gradientBG}
            className={`gradient-background  ${
              isBgVisible ? "opacity-full" : ""
            }`}
            ref={bgRef}
          />
          <img
            src={firstSectionImage}
            className={`image-style ${isImageVisible ? "image-visible" : ""}`}
            ref={imageRef}
          />
          <FloatingShapes />
        </div>
      </div>
    </Container>
  );
};

export default ImageSection;
