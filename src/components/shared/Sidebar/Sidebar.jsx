import React from 'react';

import logo from '../../../assets/images/logo-removebg-preview.png';
import ActiveLink from '../../common/ActiveLink/ActiveLink';

const Sidebar = ({ handleMobileSidebar }) => {
  return (
    <div className="pl-10 relative">
      <button
        className="block lg:hidden absolute top-4 right-4 bg-black text-white p-1 rounded-full"
        onClick={handleMobileSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <img className="w-20" src={logo} alt="" />
      <ul className="mt-8 space-y-2">
        <li>
          <ActiveLink to="/">Overview</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/form">Form</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/drawer">Drawer</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/table">Table</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/elements">Elements</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/navigation">Navigation</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/pricing">Pricing</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/productCard">Product Card</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/error">Error</ActiveLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
