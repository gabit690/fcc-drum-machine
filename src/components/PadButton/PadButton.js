import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './PadButton.css';

const PadButton = (props) => {

  function handleClick(event) {
    document.getElementById(event.target.innerText).play();
    props.action(event.target.id, event.target.innerText);
  }

  return (
    <button
      id={props.soundId}
      className="btn btn-outline-success rounded-circle drum-pad fw-bold"
      onClick={handleClick}
    >
      {props.value}
      <audio
        id={props.value}
        className="clip"
        src={props.audio}
      >
      </audio>
    </button>
  );
};

export default PadButton;