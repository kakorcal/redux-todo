export const addTodo = todoText => {
  return {
    type: 'ADD_TODO',
    todo: {
      id: '12345',
      title: todoText,
      complete: false
    }
  };
};

export const toggleTodoComplete = todo => {
  return {
    type: 'TOGGLE_TODO_COMPLETE',
    todo
  };
};
