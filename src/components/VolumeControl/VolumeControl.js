import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './VolumeControl.css'

const VolumeControl = (props) => {
  return (
    <div className="volume-container container-fluid">
      <div className="row w-100 d-flex justify-content-center">
        <div className="col-2 bg-warning">
          <i class="bi bi-volume-up-fill d-flex justify-content-center"></i>
        </div>
        <div className="col-6 bg-info d-flex justify-content-center">
          <input type="range" />
        </div>
      </div>
    </div>
  );
};

export default VolumeControl;