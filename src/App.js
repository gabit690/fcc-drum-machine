import './App.css';
import DrumMachine from './components/DrumMachine/DrumMachine';

function App() {
  return (
    <div className="App">
      <DrumMachine />
    </div>
  );
}

export default App;

// Reference: https://codepen.io/freeCodeCamp/full/MJyNMd.


// User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).

// User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).