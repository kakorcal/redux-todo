import React from 'react';
import './Topbar.css';

const Topbar = ({ todosLength }) => {
  return (
    <div className="Topbar">
      <div className="Topbar__row">
        <span className="Topbar__date">
          <strong>Thursday, </strong>
          <span>10th</span>
        </span>
        <span className="Topbar__tasks">{todosLength} Tasks</span>
      </div>
      <div className="Topbar__row">
        <span className="Topbar__month">December</span>
      </div>
    </div>
  );
};

export default Topbar;
