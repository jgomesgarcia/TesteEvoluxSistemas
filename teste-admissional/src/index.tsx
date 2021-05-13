import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/App';
import { initializeIcons } from '@uifabric/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
