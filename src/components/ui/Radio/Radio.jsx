import React from 'react';

const Radio = ({ label }) => {
  return (
    <div className="flex items-center gap-x-3">
      <input
        id={label}
        name="push-notifications"
        type="radio"
        className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
      />
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
