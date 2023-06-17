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
    <main className="flex bg-[#f9fafb]">
      {sidebar && (
        <div className="w-72 h-screen hidden lg:block">
          <Sidebar />
        </div>
      )}
      <div className="w-full">
        <Navbar handleSidebar={handleSidebar} />
        <main className="bg-white shadow w-full p-6 min-h-screen rounded-lg">
          <Outlet />
        </main>
      </div>
    </main>
  );
};

export default Layout;
