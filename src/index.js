/* eslint-disable consistent-return */
import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';
import store from './Store/Store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
