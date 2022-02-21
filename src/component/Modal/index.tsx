import { useState } from "react";
import close from "../../assets/close.svg";
import "./styles.css";
const Modal = () => {
  const [visible, setVisible] = useState(false);

  if (!visible) {
    return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="close-btn">
          <button className="btn">
            <img src={close} alt="close" />
          </button>
        </header>
        <div className="modal-body">
          <h2>Title</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
