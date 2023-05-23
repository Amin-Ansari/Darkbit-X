import React from "react";
import ToolSection from "./ToolSection";
import Headline from "../Headline/Headline";
import ToolItem from "./ToolItem";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsFlag } from "react-icons/bs";
import image1 from "../../assets/images/1.svg";
import image2 from "../../assets/images/2.svg";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.svg";

const AnalyticsTool = (props) => {
  return (
    <React.Fragment>
      <Headline heading="امکانات ابزار آنالیز">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع
      </Headline>
      <ToolSection>
        <ToolItem headingTitle="مانیتورینگ فعالیت ها" imageSource={image1}>
          <BsHandbag />
        </ToolItem>
        <ToolItem headingTitle="گزارش های زنده" imageSource={image2}>
          <HiOutlineDocumentReport />
        </ToolItem>
      </ToolSection>
      <ToolSection>
        <ToolItem headingTitle="آنالیز کابران" imageSource={image3}>
          <TbBrandGoogleAnalytics />
        </ToolItem>
        <ToolItem headingTitle="مشخصات کاربران" imageSource={image4}>
          <BsFlag />
        </ToolItem>
      </ToolSection>
    </React.Fragment>
  );
};

export default AnalyticsTool;
