import React, { useMemo } from "react";
import CopyRightSection from "./CopyRightSection";
import FooterNavAndSubscription from "./FooterNavAndSubscription";
import "./Footer.css";

const Footer = (props) => {
  const footerNavList = useMemo(() => {
    return [
      "خانه",
      "درباره ما",
      "قیمت ها",
      "ارتباط با ما",
      "بلاگ",
      "پست ها بلاگ",
      "راهنما",
      "بازیابی رمز عبور",
      "لایسنس ها",
      "تغییرات",
      "دوره ها",
      "مدارک",
    ];
  }, []);
  return (
    <footer className="footer">
      <FooterNavAndSubscription passedList={footerNavList} />
      <CopyRightSection></CopyRightSection>
    </footer>
  );
};

export default Footer;
