import React from 'react';

import NavItem from './navItem';

const NavBar = ({ navbar }) => {
  return (
    <nav id="nav-wrap" className="opaque">
      <ul id="nav" className="nav">
        {Object.keys(navbar).map((navLink, idx) => {
          const navItemTitle = navbar[navLink];
          return (
            <NavItem
              link={navLink}
              key={`nav${idx * 1}`}
              name={navItemTitle} />
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
