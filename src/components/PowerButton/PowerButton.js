import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './PowerButton.css';

const PowerButton = (props) => {
  return (
    <div className="btn-power-container container-fluid d-flex justify-content-center">
      <button className="btn btn-light border border-secondary rounded-pill my-2 shadow">
        <i className="bi bi-power d-flex justify-content-center align-items-center text-secondary"></i>
      </button>
    </div>
  );
};

export default PowerButton;