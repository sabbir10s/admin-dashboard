import React from 'react';

import DropdownClick from './DropdownClick';
import DropdownHover from './DropdownHover';

const DropDowns = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center gap-20">
      <DropdownHover />
      <DropdownClick />
    </div>
  );
};

export default DropDowns;
