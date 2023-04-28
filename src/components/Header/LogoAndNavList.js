import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Cart from "./Cart";
import { FiChevronDown } from "react-icons/fi";
import "./LogoAndNavList.css";

const LogoAndNavList = () => {
  return (
    <div className="logo-nav-list-container">
      <Logo />
      <ul className="navbar-ul">
        <NavLink>خانه</NavLink>
        <NavLink>درباره ما</NavLink>
        <NavLink>بلاگ</NavLink>
        <NavLink>
          منابع
          <span className="angle-icon">
            <FiChevronDown />
          </span>
        </NavLink>
      </ul>
      <Cart className=" large-sc-cart">سبد خرید</Cart>
    </div>
  );
};

export default LogoAndNavList;