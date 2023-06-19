import React from 'react';

const RoundedAvatars = () => {
  return (
    <div className=" space-y-4">
      <h2 className="text-lg text-black font-medium dark:text-white">
        Rounded avatars
      </h2>
      <div className="flex items-center justify-center space-x-8 border dark:border-gray-500 rounded-lg p-6">
        <img
          className="w-6 h-6 rounded ring-2 ring-white"
          src="https://randomuser.me/api/portraits/men/64.jpg"
          alt="profile"
        ></img>
        <img
          className="w-8 h-8 rounded ring-2 ring-white"
          src="https://randomuser.me/api/portraits/men/64.jpg"
          alt="profile"
        ></img>
        <img
          className="w-10 h-10 rounded ring-2 ring-white"
          src="https://randomuser.me/api/portraits/men/64.jpg"
          alt="profile"
        ></img>
        <img
          className="w-12 h-12 rounded ring-2 ring-white"
          src="https://randomuser.me/api/portraits/men/64.jpg"
          alt="profile"
        ></img>
        <img
          className="w-14 h-14 rounded ring-2 ring-white"
          src="https://randomuser.me/api/portraits/men/64.jpg"
          alt="profile"
        ></img>
      </div>
    </div>
  );
};

export default RoundedAvatars;
