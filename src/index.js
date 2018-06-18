import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducers';
import './index.css';
import App from './components/App';

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  todos: [
    { id: 1, title: 'Learn Redux Saga', completed: false },
    { id: 2, title: 'Learn How to code', completed: true }
  ],
  loading: false
};

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware), ...enhancers));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
