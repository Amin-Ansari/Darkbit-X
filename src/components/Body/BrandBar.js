import React, { useEffect, useRef, useState } from "react";
import FullWidthContainer from "../UI/FullWidthContainer";
import BrandImage from "./BrandImage";
import useOnScreen from "../APIs/useOnScreen";
import "./BrandBar.css";
import Container from "../UI/Container";
const BrandBar = (props) => {
  const [brandRef, isBrandvisible] = useOnScreen({ threshold: 1.0 });
  const [scrollDirection, setDirection] = useState(true);
  const [scrollableWidth, setWidth] = useState(0);
  let leftTimer;
  let rightTimer;
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    setWidth(brandRef.current.clientWidth - brandRef.current.scrollWidth);

    leftTimer =
      isBrandvisible &&
      setTimeout(() => {
        scrollDirection
          ? setScrollValue(scrollValue - 3)
          : setScrollValue(scrollValue + 3);

        brandRef.current.scrollLeft = scrollValue;
      }, 100);

    return () => {
      if (scrollableWidth != 0) {
        if (scrollValue <= scrollableWidth) {
          clearTimeout(leftTimer);
          setDirection(false);
        }
        if (scrollValue >= 0) {
          clearTimeout(leftTimer);
          setDirection(true);
        }
      } else {
        clearTimeout(leftTimer);
      }
    };
  }, [isBrandvisible, scrollValue, scrollDirection]);

  return (
    <FullWidthContainer className="relative-wraper">
      <Container>
        <div className="shadow-box-brand dark-box1"></div>
        <div className="shadow-box-brand dark-box2"></div>
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
      </Container>
    </FullWidthContainer>
  );
};

export default BrandBar;
