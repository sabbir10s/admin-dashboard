import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/shared/Navbar/Navbar';
import Sidebar from '../components/shared/Sidebar/Sidebar';

const Layout = () => {
  const [sidebar, setSidebar] = useState(true);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <main className="flex bg-[#f9fafb] dark:bg-[#1a1c23]">
      {sidebar && (
        <div className="hidden lg:block w-72">
          <Sidebar />
        </div>
      )}
      <div className="w-full">
        <Navbar handleSidebar={handleSidebar} />
        <main className="bg-white dark:bg-[#121317] shadow w-full p-6 min-h-screen rounded-lg">
          <Outlet />
        </main>
      </div>
    </main>
  );
};

export default Layout;
