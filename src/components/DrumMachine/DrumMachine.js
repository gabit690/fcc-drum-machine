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
      screen: "",
      volume: 50,
      lastInputs: "",
      playing: false
    }
    this.switchPower = this.switchPower.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.handlePressedPadButton = this.handlePressedPadButton.bind(this);
  }

  switchPower() {
    if (this.state.on) {
      this.setState({screen: "", lastInputs: "", playing: false});
      const tracks = document.getElementsByTagName("audio");
      for (let track of tracks) {
        track.pause();
        track.currentTime = 0;
      }
    } else {
      this.setState({screen: "Hello!"});
    }
    this.setState({on: !this.state.on});
  }

  setVolume(value) {
    this.setState({screen: "Volume: " + value, volume: value});
    let tracks = document.getElementsByTagName("audio");
    for (let track of tracks) {
      track.volume = value / 100;
    }
  }

  handlePressedPadButton(sound, char) {
    
    const pressed = document.getElementById(sound);
    const audio = document.getElementById(pressed.innerText);
    audio.currentTime = 0;

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
        <div id="drum-machine" className="bg-danger mx-auto">
          <div className="row">
            <div className="col-sm-3 d-none d-sm-block">
             <Speaker playing={this.state.playing}/>
            </div>
            <div className="col-sm-6">
              <Screen 
                content={this.state.screen}
                turnOn={this.state.on}
              />
            </div>
            <div className="col-sm-3 d-none d-sm-block">
              <Speaker playing={this.state.playing}/>
            </div>
          </div>
          <div className="row d-flex justify-content-center flex-column flex-sm-row-reverse">
            <div className="col-sm-2">
              <div className="row d-flex align-items-center flex-sm-column-reverse">
                <div className="col-8 col-sm-6 d-flex align-items-center">
                  <VolumeControl 
                    turnOn={this.state.on}
                    changeVolume={this.setVolume}
                  />
                </div>
                <div className="col-4 col-sm-6">
                  <PowerButton handlePower={this.switchPower} />
                </div>
              </div>
            </div>
            <div className="col-sm-9">
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