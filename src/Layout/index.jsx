import React from 'react';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        {' '}
        <h1 className="text-3xl font-bold underline bg-primary-400 text-white py-2">
          Header!
        </h1>
      </header>
      <main>
        <div className="layout flex w-full">
          <aside className="sidebar bg-primary-100 p-10 w-full">
            {/* Add sidebar content */}
            Sidebar
          </aside>

          <main className="main-content bg-primary-400 text-white p-10 w-full">
            {/* Add main content */}
            {children}
          </main>
        </div>
      </main>
      <footer>
        {' '}
        <h1 className="text-3xl font-bold underline bg-primary-600 text-white py-2">
          Hello Footer !
        </h1>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
