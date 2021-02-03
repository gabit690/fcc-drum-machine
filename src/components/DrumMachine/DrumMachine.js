import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './DrumMachine.css'

import Screen from '../Screen/Screen';
import DrumPad from '../DrumPad/DrumPad';

class DrumMachine extends Component {

  constructor() {
    super();
    this.state = {
      on: false,
      screen: "",
      volume: 0,
      lastInputs: ""
    }
  }

  render() {
    return (
      <div id="drum-machine">
        <Screen content={this.state.screen} />
        <DrumPad />
      </div>
    );
  }

}

export default DrumMachine;