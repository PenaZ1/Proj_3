import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const axios = require('axios');

export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {locations: [], locationSelect: 0};
    axios.get('/api/locations').then((res) => {
      this.setState({locations: res.data})
    }).catch((err) => {
        if (err) throw err
    });

  }

  render() {
    return (
      <div style={{ height: '553.25px', width: '553.25px' }}>
        <Map
          containerStyle={{ height: '553.25px', width: '553.25px' }}
          google={this.props.google}
          zoom={16}
          initialCenter={{
            lat: 34.9611583,
            lng: -89.8456639
          }}
        >
          {this.state.locations.map((key, index)=>{
            console.log("adf")
            return(
                <Marker
                name = {this.state.locations[index].name}
                position={{lat: this.state.locations[index].lat, lng: this.state.locations[index].lng}}
                />
              );
            })
          }
        </Map>
      </div >
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWLaIcCoVAa1a39sIec8Tli6uzfiiTJ9Q'
})(MapContainer);
