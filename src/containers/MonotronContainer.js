import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ---> mount the UI controls <--- */
import monUI from '../lib/monotron/Monotron-UI';

/* ---> react components <--- */
import Monotron from '../components/monotron/Monotron';


class MonotronContainer extends Component {
  componentDidMount() {
    // monUI is all the synth logic. i.e. the M & C of MVC
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

export default connect()(MonotronContainer);
