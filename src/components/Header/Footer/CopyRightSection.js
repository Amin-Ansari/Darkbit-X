import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import "./CopyRightSection.css";

const CopyRightSection = (props) => {
  return (
    <div className="copy-right-section">
      <p>تمامی حقوق این وبسایت متعلق به امین انصاری می باشد</p>
      <ul>
        <li>
          <a href="#">
            <GrLinkedinOption />
          </a>
        </li>
        <li>
          <a href="#">
            <GrInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <GrTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <GrYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CopyRightSection;
