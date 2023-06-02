import React from "react";
import SectionHeadline from "../UI/SectionHeadline";
import FloatingShapes from "./FloatingShapes";
import Plan from "./Plan";
import "./PricingSection.css";

const PricingSection = (props) => {
  return (
    <div className="pricing-section">
      <FloatingShapes />
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
            "امکان استفاده همزمان 25 ادمین",
            "تمامی امکانات آنالیز",
            "2,500 گزارش روزانه",
            "پشتیبانی عادی",
          ]}
        ></Plan>
        <Plan
          planTitle="طلایی"
          price="750,000"
          userNumber="50"
          hours="3,000"
          features={[
            "امکان استفاده همزمان 50 ادمین",
            "تمامی امکانات پلن ساده",
            "تمامی امکانات آنالیز",
            "پشتیبانی همه روزه",
          ]}
        ></Plan>
        <Plan
          planTitle="ساده"
          price="1,100,000"
          userNumber="75"
          hours="5,000"
          features={[
            "امکان استفاده همزمان 75 ادمین",
            "5,000 گزارش روزانه",
            "تمامی امکانات آنالیز",
            "پشتیبانی  VIP",
          ]}
        ></Plan>
      </div>
    </div>
  );
};

export default PricingSection;
