import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './DrumMachine.css'

import Screen from '../Screen/Screen';
import DrumPad from '../DrumPad/DrumPad';
import VolumeControl from '../VolumeControl/VolumeControl';
import PowerButton from '../PowerButton/PowerButton';

class DrumMachine extends Component {

  constructor() {
    super();
    this.state = {
      on: false,
      screen: "",
      volume: 0,
      lastInputs: ""
    }
    this.handlePressedPadButton = this.handlePressedPadButton.bind(this);
  }

  switchPower() {
    this.setState({on: !this.state.on});
  }

  increaseVolume() {
    if (this.state.volume < 100) {
      this.setState({volume: this.setState + 1});
    }
  }

  decreaseVolume() {
    if (this.state.volume > 0) {
      this.setState({volume: this.setState - 1});
    }
  }

  handlePressedPadButton(sound, char) {
    this.setState({screen: sound});

    if (/[qweasdzxc]/i.test(char)) {

      let inputs = "";

      if (this.state.lastInputs.length < 20) {
        inputs = this.state.lastInputs + char;
      } else {
        inputs = this.state.lastInputs.slice(1, this.state.lastInputs.length) + char;
      }

      this.setState({lastInputs: inputs});
      // secret(inputs);
    }
  }

  render() {

    document.body.addEventListener("keydown", function(event) {
      if (/[qweasdzxc]/i.test(event.key) && event.key.length === 1) {
        document.getElementById(event.key.toUpperCase()).play();
        // Permitir que se vuelva a reproducir el audio cortando el actual.
        // Obtener el padre del audio para mostrar en la pantalla el tipo de sonido.
      }
    });

    return (
      <div id="drum-machine">
        <Screen 
          content={this.state.screen}
          turnOn={this.state.on}
          />
        <PowerButton />
        <VolumeControl />
        <DrumPad 
          actionButton={this.handlePressedPadButton}
          turnOn={this.state.on}
        />
      </div>
    );
  }

}

export default DrumMachine;