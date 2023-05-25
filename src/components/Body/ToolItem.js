import React from "react";
import ToolHeading from "./ToolHeading";
import ToolList from "./ToolList";
import useOnScreen from "../APIs/useOnScreen";
import "./ToolItem.css";

const ToolItem = (props) => {
  const [itemRef, itemVisibility] = useOnScreen({ threshold: 0.08 });
  return (
    <div
      className={`tool-item ${itemVisibility ? "item-appear" : ""}`}
      ref={itemRef}
    >
      <div className="tool-context">
        <ToolHeading title={props.headingTitle}>{props.children}</ToolHeading>
        <ToolList />
      </div>
      <div className="tool-image-wrapper">
        <img src={props.imageSource} />
      </div>
    </div>
  );
};

export default ToolItem;
