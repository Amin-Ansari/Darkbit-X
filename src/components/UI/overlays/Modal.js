import React from "react-dom";
import "./Modal.css";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onClosing}></div>;
};
const Modal = (props) => {
  return React.createPortal(
    <div className="modal">
      <BackDrop onClosing={props.onClosingModal} />
      {props.children}
    </div>,
    document.getElementById("overlay-root")
  );
};

export default Modal;
