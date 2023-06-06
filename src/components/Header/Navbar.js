import React, { useContext } from "react";
import Container from "../UI/Container";
import LogoAndNavList from "./LogoAndNavList";
import GradientButton from "../UI/GradientButton";
import "./Navbar.css";
import Cart from "./Cart";
import { useState } from "react";
import MobileNav from "./MobileNav";
import CartContextProvider from "../Context/CartContextProvider";

const Navbar = (props) => {
  const [clickedState, updateClickedState] = useState(false);
  const [naviGator, setNav] = useState(false);
  const clickUpdate = () => {
    if (naviGator) {
      setTimeout(() => {
        setNav(false);
      }, 800);
    } else {
      setNav(true);
    }

    if (!clickedState) {
      setTimeout(() => {
        updateClickedState(true);
      }, 100);
    } else {
      updateClickedState(false);
    }
  };

  return (
    <Container className="navbar-container">
      <nav className="navbar-style">
        <MobileNav
          className={`${clickedState ? "show-mobile-nav" : ""}`}
          mobileNavContainer={naviGator}
        />
        <LogoAndNavList />
        <div className="start-button-and-cart">
          <Cart className="smal-sc-cart"></Cart>
          <GradientButton className="gradient-button-get-start">
            شروع خرید
          </GradientButton>
          <GradientButton
            className={`bars-gButton ${clickedState ? "bars-clicked" : ""}`}
            onBarsClicked={clickUpdate}
          >
            <div className="bars"></div>
            <div className="bars"></div>
          </GradientButton>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
