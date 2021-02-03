import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './PadButton.css';

const PadButton = function(props) {

  function handleClick(event) {
    document.getElementById(event.target.innerText).play();
    document.getElementById("display").innerText = event.target.id;
    // Permitir que se vuelva a reproducir el audio cortando el actual.
  }

  return (
    <button id={props.soundId} className="drum-pad" onClick={handleClick}>
      {props.value}
      <audio id={props.value} className="clip" src={props.audio}></audio>
    </button>
  );
};

export default PadButton;