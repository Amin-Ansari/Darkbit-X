import React from "react";
import Container from "./Container";
import FullWidthContainer from "./FullWidthContainer";
import "./BodySection.css";

const BodySection = (props) => {
  return (
    <FullWidthContainer className="full-container-hidden">
      <Container
        className={`gird-container body-section-margin ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </Container>
    </FullWidthContainer>
  );
};

export default BodySection;
