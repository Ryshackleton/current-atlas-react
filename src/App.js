import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Header>Header</Header>
        </Row>
        <Row className="show-grid">
          <Col xsHidden smHidden md={4} lg={4}>SideBar</Col>
          <Col xs={12} sm={12} md={8} lg={8}>Main Content</Col>
        </Row>
        <Row>
          <Footer>Footer</Footer>
        </Row>
      </Grid>
    );
  }
}

export default App;
