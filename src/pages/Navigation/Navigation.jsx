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
    <div className=" space-y-14">
      {/* All Navbar */}

      <div className="space-y-6">
        <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
          Navbar
        </h2>
        <div className="h-60 border dark:border-gray-500 p-4 space-y-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Left Aligned
          </h2>
          <NavLeft />
        </div>
        <div className="h-60 border dark:border-gray-500 p-4 space-y-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Center Aligned
          </h2>
          <NavCenter />
        </div>
        <div className="h-60 border dark:border-gray-500 p-4 space-y-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Right Aligned
          </h2>
          <NavRight />
        </div>
      </div>

      {/* All Pagination */}

      <div className="space-y-6">
        <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
          Pagination
        </h2>
        <div className="space-y-14">
          <PaginationOne />
          <PaginationTwo />
        </div>
      </div>

      {/* Tabs */}

      <div className="space-y-6">
        <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
          Tab
        </h2>
        <div className="space-y-14">
          <TabOne />
        </div>
      </div>

      {/* BreadCrumb */}

      <div className="space-y-6">
        <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
          Breadcrumb
        </h2>
        <div className="space-y-14">
          <BreadcrumbOne />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
