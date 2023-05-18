import React from "react";
import FullWidthContainer from "../UI/FullWidthContainer";
import Container from "../UI/Container";
import Shape from "./Shape";
import "./Features.css";
import useOnScreen from "../APIs/useOnScreen";
import FeatureSection from "./FeatureSection";
import FeatureSecondSection from "./FeatureSecondSection";
import FeatureThirdSection from "./FeatureThirdSection";
import FeaturesButton from "./FeaturesButton";

const shape1 = require("../../assets/images/shape-3.png");
const shape2 = require("../../assets/images/shape-2.png");
const shape3 = require("../../assets/images/shape-4.png");

const Features = (props) => {
  const [h3Ref, isH3Visible] = useOnScreen({ treshold: 1.0 });
  const [pRef, isPVisible] = useOnScreen({ treshold: 1.0 });
  return (
    <FullWidthContainer className="hide-overflow ">
      <Container className="grid-container">
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
        <FeatureSection />
        <FeatureSecondSection />
        <FeatureThirdSection />
        <Shape src={shape1} className="float-shape" />
        <Shape src={shape2} className="float-shape" />
        <Shape src={shape3} className="float-shape" />
        <FeaturesButton></FeaturesButton>
      </Container>
    </FullWidthContainer>
  );
};

export default Features;
