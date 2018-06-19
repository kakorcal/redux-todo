import React from 'react';
import PropTypes from 'prop-types';
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

TodoInput.propTypes = {
  todoText: PropTypes.string,
  handleKeyUp: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default TodoInput;
