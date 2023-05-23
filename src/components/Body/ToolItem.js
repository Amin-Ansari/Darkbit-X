import React from "react";
import ToolHeading from "./ToolHeading";
import "./ToolItem.css";

const ToolItem = (props) => {
  return (
    <div className="tool-item">
      <ToolHeading title={props.headingTitle}>{props.children}</ToolHeading>
    </div>
  );
};

export default ToolItem;
