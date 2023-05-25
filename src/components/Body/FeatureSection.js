import React from "react";
import classes from "./FeatureSection.module.css";
import { BsBarChart } from "react-icons/bs";
import FeatureHeadingIcon from "./FeatureHeadingIcon";
import useOnScreen from "../APIs/useOnScreen";
import FeatureHeading from "./FeatureHeading";
import ReadLink from "./ReadLink";
import sectionImage from "../../assets/images/Advanced_analytcs.svg";

const FeatureSection = (props) => {
  const [analyticsRef, isAnalyticsVisible] = useOnScreen({ threshold: 0.5 });

  return (
    <div
      ref={analyticsRef}
      className={`${classes["feature-container"]} ${
        isAnalyticsVisible ? classes["show-feature"] : ""
      }`}
    >
      <div className={`${classes["feature-analytics"]} `}>
        <div className={classes["text-section"]}>
          <FeatureHeadingIcon>
            <BsBarChart />
          </FeatureHeadingIcon>
          <FeatureHeading>پیشرفته ترین ابزار آنالیز</FeatureHeading>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
          </p>
          <ReadLink />
        </div>
        <div className={classes["image-section"]}>
          <img src={sectionImage} />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
