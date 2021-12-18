import React from "react";
import ReactDOM from "react-dom";
import {App} from './App';
//import registerServoceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
//registerServiceWorker();