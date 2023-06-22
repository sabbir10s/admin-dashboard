import React from 'react';

const CartComponent = () => {
  return (
    <div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Your Cart
          </h1>
        </div>

        <div className="mx-auto mt-8 max-w-2xl md:mt-12">
          <div className="bg-white dark:bg-gray-700 shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                    <div className="shrink-0">
                      <img
                        className="h-24 w-24 max-w-full rounded-lg object-cover"
                        src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
                        alt=""
                      />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-between">
                      <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div className="pr-8 sm:pr-5">
                          <p className="text-base font-semibold text-gray-900 dark:text-white">
                            Nike Air Max 2019
                          </p>
                          <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                            36EU - 4US
                          </p>
                        </div>

                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                          <p className="shrink-0 w-20 text-base font-semibold text-gray-900 dark:text-white sm:order-2 sm:ml-8 sm:text-right">
                            $259.00
                          </p>

                          <div className="sm:order-1">
                            <div className="mx-auto flex h-8 items-stretch text-gray-600">
                              <button className="flex items-center justify-center rounded-l-md bg-gray-200 dark:bg-gray-800/50 px-4 transition hover:bg-black hover:text-white">
                                -
                              </button>
                              <div className="flex w-full items-center justify-center bg-gray-100 dark:bg-gray-600 dark:text-white px-4 text-xs uppercase transition">
                                1
                              </div>
                              <button className="flex items-center justify-center rounded-r-md bg-gray-200 dark:bg-gray-800/50 px-4 transition hover:bg-black hover:text-white">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button
                          type="button"
                          className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900 dark:text-white"
                        >
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                              className=""
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                    <div className="shrink-0">
                      <img
                        className="h-24 w-24 max-w-full rounded-lg object-cover"
                        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-between">
                      <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div className="pr-8 sm:pr-5">
                          <p className="text-base font-semibold text-gray-900 dark:text-white">
                            Nike Air Max 2019
                          </p>
                          <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                            36EU - 4US
                          </p>
                        </div>

                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                          <p className="shrink-0 w-20 text-base font-semibold text-gray-900 dark:text-white sm:order-2 sm:ml-8 sm:text-right">
                            $259.00
                          </p>

                          <div className="sm:order-1">
                            <div className="mx-auto flex h-8 items-stretch text-gray-600 dark:text-gray-300">
                              <button className="flex items-center justify-center rounded-l-md bg-gray-200 dark:bg-gray-800/50 px-4 transition hover:bg-black hover:text-white">
                                -
                              </button>
                              <div className="flex w-full items-center justify-center bg-gray-100 dark:bg-gray-600 dark:text-white px-4 text-xs uppercase transition">
                                1
                              </div>
                              <button className="flex items-center justify-center rounded-r-md bg-gray-200 dark:bg-gray-800/50 px-4 transition hover:bg-black hover:text-white">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button
                          type="button"
                          className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900 dark:text-white"
                        >
                          <svg
                            className="block h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                              className=""
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Subtotal</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    $399.00
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Shipping</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    $8.00
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Total
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  <span className="text-xs font-normal text-gray-400">USD</span>{' '}
                  408.00
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-primary-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-primary-500"
                >
                  Checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
