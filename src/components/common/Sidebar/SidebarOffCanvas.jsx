import React from 'react';

const SidebarOffCanvas = ({ children, isOpen, onClose }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === 'sidebarContainer') onClose();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <button onClick={handleCloseModal}>
      <div>
        {isOpen && (
          <div className="fixed inset-0 z-50 ">
            <div
              id="sidebarContainer"
              className="absolute inset-0 bg-black opacity-50"
            ></div>
            <div className="bg-white p-4 max-w-md z-10 h-screen w-64 relative">
              <button className="absolute right-0" onClick={onClose}>
                Close
              </button>
              {children}
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default SidebarOffCanvas;
