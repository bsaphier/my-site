import React from 'react';
import Particles from 'react-particles-js';


const ParticlesWrapper = ({ particles }) => {
  return (
    <div id="particles-js">
      <Particles params={ particles } />
    </div>
  );
};

export default ParticlesWrapper;
