import React from 'react';
import { connect } from 'react-redux';


const Header = (props) => {
  const styles = {
    window: {
      width: '100vw',
      height: '100vh',
      position: 'relative'
    }
  };

  return (
    <section id={props.id} style={styles.window}>
      { props.children }
    </section>
  );
};

export default connect()(Header);
