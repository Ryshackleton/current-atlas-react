import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LeafletMap from './LeafletMap/LeafletMap';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Header>Header</Header>
        </Row>
        <Row className="show-grid">
          <Col xsHidden smHidden md={4} lg={4}>SideBar</Col>
          <Col id='map-outer-container' xs={12} sm={12} md={8} lg={8} >
            <div id="map-container" className="container-fluid">
              <LeafletMap>Hello Map</LeafletMap>
            </div>
          </Col>
        </Row>
        <Row>
          <Footer>Footer</Footer>
        </Row>
      </Grid>
    );
  }
}

export default App;
