import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Screen.css'

const Screen = (props) => {
  return (
    <div id="display">{props.content}</div>
  );
};

export default Screen;