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
      </div>
    </div>
  );
};

export default Drawer;
