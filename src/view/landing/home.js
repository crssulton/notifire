import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Spinner from 'react-spinner-material';
import firebase from 'firebase';
import api from './../../img/apinya.png';

class home extends Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      dataUser          : [],
      showingInfoWindow : false,
      activeMarker      : {},
      selectedPlace     : {},
      loading           : true,
    }
    this.dataUser = firebase.database().ref().child("user");
    this.dataAlat = firebase.database().ref().child("alat");
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

  componentDidMount() {
    this._isMounted = true
    if(this._isMounted){  
      const self = this
      self.dataAlat.on('value', isi => {
        self.dataUser.on('value', snapshot => {
          var datanya = [];
          snapshot.forEach(element => {
              var tampung = [];
              if(element.val().level === 2){
                var dataq; var tamdevice = [];
                dataq               = element.val();
                dataq['.key']       = element.key;
  
                for(var i = 1; i <= dataq.device.jumlah; i++){
                  if(i === 1){
                    self.dataAlat.child(dataq.device.device_1).on('value', isi => {
                      if (isi.val().power === 1){ tamdevice.push(isi.val());}
                    });
                  } else if(i === 2){
                    self.dataAlat.child(dataq.device.device_2).on('value', isi => {
                      if (isi.val().power === 1){ tamdevice.push(isi.val());}
                    });
                  } else if(i === 3){
                    self.dataAlat.child(dataq.device.device_3).on('value', isi => {
                      if (isi.val().power === 1){ tamdevice.push(isi.val());}
                    });
                  } else if(i === 4){
                    self.dataAlat.child(dataq.device.device_4).on('value', isi => {
                      if (isi.val().power === 1){ tamdevice.push(isi.val());}
                    });
                  }
                }
  
                tampung['username'] = dataq['.key'];
                tampung['nama']     = dataq.nama;
                tampung['level']    = dataq.level;
                tampung['password'] = dataq.password;
                tampung['alamat']   = dataq.alamat;
                tampung['device']   = tamdevice;
                datanya.push(tampung);
              }
          });
          self.setState({dataUser: datanya});
        });
      });
      setTimeout(() => {
        this.setState({
           loading: false,
        })
      }, 1000)
    }
  }

  componentWillUnmount() {
    this.dataUser.off();
    this.dataAlat.off();
    this._isMounted = false;
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
          {
            this.state.dataUser.map((adm) => {
              return (
                adm.device.map((isi) => {
                  if(isi.situasi === 1){
                    return (
                      <Marker
                        onClick={this.onMarkerClick}
                        name={adm.nama}
                        title={isi.alamat}
                        icon= {api}
                        position={{lat: isi.lokasi.lat, lng: isi.lokasi.long}}/>
                    )
                  } else if(isi.situasi === 2){
                    return (
                      <Marker
                        onClick={this.onMarkerClick}
                        name={adm.nama}
                        title={isi.alamat}
                        icon= {api}
                        animation= {this.props.google.maps.Animation.BOUNCE}
                        position={{lat: isi.lokasi.lat, lng: isi.lokasi.long}}/>
                    )
                  }
                })
              )
            })
          }
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}>
            <div>              
              <div className="card">
                <h6 className="card-header">{this.state.selectedPlace.name}</h6>
                <div className="card-body">
                  {this.state.selectedPlace.title}
                </div>
              </div>
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