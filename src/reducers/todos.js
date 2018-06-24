import { initialState } from '../initialState';
import { Object } from 'core-js';

export default function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO_COMPLETE':
      return Object.assign({}, state, { [action.key]: action.todo });
    case 'REMOVE_TODO_ITEM':
      // removing key from state!! state is not modified (aka remains immutable after destructuring)
      let { [action.key]: removeKey, ...newState } = state;
      return Object.assign({}, newState);
    default:
      return state;
  }
}
