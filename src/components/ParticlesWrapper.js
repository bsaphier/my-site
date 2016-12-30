import React from 'react';
import Particles from 'react-particles-js';


const ParticlesWrapper = ({ style, params }) => {
  return (
    <Particles
      style={ style }
      params={ params }
    />
  );
};

export default ParticlesWrapper;
