import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from "react-redux";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "./base.scss";
import Store from './redux/store';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>

  <Provider store={Store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

