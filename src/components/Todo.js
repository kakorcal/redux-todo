import React from 'react';
import classNames from 'classnames';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import './Todo.css';

const Todo = ({ id, todo, toggleTodoStatus }) => {
  let { title, completed, timestamp } = todo;
  let buttonClass = classNames('Todo__button', { 'Todo__button--completed': completed });
  let titleClass = classNames('Todo__title', { 'Todo__title--completed': completed });
  let timeClass = classNames('Todo__timestamp', { 'Todo__timestamp--completed': completed });

  return (
    <li className="Todo">
      <button className={buttonClass} onClick={() => toggleTodoStatus(todo, id)} />
      <p className={titleClass}>{title}</p>
      <span className={timeClass}>{dateFormat(timestamp, 'shortTime')}</span>
      {/* <button className='Todo__button__remove'></button> */}
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
