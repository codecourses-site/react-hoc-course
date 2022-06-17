import Greeting from "./component/Greeting";
import withModal from "./component/Modal";

const App = ({ toggleModal }) => {
  return (
    <div className="home">
      <button
        className="home__show-modal-btn"
        onClick={() => toggleModal(true)}
      >
        Show Modal
      </button>
    </div>
  );
};

export default withModal(Greeting)(App);
