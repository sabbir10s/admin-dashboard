import React, { useState } from 'react';

import SidebarBodyScrolling from '../../components/common/Drawer/SidebarBodyScrolling';
import SidebarOffCanvas from '../../components/common/Drawer/SidebarOffCanvas';
import SidElements from '../../components/common/Drawer/SideElements';
import { ButtonFill, ButtonOutline } from '../../components/ui/Button/Button';
import Alert from '../../components/ui/Drawer/Alret/Alret';
const Drawer = () => {
  // Sidebar Off Canvas
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //Sidebar Body Scrolling
  const [isOpenBodyScrolling, setIsOpenBodyScrolling] = useState(false);

  const openModalBodyScrolling = () => {
    setIsOpenBodyScrolling(true);
  };

  const closeModalBodyScrolling = () => {
    setIsOpenBodyScrolling(false);
  };

  return (
    <div>
      <div className=" space-y-14">
        <div className="space-y-6">
          <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
            Alerts
          </h2>
          <Alert />
        </div>

        <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
          Modals
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Off Canvas */}
          <ButtonFill onClick={openModal}>Sidebar Off Canvas</ButtonFill>

          {/* Sidebar Body Scrolling */}
          <ButtonOutline onClick={openModalBodyScrolling}>
            Sidebar Body Scrolling
          </ButtonOutline>
        </div>
      </div>

      {/* Sidebar Off Canvas */}
      <SidebarOffCanvas isOpen={isOpen} onClose={closeModal}>
        <SidElements />
      </SidebarOffCanvas>

      {/* Sidebar Body Scrolling */}
      <SidebarBodyScrolling
        isOpenBodyScrolling={isOpenBodyScrolling}
        onClose={closeModalBodyScrolling}
      >
        <SidElements />
      </SidebarBodyScrolling>
    </div>
  );
};

export default Drawer;
