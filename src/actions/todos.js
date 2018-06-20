import { database } from '../firebase';
const todosRef = database.ref('/todos');

export const addTodo = (todo, key) => {
  return {
    type: 'ADD_TODO',
    todo,
    key
  };
};

export const toggleTodoComplete = (todo, key) => {
  return {
    type: 'TOGGLE_TODO_COMPLETE',
    todo,
    key
  };
};

export const getTodos = () => {
  return dispatch => {
    todosRef.once('value').then(() => {
      console.log('GET TODOS');
    });
  };
};

export const createTodo = todoText => {
  return dispatch => {
    const now = new Date();
    const todo = { title: todoText, completed: false, timestamp: now.toUTCString() };

    todosRef.push(todo).then(() => {
      console.log('TODO ADDED TO DB');
    });
  };
};

export const setTodoComplete = (todo, key) => {
  return dispatch => {
    todosRef
      .child(key)
      .child('completed')
      .set(!todo.completed)
      .then(() => {
        console.log('TODO TOGGLED COMPLETED STATUS');
      });
  };
};

export const startListeningForTodos = () => {
  return dispatch => {
    todosRef.on('child_added', snapshot => {
      dispatch(addTodo(snapshot.val(), snapshot.key));
    });

    todosRef.on('child_changed', snapshot => {
      dispatch(toggleTodoComplete(snapshot.val(), snapshot.key));
    });
  };
};
