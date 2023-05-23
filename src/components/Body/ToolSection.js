import React from "react";
import ToolItem from "./ToolItem";
import { BsHandbag } from "react-icons/bs";
// import { IconName } from "react-icons/bs";
// import { IconName } from "react-icons/bs";
// import { IconName } from "react-icons/bs";
import "./ToolSection.css";

const ToolSection = (props) => {
  return (
    <div className="tool-container">
      <ToolItem headingTitle="مانیتورینگ فعالیت ها">
        <BsHandbag />
      </ToolItem>
    </div>
  );
};

export default ToolSection;
