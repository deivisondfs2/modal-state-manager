import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { showModal } from "../../store/ducks/modal/modal";
import "./styles.css";

interface DispachProps {
  showModal: typeof showModal;
}

const Header = ({ showModal }: DispachProps) => {
  const handleOpenModal = () => {
    showModal({
      title: "Redux Ducks Parttner",
      description: "This Modal is opening with Redux Ducks Parttner",
    });
  };

  return (
    <div className="container">
      <header className="header">
        <h3>
          State Manager with Redux toolkit, Context API and Redux Ducks Partner
        </h3>
        <button className="header" onClick={handleOpenModal}>
          Click here
        </button>
      </header>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ showModal }, dispatch);
};

export default connect(null, mapDispatchToProps)(Header);
