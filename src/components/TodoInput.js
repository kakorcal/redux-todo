import React, { component } from 'react';
import './TodoInput.css';

const TodoInput = () => {
  return (
    <div className="TodoInput">
      <input type="text" />
      <button className="TodoButton--add">Add</button>
    </div>
  );
};

export default TodoInput;
