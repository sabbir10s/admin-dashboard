import React from 'react';

import { cartItem } from '../../shared/Data/Data';
import { ButtonFill } from '../Button/Button';
import CartItemCard from '../Cart/CartItemCard';

const CheckoutComponent = () => {
  return (
    <div>
      <div className="border-b pb-4 md:pb-8 xl:pb-12 dark:border-b-gray-500">
        <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Checkout
        </h1>
        <div className="text-gray-700 dark:text-gray-400 space-x-1 text-sm md:text-lg">
          <a href="#home">Homepage</a>
          <span>/</span>
          <a href="#home">Clothing Categories</a>
          <span>/</span>
          <a href="#home" className=" underline">
            Checkout
          </a>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 gap-10 pt-6 xl:pt-12">
        <div className="dark:text-gray-200 ">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div>
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-primary-500 focus:ring-primary-500 block border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-primary-500 focus:ring-primary-500 block border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Details
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  className="w-full rounded-md px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-primary-500 focus:ring-primary-500 block border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="credit-expiry"
                className="w-full rounded-md px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-primary-500 focus:ring-primary-500 block border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
                placeholder="MM/YY"
              />
              <input
                type="text"
                name="credit-cvc"
                className="w-1/6 flex-shrink-0 px-2 rounded-md py-3 text-sm shadow-sm focus:z-10 focus:border-primary-500 focus:ring-primary-500 block border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
                placeholder="CVC"
              />
            </div>
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row gap-5 md:gap-0">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-primary-500 focus:ring-primary-500 block border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                    alt=""
                  />
                </div>
              </div>
              <select
                type="text"
                name="billing-state"
                className="w-full rounded-md pl-2 py-3 text-sm shadow-sm focus:z-10 focus:border-primary-500 focus:ring-primary-500 block border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300  dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chottogram ">Chottogram </option>
                <option value="khulna ">khulna</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 sm:w-1/6 w-full rounded-md px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-primary-500 focus:ring-primary-500 block border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
                placeholder="ZIP"
              />
            </div>
            <p className="mt-8 text-lg font-medium dark:text-gray-200">
              Shipping Methods
            </p>
            <form className="mt-5 grid gap-6">
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked={true}
                />
                <span className="peer-checked:border-gray-700 dark:peer-checked:border-gray-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 dark:border-gray-500 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-50 peer-checked:bg-gray-50 dark:peer-checked:bg-gray-700 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_1"
                >
                  <img
                    className="w-14 object-contain"
                    src="/images/naorrAeygcJzX0SyNI4Y0.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold dark:text-gray-200">
                      Fedex Delivery
                    </span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  checked={true}
                />
                <span className="peer-checked:border-gray-700 dark:peer-checked:border-gray-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-50 peer-checked:bg-gray-50 dark:peer-checked:bg-gray-700 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_2"
                >
                  <img
                    className="w-14 object-contain"
                    src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold dark:text-gray-200">
                      Fedex Delivery
                    </span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div>
          <p className="text-xl font-medium dark:text-gray-200">
            Order Summary
          </p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="space-y-3">
            {cartItem.map((item) => (
              <CartItemCard key={item._id} item={item} />
            ))}
          </div>
          <div className="text-gray-900 dark:text-gray-200 mt-4 text-sm md:text-base">
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
              <ButtonFill className="w-full md:w-64 xl:w-full rounded-full mt-4 text-lg">
                Checkout
              </ButtonFill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
