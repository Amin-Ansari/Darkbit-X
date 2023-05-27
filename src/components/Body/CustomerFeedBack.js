import React from "react";
import CustomerHeadline from "./CustomerHeadline";
import "./CustomerFeedBack.css";

const CustomerFeedBack = (props) => {
  return (
    <React.Fragment>
      <CustomerHeadline />
      <div></div>
    </React.Fragment>
  );
};

export default React.memo(CustomerFeedBack);
