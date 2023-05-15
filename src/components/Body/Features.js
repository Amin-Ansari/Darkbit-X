import React from "react";
import FullWidthContainer from "../UI/FullWidthContainer";
import Container from "../UI/Container";
import "./Features.css";
import useOnScreen from "../APIs/useOnScreen";

const Features = (props) => {
  const [h3Ref, isH3Visible] = useOnScreen({ treshold: 1.0 });
  const [pRef, isPVisible] = useOnScreen({ treshold: 1.0 });
  return (
    <FullWidthContainer>
      <Container>
        <div className="heading-container">
          <h3 ref={h3Ref} className={`${isH3Visible ? "show-up" : ""}`}>
            ساده، اما بسیار کار آمد
          </h3>
          <p ref={pRef} className={`${isPVisible ? "show-up" : ""}`}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک روزنامه و مجله در ستون و سطرآنچنان نامفهوم
            که لازم است، و برای شرایط فعلی مورد نیاز،
          </p>
        </div>
      </Container>
    </FullWidthContainer>
  );
};

export default Features;
