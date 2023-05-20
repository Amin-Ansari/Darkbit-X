import React from "react";
import "./SignUpList.css";
import { FaRegUser } from "react-icons/fa";
import { DiCode } from "react-icons/di";
import { IoBarChartOutline } from "react-icons/io5";
import FeatureHeadingIcon from "./FeatureHeadingIcon";

const SignUpList = (props) => {
  return (
    <ul>
      <li className="sign-up-item">
        <h4>
          <FeatureHeadingIcon>
            <FaRegUser />
          </FeatureHeadingIcon>
          1. حساب کاربری خود را ایجاد کنید
        </h4>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز اختگی با
          تولید سادگی نامفهوم از صنعت
        </p>
      </li>
      <li className="sign-up-item">
        <h4>
          <FeatureHeadingIcon>
            <DiCode />
          </FeatureHeadingIcon>
          2. ابزار های مارا نصب کنید
        </h4>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز اختگی با
          تولید سادگی نامفهوم از صنعت
        </p>
      </li>
      <li className="sign-up-item">
        <h4>
          <FeatureHeadingIcon>
            <IoBarChartOutline />
          </FeatureHeadingIcon>
          3. فرایند آنالیز را شروع کنید
        </h4>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز اختگی با
          تولید سادگی نامفهوم از صنعت
        </p>
      </li>
    </ul>
  );
};

export default SignUpList;
