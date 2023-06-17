import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function ActiveLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={`text-slate-500 font-normal hover:text-primary-500 ${
        match && 'text-primary-500'
      }`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
