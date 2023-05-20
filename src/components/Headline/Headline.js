import React from "react";
import FullWidthContainer from "../UI/FullWidthContainer";
import Container from "../UI/Container";
import useOnScreen from "../APIs/useOnScreen";
import "./Headline.css";

const Headline = (props) => {
  const { heading } = props;
  const { children } = props;

  return (
    <div className="headline">
      <h3>{heading}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Headline;
