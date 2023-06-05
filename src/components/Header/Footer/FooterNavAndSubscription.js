import React from "react";
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
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default FooterNavAndSubscription;
