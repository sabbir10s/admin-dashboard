import React, { useState } from 'react';

import Navbar from '../components/shared/Navbar/Navbar';
import Sidebar from '../components/shared/Sidebar/Sidebar';

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <main className="flex">
      {sidebar && (
        <div className="w-72 bg-white h-screen hidden lg:block">
          <Sidebar />
        </div>
      )}
      <div className="w-full">
        <Navbar handleSidebar={handleSidebar} />
        <main className="bg-[#f9fafb] shadow w-full p-6">{children}</main>
      </div>
    </main>
  );
};

export default Layout;
