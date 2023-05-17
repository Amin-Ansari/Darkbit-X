import React from "react";
import "./FeatureHeading.css";

const FeatureHeading = (props) => {
  const { children } = props;
  return <h4 className="feature-heading">{children}</h4>;
};

export default FeatureHeading;
