import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

const Home = () => (
  <Grid>

    <div className="container-fluid animated fadeInDownBig">
      <div className="text-center">
        <button className="btn btn-custom btn-lg wavy--shit" type="button">Ben Saphier</button>
      </div>
    </div>

    <Row className="animated fadeIn">
      <Col lg={4}>
        <p className="wavy--shit">webpack is bundling everything as expected</p>
      </Col>
      <Col lg={4}>
        <p className="shadow">don't stop the funk</p>
      </Col>
    </Row>

  </Grid>
);

export default Home;
