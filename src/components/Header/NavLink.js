import React from "react";
import "./NavLink.css";

const NavLink = (props) => {
  return (
    <li
      className={`navbar-link-item ${props.className ? props.className : ""}`}
    >
      <a className="nav-link" href="#">
        {props.children}
      </a>
    </li>
  );
};

export default NavLink;
