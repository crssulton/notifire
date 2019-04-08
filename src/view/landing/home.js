import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Spinner from 'react-spinner-material';

class home extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker  : {},
      selectedPlace : {},
      loading       : true
    }
    setTimeout(() => {
      this.setState({
         loading: false,
      })
    }, 1000)
  }

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

  componentWillUnmount (){
    setTimeout(() => {
      this.setState({
         loading: false,
      })
    }, 400)
  }

  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    let data;
    if (this.state.loading) {
      data = 
      <div className="container" style={{paddingLeft: '50%', paddingRight: '50%', paddingTop: '250px', paddingBottom: '250px'}}>
        <Spinner size={50} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
      </div>
    } else {
      data = 
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
            position={{lat: -8.5906453, lng: 116.4569463}}/>
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    }
    return (
      <div>
        {data}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAk_1N7U7PP6-0zhP7oGy7juddF91MfgLk')
})(home)