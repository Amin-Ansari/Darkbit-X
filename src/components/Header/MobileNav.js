import React, { useState } from "react";
import NavLink from "./NavLink";
import "./NavLink.css";
import "./MobileNav.css";
import { FiChevronDown } from "react-icons/fi";
import GradientButton from "../UI/GradientButton";

const MobileNav = (props) => {
  const [submenuState, changeTheState] = useState(false);

  const toggleTheSubMenu = () => {
    submenuState ? changeTheState(false) : changeTheState(true);
  };

  return (
    <div className="mobile-nav-container">
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
          <NavLink onToggling={toggleTheSubMenu}>
            <span>منابع</span>
            <span className={`angle-icon ${submenuState ? "rotate-icon" : ""}`}>
              <FiChevronDown />
            </span>
          </NavLink>
          {submenuState && (
            <div className="mobile-mega">
              <ul>
                <NavLink className="mobile-nav-link">دوره ها</NavLink>
                <NavLink className="mobile-nav-link">تغییرات</NavLink>
                <NavLink className="mobile-nav-link">پنل کاربری</NavLink>
                <NavLink className="mobile-nav-link">بوت کمپ ها</NavLink>
              </ul>
            </div>
          )}
        </ul>
        <GradientButton className="mobile-gB">شروع خرید</GradientButton>
      </div>
    </div>
  );
};

export default MobileNav;
