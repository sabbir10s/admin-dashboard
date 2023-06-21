import React, { useState } from 'react';

const ProductCardOne = ({ productInfo }) => {
  const [wishlist, setWishlist] = useState(false);

  const { name, image, price } = productInfo;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-100 shadow w-full  max-w-xs">
      <a href="#s" className="group relative block overflow-hidden">
        <button
          onClick={() => setWishlist(!wishlist)}
          className="absolute end-4 top-4 z-10 rounded-full p-1.5 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 transition hover:text-gray-900/75"
        >
          <span className="sr-only">Wishlist</span>

          {!wishlist && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          )}
          {wishlist && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#FF5555"
              stroke="#FF5555"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          )}
        </button>

        <img
          src={image}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative p-6">
          <span className="whitespace-nowrap bg-primary-600 text-white px-3 py-1.5 text-xs font-medium">
            New
          </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            {name}
          </h3>

          <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-200">
            ${price}
          </p>

          <form className="mt-4">
            <button className="block w-full rounded bg-primary-600 p-4 text-sm text-white font-medium transition hover:scale-105">
              Add to Cart
            </button>
          </form>
        </div>
      </a>
    </div>
  );
};

export default ProductCardOne;
