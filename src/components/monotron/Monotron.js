import React from 'react';
// import { Col, Row, Well, Grid } from 'react-bootstrap';

import Knob from './Knob';
import Switch from './Switch';
import Keyboard from './Keyboard';


const Monotron = () => (
  <div className="GRID text-center" fluid={true}>
    <div className="well">

      <h3>MONOTRON</h3>

      <div className="row">
        <div className="col" xs={4}>
          <Switch label="LFO Dest." choices="Pitch,Cutoff" />
        </div>
        <div className="col" xs={3}>
          <Knob label="VCO" />
        </div>
        <div className="col" xs={2}>
          <Knob label="LFO Rate" />
          <Knob label="LFO Int" />
        </div>
        <div className="col" xs={3}>
          <Knob label="VCF Cutoff" />
          <Knob label="VCF Peak" />
        </div>
      </div>

      <div className="col" xs={4}>
        <canvas data-nx="typewriter"></canvas>
      </div>
      <div className="col" xs={4}>
        <Keyboard />
      </div>
    </div>
  </div>
);

export default Monotron;
