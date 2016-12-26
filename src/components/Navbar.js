import React from 'react';
import { NavItem, Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">
          <span className="wavy--shit">Ben Saphier</span>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="synth">
          <span>Synth</span>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarComponent;
