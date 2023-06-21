import React from 'react';

const StepsThree = () => {
  return (
    <div className="mx-auto mt-8 max-w-lg px-4 py-2 pt-12 pb-8 text-xs sm:ml-auto sm:text-base">
      <div className="relative">
        <ul className="relative flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
              href="#s"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </a>
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              Shop
            </span>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hidden h-4 w-4 text-gray-400 sm:block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
              href="#s"
            >
              2
            </a>
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              Shipping
            </span>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hidden h-4 w-4 text-gray-400 sm:block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
              href="#s"
            >
              3
            </a>
            <span className="font-semibold text-gray-500 dark:text-gray-200">
              Payment
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StepsThree;
