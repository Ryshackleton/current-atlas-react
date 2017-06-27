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
                  {/* jump to default view -
                      note that in the render() function, we
                      pass history: a default prop from Route,
                      history gives access to the URL history,
                      which we can update with the current view path*/}
                  <Route exact={true} path="/"
                         render={
                           ({history}) => (
                             <LeafletMap
                               onViewportChanged={(v) => history.push(`/view/${v.center[0]}/${v.center[1]}/${v.zoom}`) }
                             >viewmap</LeafletMap>
                           )}
                  />
                  {/* jump to specific view based on path
                      note that in the render() function, we
                      pass match,history: both default props from Route,
                      history gives access to the URL history,
                      which we can update with the current view path
                      match contains the params from the path that we need to update */}
                  <Route exact={true} path="/view/:lat/:lng/:zoom" render={
                    ({match, history}) => (
                      <LeafletMap
                        lat={match.params.lat}
                        lng={match.params.lng}
                        zoom={match.params.zoom}
                        onViewportChanged={(v) => history.push(`/view/${v.center[0]}/${v.center[1]}/${v.zoom}`) }
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

const BadRoute = ({ location }) => (
    <div>
      <h3>Bad path for <code>{location.pathname}</code></h3>
      <h4>Format: /view/latitude/longitude/zoomLevel </h4>
    </div>
    );

export default App;
