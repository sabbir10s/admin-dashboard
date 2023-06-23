import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/">
        <img className="w-20" src={logo} alt="" />
      </Link>
      <ul className="mt-8 space-y-2">
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/">
            Overview
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/form">
            Form
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/drawer">
            Drawer
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/table">
            Table
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/elements">
            Elements
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/navigation">
            Navigation
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/pricing">
            Pricing
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/productCard">
            Product Card
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/checkout">
            Checkout
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/cart">
            Cart
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/blogCard">
            Blog Card
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/testimonials">
            Testimonials
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/card">
            Card
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/faq">
            FAQ
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={handleMobileSidebar} to="/error">
            Error
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
