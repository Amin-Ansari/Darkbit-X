import React from "react";
import NavLink from "./NavLink";
import "./NavLink.css";
import "./MobileNav.css";
import { FiChevronDown } from "react-icons/fi";
import Megamenu from "./Megamenu";
import GradientButton from "../UI/GradientButton";

const MobileNav = (props) => {
  return (
    <div className={`mobile-nav ${props.className}`}>
      <ul>
        <NavLink className="mobile-nav-link">
          <span>خانه</span>
        </NavLink>
        <NavLink className="mobile-nav-link">
          <span>درباره ما</span>
        </NavLink>
        <NavLink className="mobile-nav-link">
          <span>بلاگ</span>
        </NavLink>
        <NavLink className="resources">
          <span>منابع</span>
          <span className="angle-icon">
            <FiChevronDown />
          </span>
        </NavLink>
      </ul>
      <GradientButton className="mobile-gB">شروع خرید</GradientButton>
    </div>
  );
};

export default MobileNav;
