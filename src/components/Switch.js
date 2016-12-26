import React from 'react';

const Switch = props => (
  <div>
    <h5>{props.label}</h5>
    <canvas data-nx="select" data-choices={props.choices}></canvas>
  </div>
);

export default Switch;
