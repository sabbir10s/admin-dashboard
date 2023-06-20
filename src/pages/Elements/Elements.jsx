import React from 'react';

import Avatar from '../../components/ui/Elements/Avatar/Avatar';
import Badges from '../../components/ui/Elements/Badges/Badges';
import ButtonGroup from '../../components/ui/Elements/ButtonGroup/ButtonGroup';
import DropDowns from '../../components/ui/Elements/Dropdowns/DropDowns';

const Elements = () => {
  return (
    <div className=" space-y-8">
      <Badges />
      <ButtonGroup />
      <DropDowns />
      <Avatar />
    </div>
  );
};

export default Elements;
