/**
 * Created by ryshackleton on 6/24/17.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer, LayersControl } from 'react-leaflet';
import './LeafletMap.css';

class LeafletMap extends Component {
  constructor(props)
  {
    super(props);
    this.state = Object.assign({
      lat:  0,
      lng: 20,
      zoom: 2,
    }, props);
  }
  render() {
    return (
      <Map
        center={[+this.state.lat, +this.state.lng]}
        zoom={+this.state.zoom}
        useFlyTo={true}
        animate={true}
        onViewportChanged={this.props.onViewportChanged}
        >
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
  componentWillReceiveProps(nextProps){
    if( this.state.lat === nextProps.lat
      && this.state.lng === nextProps.lng
      && this.state.zoom === nextProps.zoom ) {
    }
    else
    {
      this.state.lat = nextProps.lat;
      this.state.lng = nextProps.lng;
      this.state.zoom = nextProps.zoom;
    }
  }
}

export default LeafletMap;

