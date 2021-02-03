import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './DrumPad.css'

import PadButton from '../PadButton/PadButton';

const DrumPad = (props) => {
  return (
    <div>
      <PadButton
        soundId="Chord-1"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
        action={props.actionButton}
        value="Q"
        active={props.turnOn}
      />
      <PadButton 
        soundId="Chord-2"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
        action={props.actionButton}
        value="W"
        active={props.turnOn}
      />
      <PadButton 
        soundId="Chord-3"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
        action={props.actionButton}
        value="E"
        active={props.turnOn}
        />
      <PadButton 
        soundId="Open-HH"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        action={props.actionButton}
        value="A"
        active={props.turnOn}
      />
      <PadButton 
        soundId="Snare"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
        action={props.actionButton}
        value="S"
        active={props.turnOn}
      />
      <PadButton 
        soundId="Side-Stick"
        audio="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
        action={props.actionButton}
        value="D"
        active={props.turnOn}
      />
      <PadButton 
        soundId="Closed-HH"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        action={props.actionButton}
        value="Z"
        active={props.turnOn}
      />
      <PadButton 
        soundId="Kick"
        audio="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        action={props.actionButton} value="X"
        active={props.turnOn}
      />
      <PadButton 
        soundId="Punchy-Kick"
        audio="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
        action={props.actionButton}
        value="C"
        active={props.turnOn}
      />
    </div>
  );
};

export default DrumPad;