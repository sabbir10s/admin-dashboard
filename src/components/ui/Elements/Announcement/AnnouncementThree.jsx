import React from 'react';

const AnnouncementThree = () => {
  return (
    <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
      <div className="rounded bg-primary-600 p-2 shadow-lg sm:p-3">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">Updates to privacy policy</span>
              <span className="hidden md:inline">
                We`ve updated our privacy policy. Have a look
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#s"
              className="flex items-center justify-center rounded bg-yellow-400 px-4 py-2 text-sm font-medium text-blue-900 shadow-sm hover:bg-yellow-500"
            >
              Privacy Policy
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              type="button"
              className="-mr-1 flex rounded p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-blue-600"
            >
              <svg
                className="h-6 w-6 text-white"
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
  );
};

export default AnnouncementThree;
