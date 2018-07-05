import { database } from '../firebase';
import { addTodo } from '../actions/todos';
// import { setLoadingState } from './loading';
import { take, fork, call, put } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { setLoadingState } from '../actions/loading';
const todosRef = database.ref('/todos');

/*
  APIS
*/
function createTodo(todo) {
  return todosRef.push(todo);
}

/*
  ACTION LISTENERS
*/
function* watchCreateTodo() {
  while (true) {
    let action = yield take('CREATE_TODO');

    try {
      yield fork(createTodo, action.todo);
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

  while (true) {
    const snapshot = yield take(createChannel);
    yield put(addTodo(snapshot.val(), snapshot.key));
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

export default [fork(watchGetOnceEvent), fork(watchCreateTodo), fork(watchCreateEvent)];
