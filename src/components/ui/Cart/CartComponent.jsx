import React from 'react';
import { useNavigate } from 'react-router';

import { cartItem } from '../../shared/Data/Data';
import { ButtonFill } from '../Button/Button';
import CartItemCard from './CartItemCard';

const CartComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/checkout');
  };
  return (
    <div>
      <div className="border-b pb-4 md:pb-8 xl:pb-12 dark:border-b-gray-500">
        <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Shopping Cart
        </h1>
        <div className="text-gray-700 dark:text-gray-400 space-x-1 text-sm md:text-lg">
          <a href="#home">Homepage</a>
          <span>/</span>
          <a href="#home">Clothing Categories</a>
          <span>/</span>
          <a href="#home" className=" underline">
            Shopping Cart
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:mt-8">
        <div className="xl:col-span-2 xl:border-r dark:border-gray-500 xl:pr-8">
          {cartItem.map((item) => (
            <CartItemCard key={item._id} item={item} />
          ))}
        </div>
        <div className="text-gray-900 dark:text-gray-200 mt-4 text-sm md:text-base">
          <h2 className=" text-xl xl:text-2xl">Order Summary</h2>
          <div className="flex items-center justify-between pt-4 md:pt-6 pb-4 border-b dark:border-gray-500">
            <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
            <span className="font-semibold">$249.00</span>
          </div>
          <div className="flex items-center justify-between pt-4 md:pt-6 pb-4 border-b dark:border-gray-500">
            <span className="text-gray-500 dark:text-gray-400">
              Shipping estimate
            </span>
            <span className="font-semibold">$5.00</span>
          </div>
          <div className="flex items-center justify-between pt-4 md:pt-6 pb-4 border-b dark:border-gray-500">
            <span className="text-gray-500 dark:text-gray-400">
              Tax estimate
            </span>
            <span className="font-semibold">$5.00</span>
          </div>
          <div className="flex items-center justify-between pt-4 md:pt-6 pb-4">
            <span className="font-semibold text-base md:text-lg">
              Order total
            </span>
            <span className="font-semibold text-base md:text-lg">$5.00</span>
          </div>
          <div className="flex justify-end w-full">
            <ButtonFill
              onClick={handleNavigate}
              className="w-full md:w-64 xl:w-full rounded-full mt-4 text-lg"
            >
              Checkout
            </ButtonFill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
