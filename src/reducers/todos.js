import { initialState } from '../initialState';
import { Object } from 'core-js';

export default function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO_COMPLETE':
      return Object.assign({}, state, { [action.key]: action.todo });
    default:
      return state;
  }
}
