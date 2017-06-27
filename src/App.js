import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LeafletMap from './LeafletMap/LeafletMap';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render()
  {
    return (
      <Router>
        <Grid fluid>
          <Row>
            <Header>Header</Header>
          </Row>
          <Row className="show-grid">
            <Col xsHidden smHidden md={2} lg={2}>
              <ul>
                <li><a href="/view/20/0/2"><Panel title='World'><h4>World</h4></Panel></a></li>
                <li><a href="/view/49.095452162534826/17.490234375000004/4"><Panel><h4>Europe</h4></Panel></a></li>
                <li><a href="/view/37.92686760148135/-98.525390625/4"><Panel><h4>USA</h4></Panel></a></li>
                <li><a href="/view/47.5820839916191/-122.3272705078125/10"><Panel><h4>Seattle</h4></Panel></a></li>
                <li><a href="/view/37.76420119453826/-122.32452392578126/9"><Panel><h4>San Francisco</h4></Panel></a></li>
              </ul>
            </Col>
            <Col id='map-outer-container' xs={12} sm={12} md={10} lg={10}>
              <div id="map-container" className="container-fluid">
                 {/*Look for these routes, defaults to last Route in the Switch*/}
                <Switch>
                  {/* redirect to a valid default view {lat:20,lng:0,zoom:2}*/}
                  <Route exact={true}
                         path="/"
                         render={() => (
                           <Redirect to={{ pathname: '/view/20/0/2' }} />
                           )}
                  />
                  {/* capture latitude, longitude, zoom from the path and render appropriately */}
                  <Route exact={true}
                         path="/view/:lat/:lng/:zoom"
                         component={LeafletMapRender}
                  />
                  {/* capture default to BadRoute if no other route is found */}
                  <Route component={BadRoute} />
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

/** jump to specific view based on path
  note that in the render() function, we
  pass match,history: both default props from Route,
  history gives access to the URL history,
  which we can update with the current view path
  match contains the params from the path that we need to update
  @param match - match from the route containing the params corresponding to /view/:lat/:lng/:zoom
  @param history - history from the route, captured so we can push the current view to the browser history
  todo: validate route params (passing in strings is possible and breaks the map)
*/
const LeafletMapRender = ({ match, history }) => (
  <LeafletMap
    lat={match.params.lat}
    lng={match.params.lng}
    zoom={match.params.zoom}
    onViewportChanged={(v) => history.push(`/view/${v.center[0]}/${v.center[1]}/${v.zoom}`) }
  >viewmap</LeafletMap>
);

/**
 * Returns a message when an incorrect route is received
 * @param location from Route, contains the current Route path so we can tell the user what's wrong
 */
const BadRoute = ({ location }) => (
    <div>
      <h3>Bad path for <code>{location.pathname}</code></h3>
      <h4>Format: /view/latitude/longitude/zoomLevel </h4>
    </div>
    );

export default App;
