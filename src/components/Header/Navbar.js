import React from "react";
import Container from "../UI/Container";
import LogoAndNavList from "./LogoAndNavList";
import GradientButton from "../UI/GradientButton";
import "./Navbar.css";
import Cart from "./Cart";

const Navbar = (props) => {
  return (
    <Container className="navbar-container">
      <nav className="navbar-style">
        <LogoAndNavList />
        <div className="start-button-and-cart">
          <Cart className="smal-sc-cart">
            <span className="cart-icon-style"></span>
          </Cart>
          <GradientButton className="gradient-button-get-start">
            شروع خرید
          </GradientButton>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
