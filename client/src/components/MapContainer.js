import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <div style={{height: '400px', width: '400px'}}>
        <Map
          style={{height: '400px', width: '400px'}}
          google={this.props.google}
          zoom={16}
          initialCenter={{
           lat: -1.2884,
           lng: 36.8233
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWLaIcCoVAa1a39sIec8Tli6uzfiiTJ9Q'
})(MapContainer);
