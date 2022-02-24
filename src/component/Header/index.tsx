import { useModal } from "../../hooks/Modal";
import "./styles.css";

const Header = () => {
  const { showModal } = useModal();

  const handleClick = () => {
    showModal({
      title: "React Context API",
      description: "This Modal is opening with Context API",
    });
  };

  return (
    <div className="container">
      <header className="header">
        <h3>
          State Manager with Redux toolkit, Context API and Redux Ducks Partner
        </h3>
        <button className="header" onClick={handleClick}>
          Click here
        </button>
      </header>
    </div>
  );
};

export default Header;
