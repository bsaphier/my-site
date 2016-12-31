import React from 'react';
import { Link } from 'react-router';

import Menu from './ReduxBurgerMenu';


const Sidebar = ({ menuItems }) => {

  const fillMenu = menuItems.map((item, idx) => {
    let key = idx;
    return (
      <div key={ key } className="menu-item shadow">
        <Link to={ item.link }>
          <span>{ item.title }</span>
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

export default Sidebar;
