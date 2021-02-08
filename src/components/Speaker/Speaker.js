import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Speaker.css';

const Speaker = (props) => {
  return (
    <div className="speaker-container container-fluid d-flex justify-content-center align-items-center">
      <div className={`frame d-flex justify-content-center align-items-center rounded-circle ${props.playing ? "playing" : ""}`}>
        <div className="membrane d-flex justify-content-center align-items-center rounded-circle">
          <div className="dust-cap rounded-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;