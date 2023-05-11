import React, { useEffect, useRef, useState } from "react";
import FullWidthContainer from "../UI/FullWidthContainer";
import BrandImage from "./BrandImage";
import useOnScreen from "../APIs/useOnScreen";
import "./BrandBar.css";

const BrandBar = (props) => {
  const [brandRef, isBrandvisible] = useOnScreen({ threshold: 1.0 });
  const [scrollDirection, setDirection] = useState(true);
  let scrollValue = 0;
  useEffect(() => {
    let leftScrollTimer;
    const barScrollableWidth =
      brandRef.current.clientWidth - brandRef.current.scrollWidth;
    const leftScroll = () => {
      if (isBrandvisible) {
        brandRef.current.scrollLeft = scrollValue;
        scrollValue = scrollValue - 3;
      }
    };
    leftScrollTimer = setInterval(leftScroll, 150);
  }, [scrollValue, scrollDirection, isBrandvisible]);

  return (
    <FullWidthContainer className="relative-wraper">
      <div className="shadow-box dark-box1"></div>
      <div className="shadow-box dark-box2"></div>
      <h4 className="brands-heading">برند های مطرح</h4>
      <div
        className={`brand-container ${isBrandvisible ? "bar-visible" : ""}`}
        ref={brandRef}
      >
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ac5eb2ee132bb4c80_logo-6-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71b4159dae85bc529de_logo-3-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ad5c47e7a413f61c8_logo-2-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71aa23a6e4511f1922d_logo-4-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ab7e98c290218cee8_logo-1-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ad5c47e7a413f61c8_logo-2-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71aa23a6e4511f1922d_logo-4-darkbit-template.svg" />
        <BrandImage url="https://assets.website-files.com/623a72cac2795a8386c05faa/623ba71ac5eb2ee132bb4c80_logo-6-darkbit-template.svg" />
      </div>
    </FullWidthContainer>
  );
};

export default BrandBar;
