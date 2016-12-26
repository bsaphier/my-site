import React from 'react';
import { Col, Row, Well, Grid } from 'react-bootstrap';

import Knob from '../components/Knob.js';
import Switch from '../components/Switch.js';
import Keyboard from '../components/Keyboard.js';

const Monotron = () => (
  <Grid className="text-center" fluid={true}>
    <Well bsSize="large">

      <h3>MONOTRON</h3>

      <Row>
        <Col xs={4}>
          <Switch label="LFO Dest." choices="Pitch,Cutoff" />
        </Col>

        <Col xs={3}>
          <Knob label="VCO" />
        </Col>

        <Col xs={2}>
          <Knob label="LFO Rate" />
          <Knob label="LFO Int" />
        </Col>

        <Col xs={3}>
          <Knob label="VCF Cutoff" />
          <Knob label="VCF Peak" />
        </Col>
      </Row>

      <Col xs={4}>
        <canvas data-nx="typewriter"></canvas>
      </Col>

      <Col xs={4}>
        <Keyboard />
      </Col>

    </Well>
  </Grid>
);

export default Monotron;
