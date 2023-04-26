import React from "react";
import ReactDOM from "react-dom";
import FullWidthContainer from "../UI/FullWidthContainer";
import "./Header.css";

const Header = () => {
  return ReactDOM.createPortal(
    <FullWidthContainer></FullWidthContainer>,
    document.getElementById("header-root")
  );
};

export default Header;
