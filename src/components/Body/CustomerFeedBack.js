import React from "react";
import CustomerHeadline from "./CustomerHeadline";
import FeedCartContainer from "./FeedCartContainer";
import "./CustomerFeedBack.css";

const CustomerFeedBack = (props) => {
  return (
    <React.Fragment>
      <CustomerHeadline />
      <FeedCartContainer />
    </React.Fragment>
  );
};

export default React.memo(CustomerFeedBack);
