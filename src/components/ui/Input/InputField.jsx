import React from 'react';

const InputField = ({ label, type, name, placeholder }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="input"
          className="block text-sm font-medium leading-6 text-gray-700 dark:text-white"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id="input"
          placeholder={placeholder}
          className="block w-full rounded-md border-[1px] border-gray-300 dark:border-gray-500 dark:focus:border-gray-300 py-1.5 px-2 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
        />
      </div>
    </div>
  );
};

export default InputField;
