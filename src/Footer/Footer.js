/**
 * Created by ryshackleton on 6/23/17.
 */
import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <Navbar id="footer" fluid fixedBottom>
            <a className="navbar-right" href="mailto: ryan.shackleton@gmail.com">Contact</a>
        </Navbar>
    );
  }
}

export default Footer;
