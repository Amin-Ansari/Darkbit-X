import React from "react";
import useOnScreen from "../APIs/useOnScreen";
import Container from "../UI/Container";
import EmailSubmit from "./EmailSubmit";
import "./TextSection.css";

const TextSection = () => {
  const [refP, isPVisible] = useOnScreen({ threshold: 1.0 });
  const [refH3, isH3Visible] = useOnScreen({ threshold: 1.0 });

  return (
    <Container className="gird-container">
      <div className="context-wrapper">
        <h3 className={`${!isH3Visible ? "no-opacity" : ""}`} ref={refH3}>
          دارک بیت ایکس بروز ترین پلتفرم معاملات بورس و کریپتو کارنسی
        </h3>
        <p className={`${!isPVisible ? "no-opacity" : ""}`} ref={refP}>
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
