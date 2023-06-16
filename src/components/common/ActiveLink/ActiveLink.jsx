import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function ActiveLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={`py-4 text-slate-500 font-semibold ${
        match && 'text-primary-600'
      }`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
