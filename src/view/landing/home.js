import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

class home extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
      <div style={{paddingTop: '15px'}}>
        <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        zoom={9}
        style={style}
        initialCenter={{ lat: -8.5906453, lng: 117.4769463 }}>
        <Marker
          onClick={this.onMarkerClick}
          name={'Lombok Timur'}
          position={{lat: -8.5906453, lng: 116.4569463}}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAk_1N7U7PP6-0zhP7oGy7juddF91MfgLk')
})(home)