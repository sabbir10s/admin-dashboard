import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const navItems = [
  {
    name: 'About',
    link: '/',
  },
  {
    name: 'Careers',
    link: '/',
  },
  {
    name: 'History',
    link: '/',
  },
  {
    name: 'Service',
    link: '/',
  },
  {
    name: 'Project',
    link: '/',
  },
  {
    name: 'Blog',
    link: '/',
  },
];
const NavLeft = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOptionClick = () => {
    setIsOpen(false);
  };
  return (
    <header className="bg-[#f9fafb] dark:bg-[#1a1c23]">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-primary-600" to="/">
          <svg
            className="h-10 mr-3"
            width="51"
            height="70"
            viewBox="0 0 51 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z"
                fill="#5997d7"
              ></path>
              <path
                d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z"
                fill="#93bbe6"
              ></path>
              <path
                d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z"
                fill="#2460a5"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="51" height="70" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </Link>

        <div className="flex flex-1 items-center justify-end lg:justify-between">
          <nav aria-label="Global" className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm">
              {navItems.map((items) => (
                <li key={items.name}>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to={items.link}
                  >
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex lg:gap-4 ">
              <Link
                className="block rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-700"
                to="/"
              >
                Login
              </Link>

              <Link
                className="rounded-md px-5 py-2.5 text-sm font-medium bg-gray-100 dark:bg-transparent border dark:border-gray-400 dark:hover:border-gray-50  text-primary-600 dark:text-gray-400 dark:hover:text-gray-50 transition hover:text-primary-600/75 sm:block"
                to="/"
              >
                Register
              </Link>
            </div>

            <div className="block lg:hidden p-2.5 text-gray-600 transition hover:text-gray-600/75 ">
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  className=" p-2 text-gray-600 dark:text-gray-200 transition hover:text-gray-600/75"
                  onClick={toggleDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 py-2 text-left text-sm text-gray-700 dark:text-gray-200 bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="py-1 flex flex-col gap-3 text-start">
                      {navItems.map((item) => (
                        <button key={item.name} onClick={handleOptionClick}>
                          <Link
                            to={item.link}
                            className="block text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {item.name}
                          </Link>
                        </button>
                      ))}

                      <div className="flex flex-col gap-4 mx-2 ">
                        <Link
                          className="block rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-700"
                          to="/"
                        >
                          Login
                        </Link>

                        <Link
                          className="rounded-md px-5 py-2.5 text-sm font-medium bg-gray-100 dark:bg-transparent border dark:border-gray-400 dark:hover:border-gray-50  text-primary-600 dark:text-gray-400 dark:hover:text-gray-50 transition hover:text-primary-600/75 sm:block"
                          to="/"
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavLeft;
