import React from "react";
import EmailSubmit from "../../Body/EmailSubmit";
import "./FooterNavAndSubscription.css";

const FooterNavAndSubscription = (props) => {
  const navList = props.passedList;
  return (
    <div className="footer-nav-and-subscribe">
      <nav className="footer-nav">
        <ul className="footer-nav-list">
          {navList.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="subscription-section">
        <div>
          <h5 className="subscription-title">عضویت در خبرنامه</h5>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با از
            طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          </p>
          <form className="subscription-form">
            <input
              type={"email"}
              className="email-input"
              placeholder="ایمیل خود رو وارد نمایید"
            ></input>
            <button type={"button"}>عضویت</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterNavAndSubscription;
