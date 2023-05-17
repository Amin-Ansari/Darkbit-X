import React from "react";
import "./FeatureSecondSection.css";
import ReadLink from "./ReadLink";
import FeatureHeadingIcon from "./FeatureHeadingIcon";
import FeatureHeading from "./FeatureHeading";
import { BsFileText } from "react-icons/bs";

const FeatureSecondSection = (props) => {
  return (
    <div className="second-feature-section">
      <div className="feature-content">
        <div className="text-content">
          <FeatureHeadingIcon>
            <BsFileText />
          </FeatureHeadingIcon>
          <FeatureHeading>گزارش های اتوماتیک</FeatureHeading>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
          </p>
          <ReadLink />
        </div>
        <div className="image-content"></div>
      </div>
    </div>
  );
};

export default FeatureSecondSection;
