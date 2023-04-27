import React from "react";
import Container from "../UI/Container";
import LogoAndNavList from "./LogoAndNavList";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <Container className="navbar-container">
      <nav className="navbar-style">
        <LogoAndNavList />
        <div>سبد خرید</div>
      </nav>
    </Container>
  );
};

export default Navbar;
