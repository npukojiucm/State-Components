import React from 'react';
import ReactDOM from 'react-dom/client';
import Store from "./Store";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>
);

reportWebVitals();
