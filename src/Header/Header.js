/**
 * Created by ryshackleton on 6/22/17.
 */
import React, { Component } from 'react';
import { Nav, Navbar, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <Navbar fluid inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" className="simple-text">Current Atlas</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Data Sources</NavItem>
          </Nav>
          {/*<Nav pullRight>*/}
            {/*<NavDropdown eventKey={3} title="" id="basic-nav-dropdown">*/}
              {/*<MenuItem eventKey={3.1}><a href="/about">About</a></MenuItem>*/}
              {/*<MenuItem eventKey={3.2}>Data Sources</MenuItem>*/}
              {/*<MenuItem divider />*/}
              {/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
            {/*</NavDropdown>*/}
          {/*</Nav>*/}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

