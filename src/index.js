import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const DATA = [
  { id: "bug-0", name: "Import Error", resolved: true },
  { id: "bug-1", name: "Syntax Error", resolved: false },
  { id: "bug-2", name: "Runtime Error", resolved: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App bugs={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
