import React from "react";
import "./Megamenu.css";
import MegamenuUi from "./MegamenuUi";
import MegaItem from "./MegaItem";

export default function Megamenu() {
  return (
    <div className="mega-container">
      <div className="mega-menu">
        <div className="mega-list-wrapper">
          <h2 className="mega-title">صفحات</h2>
          <MegamenuUi>
            <MegaItem>خانه</MegaItem>
            <MegaItem>درباره ما</MegaItem>
            <MegaItem>قیمت ها </MegaItem>
            <MegaItem>ارتباط با ما</MegaItem>
            <MegaItem>ویژگی ها</MegaItem>
            <MegaItem>
              ویژگی های برتر
              <span className="vip-span">ویژه</span>
            </MegaItem>
            <MegaItem>بلاگ</MegaItem>
            <MegaItem>
              پست های بلاگ
              <span className="vip-span">ویژه</span>
            </MegaItem>
            <MegaItem>پنل کاربری</MegaItem>
            <MegaItem>
              پنل مدیریتی
              <span className="vip-span">ویژه</span>
            </MegaItem>
            <MegaItem>مجوز ها</MegaItem>
            <MegaItem>تغییرات</MegaItem>
          </MegamenuUi>
        </div>
        <div className="mega-list-wrapper">
          <h2 className="mega-title">آموزش ها</h2>
          <MegamenuUi>
            <MegaItem>شروع یادگیری</MegaItem>
            <MegaItem>دوره ها</MegaItem>
            <MegaItem>برترین دوره ها</MegaItem>
            <MegaItem>مدارک</MegaItem>
            <MegaItem>بوت کمپ ها</MegaItem>
            <MegaItem>تمرینات</MegaItem>
            <MegaItem>راهنما</MegaItem>
          </MegamenuUi>
        </div>
      </div>
    </div>
  );
}
