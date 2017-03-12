import React from 'react';
import { Link } from 'react-router';

const NavItem = ({ link, name, rootPath }) => {
  const linkLink = link === 'home'
    ? (<Link to={ rootPath } className="smoothscroll shadow">{name}</Link>)
    : (<a className="smoothscroll shadow" href={`#${link}`}>{name}</a>);
  return (
    <li>
      { linkLink }
    </li>
  );
};

export default NavItem;
