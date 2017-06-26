import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LeafletMap from './LeafletMap/LeafletMap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor()
  {
    super();
  }
  render()
  {
    return (
      <Router>
        <Grid fluid>
          <Row>
            <Header>Header</Header>
          </Row>
          <Row className="show-grid">
            <Col xsHidden smHidden md={4} lg={4}>SideBar</Col>
            <Col id='map-outer-container' xs={12} sm={12} md={8} lg={8}>
              <div id="map-container" className="container-fluid">
                <Switch>
                  {/* jump to default view */}
                  <Route exact={true} path="/" component={LeafletMap}/>
                  {/* jump to specific view based on path */}
                  <Route exact={true} path="/view/:lat/:lng/:zoom" render={
                    ({match}) => (
                      <LeafletMap
                        lat={match.params.lat}
                        lng={match.params.lng}
                        zoom={match.params.zoom}
                      >viewmap</LeafletMap>
                    )}
                  />
                  <Route component={BadRoute}/>
                </Switch>
              </div>
            </Col>
          </Row>
          <Row>
            <Footer>Footer</Footer>
          </Row>
        </Grid>
      </Router>
    );
  }
}
    // return this.props.history.push(`/view/${viewport.center[0]}/${viewport.center[1]}/${viewport.zoom}/`);

const BadRoute = ({ location }) => (
    <div>
      <h3>Bad path for <code>{location.pathname}</code></h3>
      <h4>Format: /view/latitude/longitude/zoomLevel </h4>
    </div>
    );

export default App;
