import React from 'react';

import Alert from '../../components/ui/Drawer/Alret/Alret';

const Drawer = () => {
  return (
    <div>
      <div className=" space-y-14">
        <div className="space-y-6">
          <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
            Alerts
          </h2>
          <Alert />
        </div>
        <div className="space-y-6">
          <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
            Alerts
          </h2>
          <div className="text-center">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
              data-drawer-target="drawer-example"
              data-drawer-show="drawer-example"
              aria-controls="drawer-example"
            >
              Show drawer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
