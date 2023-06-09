import React, { useRef, useState, useReducer, useEffect } from "react";
import FeedBackCart from "./FeedBackCart";
import "./FeedCartContainer.css";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import useOnScreen from "../APIs/useOnScreen";
const avatar1 = require("../../assets/images/Avatarts/1.jpg");
const avatar2 = require("../../assets/images/Avatarts/2.jpg");
const avatar3 = require("../../assets/images/Avatarts/3.jpg");
const avatar4 = require("../../assets/images/Avatarts/2.jpg");

const FeedCartContainer = (props) => {
  const [sliderRef, isSliderVisible] = useOnScreen({ threshold: 0.09 });
  const [rightValue, setrightValue] = useState(0);
  const [clientWidth, setWidth] = useState(0);

  const myRef = useRef();
  const next = () => {
    const slideWidth = myRef.current.firstChild.clientWidth;
    setWidth(slideWidth);
    setrightValue((rightValue) => rightValue - slideWidth);
  };
  const previous = () => {
    const slideWidth = myRef.current.firstChild.clientWidth;
    setWidth(slideWidth);
    setrightValue((rightValue) => rightValue + slideWidth);
  };

  return (
    <div
      className={`cart-container ${isSliderVisible ? "show-feeds" : ""}`}
      ref={sliderRef}
    >
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
        <button
          className="slider-button"
          onClick={previous}
          style={{
            display: `${rightValue == 0 ? "none" : "block"}`,
          }}
        >
          <span>
            <HiArrowLongRight />
          </span>
        </button>
        <button
          className="slider-button"
          onClick={next}
          style={{
            display: `${
              `-${clientWidth * 3}` == `${rightValue}` ? "none" : "block"
            }`,
          }}
        >
          <span>
            <HiArrowLongLeft />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FeedCartContainer;
