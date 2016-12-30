import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Menu from './ReduxBurgerMenu';


const Sidebar = ({ menuItems }) => {

  const fillMenu = menuItems.map((item, idx) => {
    let key = idx;
    return (
      <div key={ key }>
        <Link to={ item.link }>
          <span className="menu-item">{ item.title }</span>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <Menu
        id="sidebar"
        width={ 200 }
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
      >
        { fillMenu }
      </Menu>
    </div>
  );
};

const mapState = state => {
  return state.sidebarReducer;
};

export default connect(mapState)(Sidebar);
