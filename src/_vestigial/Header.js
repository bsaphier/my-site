import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: {
        height: 0,
        width: 0
      }
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    return this.setState({
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    return window.addEventListener('resize', this.updateDimensions);
  }

  render() {
    const style = {
      height: this.state.window.height
    };

    return (
      <header id={this.props.id} style={style}>
        { this.props.children }
      </header>
    );
  }
}

export default connect()(Header);
