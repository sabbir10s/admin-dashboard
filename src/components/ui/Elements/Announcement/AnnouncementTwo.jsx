import React from 'react';

const AnnouncementTwo = () => {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 py-1.5">
        <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 sm:py-0 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <p className="ml-3 text-center font-medium leading-5 sm:text-left">
                <span className="">
                  <span className="rounded-md bg-rose-400 px-2 text-white">
                    Save
                  </span>{' '}
                  upto 20% with the summer coupons
                </span>
              </p>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="m-2 -mr-1 flex rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg
                  className="h-5 w-5 text-gray-600 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTwo;
