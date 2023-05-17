import React from "react";
import classes from "./FeatureSection.module.css";
import { BsBarChart } from "react-icons/bs";
import sectionImage from "../../assets/images/Advanced analytcs.svg";
import FeatureHeadingIcon from "./FeatureHeadingIcon";
import FeatureHeading from "./FeatureHeading";
import ReadLink from "./ReadLink";

const FeatureSection = (props) => {
  return (
    <div className={classes["feature-analytics"]}>
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
