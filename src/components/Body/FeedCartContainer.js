import React from "react";
import FeedBackCart from "./FeedBackCart";
import "./FeedCartContainer.css";
const avatar1 = require("../../assets/images/Avatarts/1.jpg");
const avatar2 = require("../../assets/images/Avatarts/2.jpg");
const avatar3 = require("../../assets/images/Avatarts/3.jpg");
const avatar4 = require("../../assets/images/Avatarts/1.jpg");

const FeedCartContainer = (props) => {
  return (
    <div className="cart-container">
      <div className="shadow-box"></div>
      <FeedBackCart
        imageSource={avatar1}
        qoute="بهترین ابزار آنالیز"
      ></FeedBackCart>
      <FeedBackCart imageSource={avatar2} qoute="سریعترین ابزار"></FeedBackCart>
      <FeedBackCart
        imageSource={avatar3}
        qoute="مدرن ترین ابزار"
      ></FeedBackCart>
      <FeedBackCart imageSource={avatar4} qoute="بسیا پرکاربرد"></FeedBackCart>
    </div>
  );
};

export default FeedCartContainer;
