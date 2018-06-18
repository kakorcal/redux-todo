import React, { component } from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  return (
    <ul className="TodoList">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </ul>
  );
};

export default TodoList;
