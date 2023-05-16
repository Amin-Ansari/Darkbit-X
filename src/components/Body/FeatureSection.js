import React from "react";

import classes from "./FeatureSection.module.css";
import { BsBarChart } from "react-icons/bs";
import { HiArrowSmLeft } from "react-icons/hi";
import sectionImage from "../../assets/images/Advanced analytcs.svg";

const FeatureSection = (props) => {
  return (
    <div className={classes["feature-analytics"]}>
      <div className={classes["text-section"]}>
        <div className={classes.icon}>
          <BsBarChart />
        </div>
        <h4>پیشرفته ترین ابزار آنالیز</h4>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
        </p>
        <a href="#" className={classes["read-more-link"]}>
          بیشتر بخوانید{" "}
          <span>
            <HiArrowSmLeft />
          </span>
        </a>
      </div>
      <div className={classes["image-section"]}>
        <img src={sectionImage} />
      </div>
    </div>
  );
};

export default FeatureSection;