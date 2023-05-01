import React, { useEffect, useReducer, useRef, useState } from "react";
import ReactDOM from "react-dom";
import FullWidthContainer from "../UI/FullWidthContainer";
import Navbar from "./Navbar";
import "./Header.css";
let lastScrollPosition = window.scrollY;
window.scrollTo(0, 0);

const Header = (props) => {
  const [navStatus, setNavStatus] = useState(true);

  const settingNavState = () => {
    const scrollPosition = window.scrollY;
    let navHeight = document.querySelector("nav").scrollHeight;
    if (scrollPosition !== lastScrollPosition) {
      if (scrollPosition > (navHeight + 20) / 2) {
        if (lastScrollPosition > scrollPosition) {
          setNavStatus(true);
        } else {
          setNavStatus(false);
        }
      } else {
        setNavStatus(true);
      }
    }
  };

  window.addEventListener("scroll", function () {
    settingNavState();
    setTimeout(() => {
      lastScrollPosition = window.scrollY;
    }, 500);
  });

  return ReactDOM.createPortal(
    <FullWidthContainer
      className={`header-wrapper ${
        navStatus ? "header-onShow" : "header-onHide"
      }`}
    >
      <Navbar onShowingModal={props.onShowingCart} />
    </FullWidthContainer>,
    document.getElementById("header-root")
  );
};

export default Header;
