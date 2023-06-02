import React from "react";
import PlanExtraList from "./PlanExtraList";
import PlanListItem from "./PlanListItem";
import { BiUser } from "react-icons/bi";
import { TbDeviceAnalytics } from "react-icons/tb";
import { AiOutlineCheck } from "react-icons/ai";
import "./Plan.css";
import GradientButton from "../UI/GradientButton";

const FeatureItem = (props) => {
  return (
    <div key={props.keyIndex}>
      <PlanListItem itemContent={`${props.itemValue}`}>
        <AiOutlineCheck />
      </PlanListItem>
    </div>
  );
};

const Plan = (props) => {
  const featureList = props.features;
  return (
    <div className="plan">
      <div className="plan-header">
        <h5 className="plan-title">{props.planTitle}</h5>
        <p className="plan-desc">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
      </div>
      <div className="plan-body">
        <div className="plan-price">
          <h6>
            {props.price}
            <span className="toman-price">تومان</span>
          </h6>
          <div className="facilities">
            <PlanExtraList>
              <PlanListItem itemContent={`${props.userNumber} ادمین همزمان`}>
                <BiUser />
              </PlanListItem>
              <PlanListItem itemContent={`${props.hours} ساعت آنالیز`}>
                <TbDeviceAnalytics />
              </PlanListItem>
            </PlanExtraList>
          </div>
        </div>
        <div className="plan-features">
          <PlanExtraList>
            {featureList.map((item, index) => (
              <FeatureItem keyIndex={index} itemValue={item} />
            ))}
          </PlanExtraList>
        </div>
        <div className="buy-button-wrapper">
          <GradientButton className="buy-button">
            افزودن به سبد خرید
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Plan;
