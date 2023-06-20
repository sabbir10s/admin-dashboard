import React from 'react';
import './Radio.css';
const Radio = ({ label, name }) => {
  return (
    <div>
      <input id={label} name={name} type="radio" />
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-700 dark:text-white"
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
