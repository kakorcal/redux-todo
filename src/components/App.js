import React, { Component } from 'react';
import './App.css';
import Topbar from './Topbar';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="App">
      <div className="stripes">
        <div />
      </div>
      <div className="App__container">
        <Topbar />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
