import React from "react";
import "./FeatureThirdSection.css";
import FeatureHeading from "./FeatureHeading";
import useOnScreen from "../APIs/useOnScreen";
import { BsGear } from "react-icons/bs";
import ReadLink from "./ReadLink";

const FeatureThirdSection = (props) => {
  const [featureRef, isFeatureVisible] = useOnScreen({ threshold: 1.0 });

  return (
    <div
      className={`third-section ${isFeatureVisible ? "show-feature" : ""}`}
      ref={featureRef}
    >
      <div className="third-section-content">
        <span className="icon">
          <BsGear />
        </span>
        <FeatureHeading>ادغام پذیری</FeatureHeading>
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
