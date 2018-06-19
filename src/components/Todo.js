import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Todo.css';

const Todo = ({ id, todo, toggleTodoStatus }) => {
  let { title, completed } = todo;
  let buttonClass = classNames('Todo__button', { 'Todo__button--completed': completed });
  let titleClass = classNames('Todo__title', { 'Todo__title--completed': completed });

  return (
    <li className="Todo">
      <button className={buttonClass} onClick={() => toggleTodoStatus(todo, id)} />
      <p className={titleClass}>{title}</p>
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.string,
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool
  }),
  toggleTodoStatus: PropTypes.func
};

export default Todo;
