import React, { useState } from 'react';

import StarRating from '../../common/StarRating/StarRating';
import QuantityInput from '../Elements/QuantityInput/QuantityInput';
import Select from '../Form/Select/Select';
const cartItem = [
  {
    _id: 1,
    name: 'Coffee-Mate Coffee Creamer',
    price: 100,
    del_price: 20,
    rating: 4.5,
    review: 100,
    discount: 20,
    stock: true,
    image: 'https://i.ibb.co/5FcjfPQ/product.png',
  },
  {
    _id: 2,
    name: 'Coffee-Mate Coffee Creamer',
    price: 100,
    del_price: 20,
    rating: 4.5,
    review: 100,
    discount: 20,
    stock: false,
    image: 'https://i.ibb.co/5FcjfPQ/product.png',
  },
];
const CartComponent = () => {
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
      <div className="border-b pb-12 dark:border-b-gray-500">
        <h1 className="text-gray-900 dark:text-white text-4xl font-semibold mb-4">
          Shopping Cart
        </h1>
        <div className="text-gray-700 dark:text-gray-400 space-x-1">
          <a href="#home">Homepage</a>
          <span>/</span>
          <a href="#home">Clothing Categories</a>
          <span>/</span>
          <a href="#home" className=" underline">
            Shopping Cart
          </a>
        </div>
      </div>

      <div>
        {cartItem.map((item) => (
          <div
            className="mt-12 border-b pb-8 dark:border-b-gray-500 flex items-start gap-6"
            key={item._id}
          >
            <div className="inline-block w-[150px] h-[130px] bg-gray-200 rounded-lg">
              <img
                className="w-full h-full object-cover object-center"
                src={item.image}
                alt=""
              />
            </div>
            <div className="w-full space-y-3 lg:space-y-5">
              <div className="flex flex-col md:flex-row items-start justify-between">
                <div className="w-full">
                  <p className="dark:text-gray-200">{item.name}</p>
                  <div>
                    <StarRating rating={item.rating} starSize={5} />
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
                    ${item.price}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                {item.stock && (
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 border px-1.5 py-0.5 rounded-full text-sm">
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
                {!item.stock && (
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 border px-1.5 py-0.5 rounded-full text-sm">
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
        ))}
      </div>
    </div>
  );
};

export default CartComponent;
