import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './DrumMachine.css'

import Screen from '../Screen/Screen';
import DrumPad from '../DrumPad/DrumPad';
import VolumeControl from '../VolumeControl/VolumeControl';
import PowerButton from '../PowerButton/PowerButton';
import Contact from '../Contact/Contact';
import Speaker from '../Speaker/Speaker';

class DrumMachine extends Component {

  constructor() {
    super();
    this.state = {
      on: false,
      screen: "Reptilia",
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
      <div className="container-fluid">
        <div id="drum-machine" className="bg-white w-75 mx-auto">
          <div className="row bg-warning">
            <div className="col-md-3 d-none d-md-block">
             <Speaker />
            </div>
            <div className="col-md-6">
              <Screen 
                content={this.state.screen}
                turnOn={this.state.on}
              />
            </div>
            <div className="col-md-3 d-none d-md-block">
              <Speaker />
            </div>
          </div>
          <div className="row d-flex flex-column flex-md-row-reverse bg-info">
            <div className="col-md-4 bg-success">
              <div className="row">
                <div className="col-8 col-md-6 bg-white">
                  <VolumeControl />
                </div>
                <div className="col-4 col-md-6 bg-info">
                  <PowerButton />
                </div>
              </div>
            </div>
            <div className="col-md-8 bg-secondary">
              <DrumPad 
                actionButton={this.handlePressedPadButton}
                turnOn={this.state.on}
              />
            </div>
          </div>
        </div>
        <Contact />
      </div>
    );
  }

}

export default DrumMachine;