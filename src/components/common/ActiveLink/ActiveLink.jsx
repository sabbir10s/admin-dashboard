import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function ActiveLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={` font-normal ${
        match
          ? ' text-primary-600 dark:text-white'
          : 'text-gray-400 dark:hover:text-white'
      }`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
