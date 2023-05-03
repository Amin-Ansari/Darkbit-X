import React from "react";
import Container from "../UI/Container";
import EmailSubmit from "./EmailSubmit";
import "./TextSection.css";

const TextSection = () => {
  return (
    <Container className="gird-container">
      <div className="context-wrapper">
        <h3>راک بیت ایکس بروز ترین و فروش بورس و کریپتو کارنسی</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
        <EmailSubmit></EmailSubmit>
      </div>
    </Container>
  );
};

export default TextSection;
