import React from "react";
import "./BrandImage.css";

const BrandImage = (props) => {
  return <img className="brand-image" src={props.url} />;
};

export default BrandImage;
