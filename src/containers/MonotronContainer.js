import React, { Component } from 'react';

/* ---> mount the UI controls <--- */
import monUI from '../lib/monotron/Monotron-UI';

/* ---> react components <--- */
import Monotron from '../components/monotron/Monotron';


export default class MonotronContainer extends Component {
  componentDidMount() {
    return monUI; //do this in a better way
  }
  render () {
    return (
      <div className="container-fluid">
        <Monotron />
      </div>
    );
  }
}
