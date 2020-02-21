import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <div style={{ height: '400px', width: '400px' }}>
        <Map
          containerStyle={{ height: '400px', width: '400px' }}
          style={{ height: '400px', width: '400px' }}
          google={this.props.google}
          zoom={16}
          initialCenter={{
            lat: 34.9611583,
            lng: -89.8456639
          }}
        />
      </div >
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWLaIcCoVAa1a39sIec8Tli6uzfiiTJ9Q'
})(MapContainer);
