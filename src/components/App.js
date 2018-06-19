import React from 'react';
import './App.css';
import Topbar from './Topbar';
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContainer from '../containers/TodoListContainer';

const App = props => {
  return (
    <div className="App">
      <div className="stripes">
        <div />
      </div>
      <div className="App__container">
        <Topbar {...props} />
        <TodoInputContainer />
        <TodoListContainer />
      </div>
    </div>
  );
};

export default App;
