import React from "react";
import FullWidthContainer from "../UI/FullWidthContainer";
import Container from "../UI/Container";
import useOnScreen from "../APIs/useOnScreen";
import "./Headline.css";

const Headline = (props) => {
  const [headingRef, isHeadingVisible] = useOnScreen({ threshold: 1.0 });
  const [pRef, isPVisible] = useOnScreen({ threshold: 1.0 });
  const { heading } = props;
  const { children } = props;

  return (
    <div className="headline">
      <h3
        ref={headingRef}
        className={`${isHeadingVisible ? "show-headline" : ""}`}
      >
        {heading}
      </h3>
      <p ref={pRef} className={`${isPVisible ? "show-headline" : ""}`}>
        {children}
      </p>
    </div>
  );
};

export default Headline;
