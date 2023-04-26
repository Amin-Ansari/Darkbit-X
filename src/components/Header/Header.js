import React from "react";
import ReactDOM from "react-dom";
import FullWidthContainer from "../UI/FullWidthContainer";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return ReactDOM.createPortal(
    <FullWidthContainer className="header-wrapper">
      <Navbar />
    </FullWidthContainer>,
    document.getElementById("header-root")
  );
};

export default Header;
