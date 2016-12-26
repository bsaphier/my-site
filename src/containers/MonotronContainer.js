import React, { Component } from 'react';

/* ---> mount the UI controls <--- */
import monUI from '../lib/monotron/Monotron-UI.js';

/* ---> react components <--- */
import Monotron from '../components/Monotron.js';


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
