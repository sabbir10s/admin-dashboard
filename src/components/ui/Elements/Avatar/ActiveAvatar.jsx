import React from 'react';

const ActiveAvatar = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg text-black font-medium dark:text-white">
        Active avatars
      </h2>
      <div className="flex items-center justify-center space-x-8 border dark:border-gray-500 rounded-lg p-6">
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full"
            src="http://source.unsplash.com/100x100/?man"
            alt=""
          />
          <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="relative">
          <img
            className="w-10 h-10 rounded"
            src="http://source.unsplash.com/100x100/?man"
            alt=""
          />
          <span className="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full"
            src="http://source.unsplash.com/100x100/?man"
            alt=""
          />
          <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="relative">
          <img
            className="w-12 h-12 rounded"
            src="http://source.unsplash.com/100x100/?man"
            alt=""
          />
          <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ActiveAvatar;
