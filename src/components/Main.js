import React from 'react';

import Sidebar from './Sidebar';

const Main = ({ children }) => (
  <div id="outer-container">
    <Sidebar />
    <main id="page-wrap">
      { children }
    </main>
  </div>
);

export default Main;
