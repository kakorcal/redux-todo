import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Topbar from './Topbar';
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContainer from '../containers/TodoListContainer';

const App = ({ todosLength, loading, now }) => {
  const appComponent = () => {
    return (
      <div className="App__container">
        <Topbar todosLength={todosLength} now={now} />
        <TodoInputContainer />
        <TodoListContainer />
      </div>
    );
  };

  const loadingComponent = () => {
    return (
      <div className="App__container">
        <h2 className="App__loading">~~ LOADING ~~</h2>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="stripes">
        <div />
      </div>
      {loading ? loadingComponent() : appComponent()}
    </div>
  );
};

App.propTypes = {
  todosLength: PropTypes.number,
  loading: PropTypes.bool,
  now: PropTypes.instanceOf(Date)
};

export default App;
