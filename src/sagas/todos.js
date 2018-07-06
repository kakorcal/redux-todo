import { take, fork, call, put } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { database } from '../firebase';
import { addTodo, toggleTodoComplete } from '../actions/todos';
import { setLoadingState } from '../actions/loading';
import { CREATE_TODO, SET_TODO_COMPLETE } from '../actionTypes';
const todosRef = database.ref('/todos');
const LOOP = true;

/*
  APIS
*/
function createTodo(todo) {
  return todosRef.push(todo);
}

function changeTodoComplete(todo, key) {
  return todosRef
    .child(key)
    .child('completed')
    .set(!todo.completed);
}

/*
  ACTION LISTENERS
*/
function* watchCreateTodo() {
  while (LOOP) {
    let action = yield take(CREATE_TODO);

    try {
      yield fork(createTodo, action.todo);
    } catch (err) {
      console.log(err);
    }
  }
}

function* watchSetTodoComplete() {
  while (LOOP) {
    let { todo, key } = yield take(SET_TODO_COMPLETE);

    try {
      yield fork(changeTodoComplete, todo, key);
    } catch (err) {
      console.log(err);
    }
  }
}

/*
  EXTERNAL EVENT LISTENERS
*/
function* watchGetOnceEvent() {
  const getOnceChannel = yield call(getOnceEvent);

  try {
    yield put(setLoadingState(true));
    yield take(getOnceChannel);
    yield put(setLoadingState(false));
  } catch (err) {
    console.log(err);
  }
}

function* watchCreateEvent() {
  const createChannel = yield call(createEvent);

  while (LOOP) {
    const snapshot = yield take(createChannel);
    yield put(addTodo(snapshot.val(), snapshot.key));
  }
}

function* watchChangeEvent() {
  const changeChannel = yield call(changeEvent);

  while (LOOP) {
    const snapshot = yield take(changeChannel);
    yield put(toggleTodoComplete(snapshot.val(), snapshot.key));
  }
}

/*
  EVENT CHANNELS
*/
function getOnceEvent() {
  const listener = eventChannel(emitter => {
    todosRef.once('value', snapshot => {
      console.log('value added', snapshot.val());
      emitter(snapshot);
      emitter(END);
    });

    return () => todosRef.off('value');
  });

  return listener;
}

function createEvent() {
  const listener = eventChannel(emitter => {
    todosRef.on('child_added', snapshot => {
      console.log('child added', snapshot.val());
      emitter(snapshot);
    });

    return () => todosRef.off('child_added');
  });

  return listener;
}

function changeEvent() {
  const listener = eventChannel(emitter => {
    todosRef.on('child_changed', snapshot => {
      console.log('child changed', snapshot.val());
      emitter(snapshot);
    });

    return () => todosRef.off('child_changed');
  });

  return listener;
}

export default [
  fork(watchGetOnceEvent),
  fork(watchCreateTodo),
  fork(watchCreateEvent),
  fork(watchSetTodoComplete),
  fork(watchChangeEvent)
];
