import React from "react";
import ToolItem from "./ToolItem";
import { BsHandbag } from "react-icons/bs";
// import { IconName } from "react-icons/bs";
// import { IconName } from "react-icons/bs";
// import { IconName } from "react-icons/bs";
import "./ToolSection.css";

import image1 from "../../assets/images/1.svg";

const ToolSection = (props) => {
  return (
    <div className="tool-container">
      <ToolItem headingTitle="مانیتورینگ فعالیت ها" imageSource={image1}>
        <BsHandbag />
      </ToolItem>
    </div>
  );
};

export default ToolSection;
