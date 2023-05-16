import React from "react";
import "./FeatureThirdSection.css";
import { BsGear } from "react-icons/bs";
import ReadLink from "./ReadLink";

const FeatureThirdSection = (props) => {
  return (
    <div className="third-section">
      <div className="third-section-content">
        <span className="icon">
          <BsGear />
        </span>
        <h4> ادغام پذیری </h4>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
        </p>
        <ReadLink />
      </div>
    </div>
  );
};

export default FeatureThirdSection;
