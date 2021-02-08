import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './DrumPad.css'

import PadButton from '../PadButton/PadButton';

const DrumPad = (props) => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="pad-buttons my-3">
        <PadButton
          soundId="Closed-HH-2"
          audio="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          action={props.actionButton}
          volume={props.volume}
          value="Q"
          active={props.turnOn}
        />
        <PadButton 
          soundId="Open-HH-1"
          audio="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
          action={props.actionButton}
          volume={props.volume}
          value="W"
          active={props.turnOn}
        />
        <PadButton 
          soundId="Open-HH-2"
          audio="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          action={props.actionButton}
          volume={props.volume}
          value="E"
          active={props.turnOn}
          />
        <PadButton 
          soundId="Closed-HH-1"
          audio="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
          action={props.actionButton}
          volume={props.volume}
          value="A"
          active={props.turnOn}
        />
        <PadButton 
          soundId="Snare"
          audio="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
          action={props.actionButton}
          volume={props.volume}
          value="S"
          active={props.turnOn}
        />
        <PadButton 
          soundId="Side-Stick"
          audio="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
          action={props.actionButton}
          volume={props.volume}
          value="D"
          active={props.turnOn}
        />
        <PadButton 
          soundId="Kick-&-Hat"
          audio="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          action={props.actionButton}
          volume={props.volume}
          value="Z"
          active={props.turnOn}
        />
        <PadButton 
          soundId="Kick"
          audio="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          action={props.actionButton} 
          volume={props.volume}
          value="X"
          active={props.turnOn}
        />
        <PadButton 
          soundId="Punchy-Kick"
          audio="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
          action={props.actionButton}
          volume={props.volume}
          value="C"
          active={props.turnOn}
        />
      </div>
    </div>
  );
};

export default DrumPad;