import React from 'react';

import Sidebar from '../components/common/Sidebar/Sidebar';
import Header from '../components/shared/Header/Header';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <div className="flex">
          <aside>
            {/* Add sidebar content */}
            <Sidebar />
          </aside>

          <main>
            {/* Add main content */}
            {children}
          </main>
        </div>
      </main>
      <footer>
        {' '}
        <h1>Hello Footer !</h1>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
