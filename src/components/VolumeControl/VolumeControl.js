import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const VolumeControl = (props) => {
  return (
    <div className="volume-container container-fluid bg-danger">
      <div className="progress">
        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  );
};

export default VolumeControl;