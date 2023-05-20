import React from "react";
import Container from "./Container";
import FullWidthContainer from "./FullWidthContainer";
import "./BodySection.css";

const BodySection = (props) => {
  return (
    <FullWidthContainer>
      <Container className="gird-container">{props.children}</Container>
    </FullWidthContainer>
  );
};

export default BodySection;
