import React from 'react';
import classNames from 'classnames';
import './Todo.css';

const Todo = ({ id, title, completed, toggleTodoStatus }) => {
  let buttonClass = classNames('Todo__button', { 'Todo__button--completed': completed });
  let titleClass = classNames('Todo__title', { 'Todo__title--completed': completed });

  return (
    <li className="Todo">
      <button className={buttonClass} onClick={() => toggleTodoStatus(id)} />
      <p className={titleClass}>{title}</p>
    </li>
  );
};

export default Todo;
