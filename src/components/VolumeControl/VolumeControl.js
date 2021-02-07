import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './VolumeControl.css'

const VolumeControl = (props) => {
  return (
    <div className="volume-container container-fluid d-flex justify-content-center align-items-center">
      <input id="range-controler" type="range" />
    </div>
  );
};

export default VolumeControl;