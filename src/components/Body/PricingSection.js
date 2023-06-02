import React from "react";
import SectionHeadline from "../UI/SectionHeadline";
import Plan from "./Plan";
import "./PricingSection.css";

const PricingSection = (props) => {
  return (
    <>
      <SectionHeadline title="قیمت ها">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </SectionHeadline>
      <div className="pricing-plan-wrapper">
        <Plan
          planTitle="ساده"
          price="350,000"
          userNumber="25"
          hours="1,500"
          features={[
            "2,500 گزارش روزانه",
            "پشتیبانی عادی",
            "امکان استفاده همزمان 25 ادمین",
            "تمامی امکانات آنالیز",
          ]}
        ></Plan>
      </div>
    </>
  );
};

export default PricingSection;
