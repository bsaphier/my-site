import React from 'react';
import { Link } from 'react-router';
import { NavItem, Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <span className="wavy--shit">Ben Saphier</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          <Link to="/synth">SYNTH</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarComponent;
