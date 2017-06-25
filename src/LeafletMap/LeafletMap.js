/**
 * Created by ryshackleton on 6/24/17.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer, LayersControl } from 'react-leaflet';
import './LeafletMap.css';

const position = [51.505, -0.09];
class LeafletMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 6,
    };
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <LayersControl position="topright" >
          <LayersControl.BaseLayer
            name="Oceans"
            checked={true}
            >
            <TileLayer
              url='https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}'
              attribution='Tiles &copy; Esri'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
              attribution='Tiles &copy; Esri'
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </Map>
    );
  }
}

export default LeafletMap;

