import React from "react";
import "./AvatarImage.css";

const AvatarImage = (props) => {
  const { imageSource } = props;
  return <img src={imageSource} className="avatar-image"></img>;
};

export default React.memo(AvatarImage);
