import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './DrumPad.css'

import PadButton from '../PadButton/PadButton';

document.body.addEventListener("keydown", function(event) {
  if (/[qweasdzxc]/i.test(event.key) && event.key.length === 1) {
    console.log(event.key);
    document.getElementById(event.key.toUpperCase()).play();
    // Permitir que se vuelva a reproducir el audio cortando el actual.
    // Obtener el padre del audio para mostrar en la pantalla el tipo de sonido.
  }
});

const DrumPad = ()  => {
  return (
    <div>
      <PadButton soundId="Audio-Q" audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" value="Q"/>
      <PadButton soundId="Audio-W" audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" value="W"/>
      <PadButton soundId="Audio-E" audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" value="E"/>
      <PadButton soundId="Audio-A" audio="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" value="A"/>
      <PadButton soundId="Audio-S" audio="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" value="S"/>
      <PadButton soundId="Audio-D" audio="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" value="D"/>
      <PadButton soundId="Audio-Z" audio="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" value="Z"/>
      <PadButton soundId="Audio-X" audio="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" value="X"/>
      <PadButton soundId="Audio-C" audio="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" value="C"/>
    </div>
  );
};

export default DrumPad;