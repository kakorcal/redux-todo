import { initialState } from '../initialState';

export default function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.todo);
    case 'TOGGLE_TODO_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.todo.id) {
          return Object.assign({}, ...todo, { complete: !todo.complete });
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}
