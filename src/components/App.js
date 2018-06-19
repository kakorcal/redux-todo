import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Topbar from './Topbar';
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContainer from '../containers/TodoListContainer';

const App = ({ todosLength, now }) => {
  return (
    <div className="App">
      <div className="stripes">
        <div />
      </div>
      <div className="App__container">
        <Topbar todosLength={todosLength} now={now} />
        <TodoInputContainer />
        <TodoListContainer />
      </div>
    </div>
  );
};

App.propTypes = {
  todosLength: PropTypes.number,
  now: PropTypes.instanceOf(Date)
};

export default App;
