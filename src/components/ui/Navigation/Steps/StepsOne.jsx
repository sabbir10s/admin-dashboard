import React from 'react';

const StepsOne = () => {
  return (
    <div>
      <div className="px-4 pt-12 pb-8">
        <div className="mx-auto w-full max-w-md">
          <div className="relative">
            <div
              className="absolute left-0 top-3 h-0.5 w-full bg-gray-200"
              aria-hidden="true"
            >
              <div className="h-full w-1/3 bg-primary-500"></div>
            </div>
            <ul className="relative flex w-full justify-between">
              <li className="text-left">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-semibold text-white"
                  href="#s"
                >
                  1
                </a>
              </li>
              <li className="text-left">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-semibold text-white ring ring-primary-500 ring-offset-2"
                  href="#s"
                >
                  2
                </a>
              </li>
              <li className="text-left">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#s"
                >
                  3
                </a>
              </li>
              <li className="text-left">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#s"
                >
                  4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsOne;
