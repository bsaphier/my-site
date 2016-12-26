import React from 'react';

import Navbar from './Navbar';

const Main = ({ children }) => (
  <div id="main">
    <Navbar />
    { children }
  </div>
);

export default Main;
