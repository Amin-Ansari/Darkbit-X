import React from "react";
import "./ToolHeading.css";

const ToolHeading = (props) => {
  return (
    <div className="tool-heading">
      <div className="heading-text-container">
        <h4>{props.title}</h4>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </p>
      </div>
      <div className="header-icon-container">{props.children}</div>
    </div>
  );
};

export default ToolHeading;
