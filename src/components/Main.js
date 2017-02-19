import React from 'react';


const Main = ({ children }) => (
  <div id="outer-container">
    <main id="page-wrap">
      { children }
    </main>
  </div>
);

export default Main;
