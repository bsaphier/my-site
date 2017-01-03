import React from 'react';

const Banner = ({ basics }) => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1 className="responsive-headline">{basics.name}</h1>
      </div>
    </div>
  );
};

export default Banner;
