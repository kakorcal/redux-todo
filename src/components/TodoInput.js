import React from 'react';
import './TodoInput.css';

const TodoInput = ({ todoText, handleInputChange, handleSubmit }) => {
  return (
    <div className="TodoInput">
      <input type="text" value={todoText} onChange={handleInputChange} placeholder="Add todo..." />
      <button className="TodoInput__button" onClick={handleSubmit} />
    </div>
  );
};

export default TodoInput;
