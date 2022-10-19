import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import {App} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ReactDOM.render(<App />, document.getElementById("root"));

// // bundle.js:228 Uncaught TypeError: react_dom_client__WEBPACK_IMPORTED_MODULE_1__.render is not a function