import React from "react";
import Container from "./Container";
import FullWidthContainer from "./FullWidthContainer";
import "./BodySection.css";

const BodySection = (props) => {
  return (
    <FullWidthContainer>
      <Container className="gird-container body-section-margin">
        {props.children}
      </Container>
    </FullWidthContainer>
  );
};

export default BodySection;
