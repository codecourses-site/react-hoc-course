import Greeting from "./components/Greeting";
import withModal from "./components/Modal";

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
