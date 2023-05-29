import React, { useRef, useState } from "react";
import FeedBackCart from "./FeedBackCart";
import "./FeedCartContainer.css";
import GradientButton from "../UI/GradientButton";
import { TbUserExclamation } from "react-icons/tb";
import { FaLaptopHouse } from "react-icons/fa";
const avatar1 = require("../../assets/images/Avatarts/1.jpg");
const avatar2 = require("../../assets/images/Avatarts/2.jpg");
const avatar3 = require("../../assets/images/Avatarts/3.jpg");
const avatar4 = require("../../assets/images/Avatarts/1.jpg");

const FeedCartContainer = (props) => {
  const [rightValue, setrightValue] = useState(0);

  const myRef = useRef();
  const previous = () => {
    const slideWidth = myRef.current.firstChild.clientWidth;
    setrightValue((rightValue) => rightValue - slideWidth);
  };
  const next = () => {
    const slideWidth = myRef.current.firstChild.clientWidth;
    setrightValue((rightValue) => rightValue + slideWidth);
  };
  return (
    <div className="cart-container">
      <div className="shadow-box"></div>
      <div
        className="feed-carts"
        ref={myRef}
        style={{ right: `${rightValue}px` }}
      >
        <FeedBackCart
          imageSource={avatar1}
          qoute="بهترین ابزار آنالیز"
        ></FeedBackCart>
        <FeedBackCart
          imageSource={avatar2}
          qoute="سریعترین ابزار"
        ></FeedBackCart>
        <FeedBackCart
          imageSource={avatar3}
          qoute="مدرن ترین ابزار"
        ></FeedBackCart>
        <FeedBackCart
          imageSource={avatar4}
          qoute="بسیا پرکاربرد"
        ></FeedBackCart>
      </div>
      <div className="button-holder">
        <button className="slider-button" onClick={next}>
          P
        </button>
        <button className="slider-button" onClick={previous}>
          N
        </button>
      </div>
    </div>
  );
};

export default FeedCartContainer;
