# Current Atlas Leaflet
#### Work in progress!!!
### Basic Components constructed from react-bootstrap
#### Sidebar
Sidebar to eventually hold navigation to different viewports (just links to /view/lat/lng/zoom)
#### Header/Footer
Just [react-bootstrap](https://react-bootstrap.github.io/) navbars
#### Map
A basic leaflet map using [react-leaflet](https://github.com/PaulLeCam/react-leaflet)

#### Routing
Uses [react-router](https://reacttraining.com/react-router/) to allow the map view to be changed by the user by setting the latitude, longitude, and zoom level in the path:
#/view/lat/lng/zoom,
So, for example, to zoom to Seattle, try:
https://current-atlas-react.herokuapp.com/view/47.616614/-122.334540/11

Conversely, upon panning or zooming the map, the URL will update, so a user can pan/zoom to a location, bookmark or copy the URL to return to the same view.

### Other Tools
This project was bootstrapped using the excellent  React template: [Create React App](https://github.com/facebookincubator/create-react-app).

