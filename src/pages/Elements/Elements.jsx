import React from 'react';

import Avatar from '../../components/ui/Elements/Avatar/Avatar';
import Badges from '../../components/ui/Elements/Badges/Badges';
import ButtonGroup from '../../components/ui/Elements/ButtonGroup/ButtonGroup';
import DropDowns from '../../components/ui/Elements/Dropdowns/DropDowns';

const Elements = () => {
  return (
    <div className=" space-y-14">
      <div className="space-y-6">
        <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
          Badges
        </h2>
        <Badges />
      </div>
      <div className="space-y-6">
        <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
          Button Group
        </h2>
        <ButtonGroup />
      </div>
      <div className="space-y-6">
        <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
          Dropdown
        </h2>
        <DropDowns />
      </div>
      <div className="space-y-6">
        <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
          Avatars
        </h2>
        <Avatar />
      </div>
    </div>
  );
};

export default Elements;
