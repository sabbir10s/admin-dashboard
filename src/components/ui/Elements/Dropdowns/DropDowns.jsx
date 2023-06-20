import React from 'react';

import DropdownClick from './DropdownClick';
import DropdownHover from './DropdownHover';

const DropDowns = () => {
  return (
    <div className=" flex items-center space-x-20">
      <DropdownHover />
      <DropdownClick />
    </div>
  );
};

export default DropDowns;
