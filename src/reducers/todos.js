import initialState from '../initialState';
import { Object } from 'core-js';
const { todos } = initialState;

export default function todosReducer(state = todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO_COMPLETE':
      return Object.assign({}, state, { [action.key]: action.todo });
    case 'REMOVE_TODO_ITEM':
      // removing key from state!! state is not modified (aka remains immutable after destructuring)
      // https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90
      let { [action.key]: removeKey, ...newState } = state;
      return Object.assign({}, newState);
    default:
      return state;
  }
}
