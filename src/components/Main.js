import React from 'react';

import Navbar from './Navbar';

const Main = ({ children }) => (
  <div>
    <Navbar />
    { children }
  </div>
);

export default Main;
