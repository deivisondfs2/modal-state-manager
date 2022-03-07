import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import close from "../../assets/close.svg";
import { IAppState } from "../../store/ducks";
import { closeModal } from "../../store/ducks/modal/modal";
import "./styles.css";

interface DisparchProps extends IAppState {
  closeModal: typeof closeModal;
}

const Modal = ({ modal, closeModal }: DisparchProps) => {
  const isVisible = modal.visible;

  const handleCloseModal = () => {
    closeModal();
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

const mapStateToProps = (store: IAppState) => {
  return {
    modal: store.modal,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ closeModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
