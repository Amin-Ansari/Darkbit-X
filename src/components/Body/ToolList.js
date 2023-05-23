import React from "react";
import { BsCheckLg } from "react-icons/bs";
import "./ToolList.css";

const ToolList = () => {
  return (
    <ul className="tool-list">
      <li>
        <span className="list-icon">
          <BsCheckLg />
        </span>
        لورم ایپسوم متن ساختگی با تولید
      </li>
      <li>
        <span className="list-icon">
          <BsCheckLg />
        </span>
        الخصوص طراحان خلاقی، و فرهنگ
      </li>
      <li>
        <span className="list-icon">
          <BsCheckLg />
        </span>
        لورم ایپسوم متن ساختگی با تولید
      </li>
      <li>
        <span className="list-icon">
          <BsCheckLg />
        </span>
        الخصوص طراحان خلاقی، و فرهنگ
      </li>
    </ul>
  );
};
export default ToolList;
