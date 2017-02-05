import React from 'react';

// import SidebarContainer from '../containers/SidebarContainer';

const Main = ({ children }) => (
  <div id="outer-container">
    {/* <SidebarContainer /> */}
    <main id="page-wrap">
      { children }
    </main>
  </div>
);

export default Main;
