import React from 'react';
import './Toggle.css';
const Toggle = () => {
  return (
    <div>
      <label htmlFor="toggle" className="cursor-pointer">
        <div className="relative">
          <input id="toggle" type="checkbox" className="hidden" />
          <div className="toggle__line w-12 h-6 bg-gray-200 rounded-full shadow-inner"></div>
          <div className="toggle__dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0"></div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
