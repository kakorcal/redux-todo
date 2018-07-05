import { database } from '../firebase';
// import { setLoadingState } from './loading';
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

export const removeTodoItem = key => {
  return {
    type: 'REMOVE_TODO_ITEM',
    key
  };
};
/*
export const getTodos = () => {
  return dispatch => {
    todosRef.once('value').then(() => {
      console.log('GET TODOS');
      dispatch(setLoadingState(false));
    });
  };
};
 */
export const createTodo = todoText => {
  const now = new Date();
  const todo = { title: todoText, completed: false, timestamp: now.toUTCString() };

  return {
    type: 'CREATE_TODO',
    todo
  };
  /*
    return dispatch => {
      const now = new Date();
      const todo = { title: todoText, completed: false, timestamp: now.toUTCString() };
      todosRef.push(todo).then(() => {
        console.log('TODO ADDED TO DB');
      });
    };
  */
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

export const deleteTodoItem = key => {
  return dispatch => {
    todosRef
      .child(key)
      .remove()
      .then(() => {
        console.log(`TODO ${key} REMOVED`);
      });
  };
};

/*
export const startListeningForTodos = () => {
  return dispatch => {
    todosRef.on('child_added', snapshot => {
      dispatch(addTodo(snapshot.val(), snapshot.key));
    });

    todosRef.on('child_changed', snapshot => {
      dispatch(toggleTodoComplete(snapshot.val(), snapshot.key));
    });

    todosRef.on('child_removed', snapshot => {
      dispatch(removeTodoItem(snapshot.key));
    });
  };
};
 */

// state flow (redux-thunk)
// thunk action (api call) -> firebase listener dispatch sync action ->
// payload passed to reducer -> reducer updates state -> store updated -> rerender

// state flow (redux-saga)
//
