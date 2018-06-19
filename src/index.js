import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import { initialState } from './initialState';
import { startListeningForTodos, getTodos } from './actions/todos';
import './index.css';
import AppContainer from './containers/AppContainer';

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware), ...enhancers));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

// connect firebase listeners with redux here
store.dispatch(startListeningForTodos());
store.dispatch(getTodos());
