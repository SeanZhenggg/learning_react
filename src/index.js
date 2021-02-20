import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

const composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers, 
  composerEnhancers(applyMiddleware())
)
// ClientId = 889878431283-jtbher2n3cevvo1l16rlk9eitgvacucl.apps.googleusercontent.com
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
