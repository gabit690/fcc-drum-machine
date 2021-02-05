import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Screen.css'

const Screen = (props) => {
  return (
    <div className="container-fluid my-3">
      <div id="display" className="d-flex justify-content-center align-items-center w-75 mx-auto py-2 border border-secondary rounded text-center">
        {props.content}
      </div>
    </div>
  );
};

export default Screen;