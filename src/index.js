import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Digit from './DigitalDateTime';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>
    <App />
    <br></br>
    <div className="dit"><Digit /></div>
    </p>
  </React.StrictMode>
);
