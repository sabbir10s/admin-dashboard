import React, { useState } from 'react';

import StarRating from '../../common/StarRating/StarRating';
import QuantityInput from '../Elements/QuantityInput/QuantityInput';
import Select from '../Form/Select/Select';

const CartItemCard = ({ item }) => {
  const { _id, name, image, rating, price, stock } = item;
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div
        className="border-b py-6 md:py-8 dark:border-b-gray-500 flex items-start gap-6"
        key={_id}
      >
        <div className="inline-block w-[150px] h-[130px] bg-gray-200 rounded-lg">
          <img
            className="w-full h-full object-cover object-center"
            src={image}
            alt=""
          />
        </div>
        <div className="w-full space-y-3 lg:space-y-5">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="w-full">
              <p className="dark:text-gray-200 text-sm md:text-base">{name}</p>
              <div className="pt-1 lg:pt-2">
                <StarRating rating={rating} starSize={5} />
              </div>
            </div>
            <div className="flex items-center justify-between w-full mt-2 md:mt-0">
              <div className="hidden md:block">
                <QuantityInput />
              </div>
              <div className="block md:hidden">
                <Select
                  className="w-12 space-x-4 py-1 text-sm"
                  options={options}
                  value={selectedOption}
                  onChange={handleSelectChange}
                />
              </div>
              <p className="border-[2px] border-primary-400 text-primary-400 px-2 rounded-lg">
                ${price}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {stock && (
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 border dark:border-gray-400 px-1.5 py-0.5 rounded-full text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>In Stock</span>
              </div>
            )}
            {!stock && (
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 border dark:border-gray-400 px-1.5 py-0.5 rounded-full text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>

                <span>Sold Out</span>
              </div>
            )}
            <button className="text-red-400 hover:text-red-600 duration-300">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
