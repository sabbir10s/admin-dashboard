import React from 'react';

const Select = () => {
  return (
    <div>
      <label
        htmlFor="country"
        className="block text-sm font-medium leading-6 text-gray-700 dark:text-white"
      >
        Country
      </label>
      <div className="mt-2 relative inline-block">
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="appearance-none block w-64 rounded-md border-[1px] border-gray-300 dark:border-gray-500 dark:focus:border-gray-300 py-1.5 px-4 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-gray-700 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Select;
