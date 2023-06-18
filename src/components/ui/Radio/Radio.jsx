import React from 'react';
import './Radio.css';
const Radio = ({ label, name }) => {
  return (
    <div className="flex items-center gap-x-3">
      <input id={label} name={name} type="radio" />
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
