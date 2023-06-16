import React from 'react';

import logo from '../../../assets/images/logo.jpeg';
import ActiveLink from '../ActiveLink/ActiveLink';

const Sidebar = () => {
  return (
    <div className="text-primary-900 w-1/4">
      <img className="w-28" src={logo} alt="" />
      <ul>
        <li>
          <ActiveLink to="/">Overview</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/product">Product</ActiveLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
