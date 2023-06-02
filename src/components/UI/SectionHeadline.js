import React from "react";
import useOnScreen from "../APIs/useOnScreen";
import classes from "./SectionHeadline.module.css";

const SectionHeadline = (props) => {
  const [headlineRef, isHeadlineShown] = useOnScreen({ threshold: 0.8 });
  const { title } = props;
  const { children: description } = props;
  return (
    <div
      className={`${classes["headline-wrapper"]} ${
        isHeadlineShown ? classes["show-headline"] : ""
      }`}
      ref={headlineRef}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default SectionHeadline;
