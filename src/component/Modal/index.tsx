import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import close from "../../assets/close.svg";
import "./styles.css";

import { closeModal } from "../../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);

  const isVisible = modal.visible;

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-background" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="close-btn">
          <button className="btn" onClick={handleCloseModal}>
            <img src={close} alt="close" />
          </button>
        </header>
        <div className="modal-body">
          <h2>{modal.title}</h2>
          <p>{modal.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
