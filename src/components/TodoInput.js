import React, { component } from 'react';
import './TodoInput.css';

const TodoInput = () => {
  return (
    <div className="TodoInput">
      <input type="text" placeholder="Add todo..." />
      <button className="TodoInput__button" />
    </div>
  );
};

export default TodoInput;
