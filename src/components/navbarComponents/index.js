import React from 'react';

import NavItem from './navItem';

const Navbar = ({ navbar }) => {
  return (
    <nav id="nav-wrap" className="opaque">
      <ul id="nav" className="nav">
        {Object.keys(navbar).map((navLink, idx) => {
          const navItemTitle = navbar[navLink];
          return (navItemTitle === navbar.root) ?
            null :
            (<NavItem
              link={navLink}
              name={navItemTitle}
              key={`nav${idx * 1}`}
              rootPath={navbar.root}
            />);
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
