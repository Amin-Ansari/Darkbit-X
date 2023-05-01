import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Cart from "./Cart";
import { FiChevronDown } from "react-icons/fi";
import "./LogoAndNavList.css";
import Megamenu from "./Megamenu";

const LogoAndNavList = (props) => {
  return (
    <div className="logo-nav-list-container">
      <Logo />
      <ul className="navbar-ul">
        <NavLink>
          <span>خانه</span>
        </NavLink>
        <NavLink>
          <span>درباره ما</span>
        </NavLink>
        <NavLink>
          <span>بلاگ</span>
        </NavLink>
        <NavLink className="resources">
          <span>منابع</span>
          <span className="angle-icon">
            <FiChevronDown />
          </span>
          <Megamenu></Megamenu>
        </NavLink>
      </ul>
      <Cart className=" large-sc-cart" onShowing={props.onShowingModal}>
        سبد خرید
      </Cart>
    </div>
  );
};

export default LogoAndNavList;
