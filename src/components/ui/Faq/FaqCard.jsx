import React from 'react';

const FaqCard = ({ faq }) => {
  const { question, answer, _id } = faq;
  return (
    <div>
      <li className="text-left dark:bg-gray-700">
        <label
          htmlFor={_id}
          className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
        >
          <input className="peer hidden" type="checkbox" id={_id} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
            <h3 className="text-sm text-gray-600 dark:text-white lg:text-base">
              {question}
            </h3>
          </div>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
            <div className="p-5">
              <p className="text-sm">{answer}</p>
            </div>
          </div>
        </label>
      </li>
    </div>
  );
};

export default FaqCard;
