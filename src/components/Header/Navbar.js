import React from "react";
import Container from "../UI/Container";
import LogoAndNavList from "./LogoAndNavList";
import GradientButton from "../UI/GradientButton";
import "./Navbar.css";
import Cart from "./Cart";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = (props) => {
  const [clickedState, updateClickedState] = useState(false);

  const clickUpdate = () => {
    clickedState ? updateClickedState(false) : updateClickedState(true);
  };

  return (
    <Container className="navbar-container">
      <nav className="navbar-style">
        {clickedState ? (
          <MobileNav className="show-mobile-nav" />
        ) : (
          <MobileNav className="hide-mobile-nav" />
        )}

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
