import { database } from '../firebase';

const todosRef = database.ref('/todos');

export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export const toggleTodoComplete = key => {
  return {
    type: 'TOGGLE_TODO_COMPLETE',
    key
  };
};

export const createTodo = todoText => {
  return dispatch => {
    const todo = { title: todoText, completed: false };

    todosRef.push(todo).then(() => {
      console.log('TODO ADDED TO DB');
    });
  };
};

export const setTodoComplete = todo => {
  return dispatch => {
    todosRef
      .child(todo.key)
      .child('complete')
      .set(!todo.completed)
      .then(() => {
        console.log('TODO TOGGLED COMPLETED STATUS');
      });
  };
};

export const startListeningForTodos = () => {
  return dispatch => {
    todosRef.on('child_added', snapshot => {
      dispatch(addTodo(snapshot.val()));
    });

    todosRef.on('child_changed', snapshot => {
      dispatch(toggleTodoComplete(snapshot.key));
    });
  };
};
