import React from "react";
import "./FeatureHeadingIcon.css";

const FeatureHeadingIcon = (props) => {
  const { children } = props;
  return (
    <div className={`icon ${props.className ? props.className : ""}`}>
      {children}
    </div>
  );
};
{
  /* <BsBarChart /> */
}
export default FeatureHeadingIcon;
