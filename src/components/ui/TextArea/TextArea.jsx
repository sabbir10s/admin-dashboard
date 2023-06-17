import React from 'react';

const TextArea = ({ label, name, placeholder, required, cols, rows }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="textArea"
          className="block text-sm font-medium leading-6 text-gray-700 dark:text-white"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <textarea
          name={name}
          id="textArea"
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          required={required}
          className="block w-full rounded-md border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
