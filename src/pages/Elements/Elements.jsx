import React from 'react';

import AnnouncementOne from '../../components/ui/Elements/Announcement/AnnouncementOne';
import AnnouncementThree from '../../components/ui/Elements/Announcement/AnnouncementThree';
import AnnouncementTwo from '../../components/ui/Elements/Announcement/AnnouncementTwo';
import Avatar from '../../components/ui/Elements/Avatar/Avatar';
import Badges from '../../components/ui/Elements/Badges/Badges';
import ButtonGroup from '../../components/ui/Elements/ButtonGroup/ButtonGroup';
import DropDowns from '../../components/ui/Elements/Dropdowns/DropDowns';
import QuantityInput from '../../components/ui/Elements/QuantityInput/QuantityInput';

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
          Announcement
        </h2>
        <div className=" space-y-14">
          <AnnouncementOne />
          <AnnouncementTwo />
          <AnnouncementThree />
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-gray-700 dark:text-gray-400 text-2xl font-semibold">
          Quantity Input
        </h2>
        <QuantityInput />
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
