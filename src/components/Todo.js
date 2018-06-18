import React, { component } from 'react';
import './Todo.css';

const Todo = () => {
  return (
    <li className="Todo">
      <button className="Todo__button Todo__button--completed" />
      <p className="Todo__title Todo__title--completed">
        My Todo Text more stuff I add i like to do alsd why did you leave me
      </p>
    </li>
  );
};

export default Todo;
