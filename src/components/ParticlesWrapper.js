import React from 'react';
import Particles from 'react-particles-js';


const ParticlesWrapper = ({ particles }) => {
  return (
    <div id="particles-js">
      <Particles
        width="100vw"
        height="100vh"
        params={ particles }
      />
    </div>
  );
};

export default ParticlesWrapper;
