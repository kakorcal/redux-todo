import React from 'react';
import Todo from './Todo';
import map from 'lodash/map';
import './TodoList.css';

const TodoList = ({ todos, toggleTodoStatus }) => {
  return (
    <ul className="TodoList">
      {map(todos, (todo, idx) => {
        return <Todo key={idx} {...todo} toggleTodoStatus={toggleTodoStatus} />;
      })}
    </ul>
  );
};

export default TodoList;
