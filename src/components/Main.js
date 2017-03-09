import React from 'react';


const Main = ({ children }) => (
  <div id="outer-container">
    <main id="page-wrap" style={{ fontFamily: '"Roboto", sans-serif' }}>
      { children }
    </main>
  </div>
);

export default Main;
