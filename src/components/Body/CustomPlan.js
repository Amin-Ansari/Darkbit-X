import React from "react";
import PlanListItem from "./PlanListItem";
import { TbUser } from "react-icons/tb";
import { TbDeviceAnalytics } from "react-icons/tb";
import { TbEye } from "react-icons/tb";
import { TbBrandHipchat } from "react-icons/tb";
import useOnScreen from "../APIs/useOnScreen";
import "./CustomPlan.css";

const CustomPlan = (props) => {
  const [customPlanRef, isCustomPlanVisible] = useOnScreen();
  return (
    <div
      className={`custom-plan-contaner ${
        isCustomPlanVisible ? "show-custom-plan" : ""
      }`}
      ref={customPlanRef}
    >
      <div className="custom-plan">
        <div className="context-section">
          <h4>پلن اختصاصی</h4>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
          </p>
          <div className="special-plan-features">
            <ul>
              <PlanListItem itemContent="تعداد ادمین های دلخواه">
                <span className="item-icons">
                  <TbUser />
                </span>
              </PlanListItem>
              <PlanListItem itemContent="امکان پت با پشتیبانی">
                <span className="item-icons">
                  <TbBrandHipchat />
                </span>
              </PlanListItem>
              <PlanListItem itemContent="تعداد بازدید های بینهایت">
                <span className="item-icons">
                  <TbEye />
                </span>
              </PlanListItem>
              <PlanListItem itemContent=" گزارش های به دلخواه">
                <span className="item-icons">
                  <TbDeviceAnalytics />
                </span>
              </PlanListItem>
            </ul>
          </div>
        </div>
        <div className="button-container">
          <a href="tel:+989059760318" className="contact-us-link">
            ارتباط با ما
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomPlan;
