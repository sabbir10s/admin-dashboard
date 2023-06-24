import React, { useState } from 'react';

const SidebarOffCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none"
        onClick={toggleModal}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-4 max-w-md mx-auto z-10">
            <h2 className="text-lg font-semibold mb-4">Offcanvas Modal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button
              className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarOffCanvas;
