import React from "react";
import GradientButton from "../UI/GradientButton";
import useOnScreen from "../APIs/useOnScreen";
import "./FeaturesButton.css";

const FeaturesButton = (props) => {
  const [containerRef, isContainerVisible] = useOnScreen({ threshold: 1.0 });
  return (
    <div
      className={`buttons-of-features ${
        isContainerVisible ? "show-container" : ""
      }`}
      ref={containerRef}
    >
      <GradientButton>برسی موارد</GradientButton>
      <button className="outline-button" type="button">
        مشاهده تمامی ویژگی ها
      </button>
    </div>
  );
};

export default FeaturesButton;
