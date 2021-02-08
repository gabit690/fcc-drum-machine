import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './PadButton.css';

const PadButton = (props) => {

  function handleClick(event) {
    const audio = document.getElementById(event.target.innerText);
    audio.volume = (props.volume / 100);
    audio.play();
    props.action(event.target.id, event.target.innerText);
  }
  
  return (
    <button
      id={props.soundId}
      className="btn btn-outline-success rounded-circle drum-pad fw-bold shadow m-sm-1"
      onClick={handleClick}
      disabled={!props.active}
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