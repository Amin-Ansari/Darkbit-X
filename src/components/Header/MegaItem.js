import React from "react";
import "./MegaItem.css";

const MegaItem = (props) => {
  const { children } = props;

  return (
    <li className="mega-li">
      <a className="mega-link" href="#">
        {children}
      </a>
    </li>
  );
};

export default MegaItem;
