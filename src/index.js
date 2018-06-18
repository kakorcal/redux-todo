import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import { initialState } from './initialState';
import './index.css';
import App from './components/App';

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware), ...enhancers));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
