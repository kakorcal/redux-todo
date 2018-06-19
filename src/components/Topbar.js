import React from 'react';
import PropTypes from 'prop-types';
import './Topbar.css';
import dateFormat from 'dateformat';

const Topbar = ({ todosLength, now }) => {
  return (
    <div className="Topbar">
      <div className="Topbar__row">
        <span className="Topbar__date">
          <strong>{dateFormat(now, 'dddd')}, </strong>
          <span>{dateFormat(now, 'dS')}</span>
        </span>
        <span className="Topbar__tasks">{todosLength} Tasks</span>
      </div>
      <div className="Topbar__row">
        <span className="Topbar__month">{dateFormat(now, 'mmmm')}</span>
      </div>
    </div>
  );
};

Topbar.propTypes = {
  todosLength: PropTypes.number,
  now: PropTypes.instanceOf(Date)
};

export default Topbar;
