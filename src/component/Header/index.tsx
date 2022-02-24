import { useAppDispatch } from "../../app/hooks";
import { showModal } from "../../features/modal/modalSlice";
import "./styles.css";

const Header = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(
      showModal({
        visible: true,
        title: "Redux Toolkit",
        description: "This Modal is opening with Redux toolkit",
      })
    );
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

export default Header;
