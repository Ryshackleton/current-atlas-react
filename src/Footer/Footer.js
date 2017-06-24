/**
 * Created by ryshackleton on 6/23/17.
 */
import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <Navbar fluid fixedBottom>
          <Nav pullRight>
            <NavItem eventKey={3} href="mailto:ryan.shackleton@gmail.com">Contact</NavItem>
          </Nav>
        </Navbar>
    );
  }
}

export default Footer;
