import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import './assets/styles/style.scss';

const initialState = {
  'certifications': [
    {
      'id': 1,
      'route': 'Arquitectura Frontend',
      'cover': 'https://i.imgur.com/qI0O3zh.png',
    },
    {
      'id': 2,
      'route': 'Escuela de JavaScript',
      'cover': 'https://i.imgur.com/ZQ2xvO8.png',
    },
    {
      'id': 3,
      'route': 'Inglés',
      'cover': 'https://i.imgur.com/EFRyJoB.png',
    },
  ],
  'skills': [
    {
      'id': 1,
      'skill': 'English',
      'cover': 'https://previews.123rf.com/images/luplupme/luplupme1907/luplupme190700594/129453972-british-english-language-learning-class-vector-illustration-brittish-flag-logo-england-dictionary-bi.jpg',
      'url': 'https://www.facebook.com/asis.melgarejolopez.1',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio vitae turpis congue sodales. Integer at erat in purus varius elementum eget et purus.',
    },
    {
      'id': 2,
      'skill': 'JavaScript',
      'cover': 'https://www.upiicsafordummies.com/wp-content/uploads/2019/01/JavaScript.png',
      'url': 'https://www.facebook.com/asis.melgarejolopez.1',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio vitae turpis congue sodales. Integer at erat in purus varius elementum eget et purus.',
    },
    {
      'id': 3,
      'skill': 'React',
      'cover': 'https://www.digital55.com/wp-content/uploads/2019/07/%C2%BFQue%CC%81-cualidades-debe-tener-un-desarrollador-especialista-en-React.png',
      'url': 'https://www.facebook.com/asis.melgarejolopez.1',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio vitae turpis congue sodales. Integer at erat in purus varius elementum eget et purus.',
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);

