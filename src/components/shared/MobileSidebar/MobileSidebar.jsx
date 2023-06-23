import React from 'react';

import Sidebar from '../Sidebar/Sidebar';

const MobileSidebar = ({ visible, handleMobileSidebar }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === 'container') handleMobileSidebar();
  };

  if (!visible) {
    return null;
  }
  return (
    <button
      onClick={handleCloseModal}
      id="container"
      className="lg:hidden z-30 fixed inset-0 bg-black bg-opacity-30"
    >
      <div className="bg-white w-full md:w-72 h-screen text-start">
        <Sidebar handleMobileSidebar={handleMobileSidebar} />
      </div>
    </button>
  );
};

export default MobileSidebar;
