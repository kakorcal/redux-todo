import React from 'react';
import './TodoInput.css';

const TodoInput = ({ todoText, handleKeyUp, handleInputChange, handleSubmit }) => {
  return (
    <div className="TodoInput">
      <input
        type="text"
        value={todoText}
        onKeyUp={handleKeyUp}
        onChange={handleInputChange}
        placeholder="Add todo..."
      />
      <button className="TodoInput__button" onClick={handleSubmit} />
    </div>
  );
};

export default TodoInput;
