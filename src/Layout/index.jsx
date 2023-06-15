import React from 'react';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>Header</header>
      <main>
        <div className="layout">
          <aside className="sidebar">
            {/* Add sidebar content */}
            Sidebar
          </aside>

          <main className="main-content">
            {/* Add main content */}
            {children}
          </main>
        </div>
      </main>
      <footer>Footer</footer>
    </React.Fragment>
  );
};

export default Layout;
