import React from 'react';


const Main = ({ children }) => (
  <div id="outer-container">
    <div id="background" />
    <main id="page-wrap" style={{ fontFamily: '"Roboto", sans-serif' }}>
      { children }
    </main>
  </div>
);

export default Main;
