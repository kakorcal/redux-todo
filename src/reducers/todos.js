export default function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.todo);
    default:
      return state;
  }
}
