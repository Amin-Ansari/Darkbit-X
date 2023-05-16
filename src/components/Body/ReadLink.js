import React from "react";
import "./ReadLink.css";
import { HiArrowSmLeft } from "react-icons/hi";

const ReadLink = (props) => {
  return (
    <a href="#" className="read-more-link">
      بیشتر بخوانید{" "}
      <span>
        <HiArrowSmLeft />
      </span>
    </a>
  );
};

export default ReadLink;
