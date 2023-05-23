import React from "react";
import ToolHeading from "./ToolHeading";
import ToolList from "./ToolList";
import "./ToolItem.css";

const ToolItem = (props) => {
  return (
    <div className="tool-item">
      <ToolHeading title={props.headingTitle}>{props.children}</ToolHeading>
      <ToolList />
    </div>
  );
};

export default ToolItem;
