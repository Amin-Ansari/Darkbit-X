import "./EmailSubmit.css";
import GradientButton from "../UI/GradientButton";

const EmailSubmit = () => {
  return (
    <form className="email-form">
      <div className="submit-container">
        <GradientButton className="button-style">ثبت ایمیل</GradientButton>
        <input type="email" placeholder="ایمیل خود را وارد نمایید"></input>
      </div>
    </form>
  );
};

export default EmailSubmit;
