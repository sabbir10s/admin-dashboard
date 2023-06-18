import React from 'react';
import './checkbox.css';
const Checkbox = ({ label }) => {
  return (
    <div className="flex items-center sm:text-sm sm:leading-6">
      <label className="checkbox-btn  flex items-center">
        {label}
        <label htmlFor="checkbox"> </label>
        <input id="checkbox" type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
