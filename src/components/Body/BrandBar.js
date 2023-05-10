import React from "react";
import FullWidthContainer from "../UI/FullWidthContainer";
import BrandImage from "./BrandImage";
import "./BrandBar.css";

const BrandBar = (props) => {
  return (
    <FullWidthContainer className="relative-wraper">
      <div className="shadow-box dark-box1"></div>
      <div className="shadow-box dark-box2"></div>
      <h4 className="brands-heading">برند های مطرح</h4>
      <div className="brand-container">
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
      </div>
    </FullWidthContainer>
  );
};

export default BrandBar;
