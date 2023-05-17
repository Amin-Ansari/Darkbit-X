import React from "react";
import useOnScreen from "../APIs/useOnScreen";

const Shape = (props) => {
  const [imgRef, imageVisibility] = useOnScreen({ threshold: 1.0 });

  return (
    <img
      src={props.src}
      className={`${props.className} ${imageVisibility ? "shape-visible" : ""}`}
      ref={imgRef}
    />
  );
};

export default Shape;
