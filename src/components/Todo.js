import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Todo.css';
// import dateFormat from 'dateformat';

const Todo = ({ id, todo, toggleTodoStatus, removeTodo }) => {
  let { title, completed } = todo;
  let buttonClass = classNames('Todo__button', { 'Todo__button--completed': completed });
  let titleClass = classNames('Todo__title', { 'Todo__title--completed': completed });
  // let timeClass = classNames('Todo__timestamp', { 'Todo__timestamp--completed': completed });

  return (
    <li className="Todo">
      <button className={buttonClass} onClick={() => toggleTodoStatus(todo, id)} />
      <p className={titleClass}>{title}</p>
      <button className="Todo__button__remove" onClick={() => removeTodo(id)} />
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.string,
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    timestamp: PropTypes.string
  }),
  toggleTodoStatus: PropTypes.func
};

export default Todo;
