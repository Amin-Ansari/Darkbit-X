import React from "react";
import FullWidthContainer from "../UI/FullWidthContainer";
import Container from "../UI/Container";
import HeadLine from "../Headline/Headline";
import useOnScreen from "../APIs/useOnScreen";
import SignUpList from "./SignUpList";
import "./HowItWorks.css";
import signUPImage from "../../assets/images/SignUp.svg";

const HowItWorks = (prosp) => {
  const [imageRef, isImageVisible] = useOnScreen({ threshold: 0.09 });
  const [listRef, isListVisible] = useOnScreen({ threshold: 0.09 });

  return (
    <React.Fragment>
      <HeadLine heading="دارک بیت چگونه کار میکند؟">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
      </HeadLine>
      <div
        className={`information image-wrapper`}
        style={{
          opacity: `${isImageVisible ? 1 : 0}`,
        }}
        ref={imageRef}
      >
        <img src={signUPImage} className={`sign-up-image`} />
      </div>
      <div
        className={`information`}
        ref={listRef}
        style={{
          opacity: `${isListVisible ? 1 : 0}`,
        }}
      >
        <SignUpList />
      </div>
    </React.Fragment>
  );
};

export default HowItWorks;
