import React from 'react';

const CircularAvatars = () => {
  return (
    <div className=" space-y-4">
      <h2 className="text-lg text-black font-medium dark:text-white">
        Circular avatars
      </h2>
      <div className="flex items-center justify-center space-x-8 border dark:border-gray-500 rounded-lg p-6">
        <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white uppercase">
          +1
        </div>
        <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-orange-500 text-xl text-white uppercase">
          l
        </div>
        <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-red-500 text-xl text-white uppercase">
          jc
        </div>
        <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-green-500 text-xl text-white uppercase">
          zxl
        </div>
        <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-primary-600 text-xl text-white uppercase">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
          </svg>
        </div>
        <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
          <img
            src="http://source.unsplash.com/100x100/?man"
            className="rounded-full"
            alt=""
          />
        </div>
        <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
          <img
            src="http://source.unsplash.com/100x100/?man"
            className="rounded-full"
            alt=""
          />
          <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default CircularAvatars;
