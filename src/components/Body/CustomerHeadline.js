import React from "react";
import useOnScreen from "../APIs/useOnScreen";
import GradientButton from "../UI/GradientButton";
import "./CustomerHeadline.css";

const CustomerHeadline = (props) => {
  const [feedBackRef, feedBackShow] = useOnScreen({ threshold: 0.09 });
  return (
    <div
      className={`feedBackHeadline ${feedBackShow ? "show-feed-back" : ""}`}
      ref={feedBackRef}
    >
      <h4 className="customer-feed-title">نظرات کاربران ما را بخوانید.</h4>
      <p className="feed-desc">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
      <GradientButton className="y-margin">شروع کنید</GradientButton>
      <div className="hider"></div>
    </div>
  );
};

export default CustomerHeadline;
