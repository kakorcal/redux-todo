import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import map from 'lodash/map';
import './TodoList.css';

const TodoList = ({ todos, toggleTodoStatus }) => {
  return (
    <ul className="TodoList">
      {map(todos, (todo, key) => {
        return <Todo key={key} id={key} todo={todo} toggleTodoStatus={toggleTodoStatus} />;
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool
  }),
  toggleTodoStatus: PropTypes.func
};

export default TodoList;
