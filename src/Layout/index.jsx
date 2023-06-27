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
    <main className="flex bg-[#f9fafb] dark:bg-[#1a1c23] w-full">
      {sidebar && (
        <div className="hidden xl:block w-64">
          <Sidebar />
        </div>
      )}
      <div className="w-full">
        <Navbar handleSidebar={handleSidebar} />
        <main className="bg-white dark:bg-[#121317] shadow p-2 md:p-3 lg:p-6 min-h-screen rounded-lg">
          <Outlet />
        </main>
      </div>
    </main>
  );
};

export default Layout;
