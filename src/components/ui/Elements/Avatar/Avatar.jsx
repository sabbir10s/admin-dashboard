import React from 'react';

import ActiveAvatar from './ActiveAvatar';
import CircularAvatars from './CircularAvatars';
import RoundedAvatars from './RoundedAvatars';

const Avatar = () => {
  return (
    <div className="space-y-4">
      <CircularAvatars />
      <ActiveAvatar />
      <RoundedAvatars />
    </div>
  );
};

export default Avatar;
