import React from "react";
import AvatarImage from "./AvatarImage";

import "./FeedBackCart.css";

const FeedBackCart = (props) => {
  return (
    <div className="cart-wrapper">
      <div className="cart-content">
        <div className="cart-avatar">
          <AvatarImage imageSource={props.imageSource} />
        </div>
        <div className="cart-body">
          <h5 className="user-quote">{props.qoute} </h5>
          <p className="extra-dec">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
          </p>
        </div>
        <div className="cart-footer">
          <p className="user-job">
            <span>علی احمدی</span>، مدیر بازرگانی
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default React.memo(FeedBackCart);
