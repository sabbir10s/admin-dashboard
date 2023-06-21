import React from 'react';

const StepsTwo = () => {
  return (
    <div className="px-4 pt-12 pb-8">
      <div className="mx-auto w-full max-w-lg">
        <div className="relative">
          <ul className="relative flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <li className="flex space-x-4 text-left">
              <a
                className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold text-white"
                href="#s"
              >
                1
              </a>
              <span className="text-sm font-semibold text-primary-600">
                About you
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
            <li className="flex space-x-4 text-left">
              <a
                className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold text-white ring ring-primary-500 ring-offset-2"
                href="#s"
              >
                2
              </a>
              <span className="text-sm font-semibold text-primary-600">
                Billing Information
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
            <li className="flex space-x-4 text-left">
              <a
                className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-sm font-semibold text-white"
                href="#s"
              >
                3
              </a>
              <span className="text-sm font-semibold text-gray-500">
                Get Started
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StepsTwo;
