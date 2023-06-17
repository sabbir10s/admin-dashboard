import React, { useState } from 'react';

import MobileSidebar from '../MobileSidebar/MobileSidebar';

const Navbar = ({ handleSidebar }) => {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  // close mobile sidebar
  const handleMobileSidebar = () => {
    setMobileSidebar(false);
  };
  return (
    <div className="p-6 bg-white">
      <button className="hidden lg:block" onClick={handleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <button
        className="block lg:hidden"
        onClick={() => setMobileSidebar(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <MobileSidebar
        visible={mobileSidebar}
        handleMobileSidebar={handleMobileSidebar}
      />
    </div>
  );
};

export default Navbar;
