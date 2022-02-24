import close from "../../assets/close.svg";
import { useModal } from "../../hooks/Modal";
import "./styles.css";
const Modal = () => {
  const { modal, closeModal } = useModal();

  const isVisible = modal.visible;

  const handleClose = () => {
    closeModal();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-background" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="close-btn">
          <button className="btn" onClick={handleClose}>
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
