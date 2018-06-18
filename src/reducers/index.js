import { combineReducers } from 'redux';
import todosReducer from './todos';
import loadingReducer from './loading';

const reducers = combineReducers({
  todos: todosReducer,
  loading: loadingReducer
});

export default reducers;
