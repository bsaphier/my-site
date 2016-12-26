import React from 'react';

const Knob = props => (
  <div>
    <h5>{props.label}</h5>
    <canvas data-nx="dial"></canvas>
  </div>
);

export default Knob;
