import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
// import initialState from './initialState';
import reducer from './reducers';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/app.scss';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(reducer, preloadedState);
delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('container'),
);
