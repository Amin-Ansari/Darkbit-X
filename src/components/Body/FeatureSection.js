import React from "react";
import classes from "./FeatureSection.module.css";
import { BsBarChart } from "react-icons/bs";
import sectionImage from "../../assets/images/Advanced analytcs.svg";
import FeatureHeadingIcon from "./FeatureHeadingIcon";
import useOnScreen from "../APIs/useOnScreen";
import FeatureHeading from "./FeatureHeading";
import ReadLink from "./ReadLink";

const FeatureSection = (props) => {
  const [featureRef, isFeatureVisible] = useOnScreen({ threshold: 1.0 });

  return (
    <div
      className={`${classes["feature-analytics"]} ${
        isFeatureVisible ? classes["show-feature"] : ""
      }`}
      ref={featureRef}
    >
      <div className={classes["text-section"]}>
        <sectionImage>
          <FeatureHeadingIcon>
            <BsBarChart />
          </FeatureHeadingIcon>
        </sectionImage>
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
  );
};

export default FeatureSection;
