import React from 'react';

import NavCenter from '../../components/ui/Navigation/AllNavbar/NavCenter';
import NavLeft from '../../components/ui/Navigation/AllNavbar/NavLeft';
import NavRight from '../../components/ui/Navigation/AllNavbar/NavRight';
import BreadcrumbOne from '../../components/ui/Navigation/Breadcrumb/BreadcrumbOne';
import PaginationOne from '../../components/ui/Navigation/Pagination/PaginationOne';
import PaginationTwo from '../../components/ui/Navigation/Pagination/PaginationTwo';
import TabOne from '../../components/ui/Navigation/Tabs/TabOne';

const Navigation = () => {
  return (
    <div className=" space-y-8">
      {/* All Navbar */}
      <div className="h-60 border dark:border-gray-500 p-4 space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Left Aligned</h2>
        <NavLeft />
      </div>
      <div className="h-60 border dark:border-gray-500 p-4 space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">
          Center Aligned
        </h2>
        <NavCenter />
      </div>
      <div className="h-60 border dark:border-gray-500 p-4 space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Right Aligned</h2>
        <NavRight />
      </div>
      {/* All Pagination */}
      <PaginationOne />
      <PaginationTwo />

      {/* Tabs */}
      <TabOne />
      {/* BreadCrumb */}
      <BreadcrumbOne />
    </div>
  );
};

export default Navigation;
