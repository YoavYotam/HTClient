import React, { Component } from "react";
import "../App.css";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import food from '../assets/Location_Icons/png/Food_1.png'
// import event from '../assets/Location_Icons/png/Flag_8.png'
var foodIcon = L.icon({
  iconUrl: require('../assets/Food_5.png'),
   iconSize: [25, 41],
  iconAnchor: [12 / 5.41],
  popupAnchor: [0, -41]
});
var eventIcon = L.icon({
  iconUrl: require('../assets/Infos_4.png'),
   iconSize: [25, 41],
  iconAnchor: [12 / 5.41],
  popupAnchor: [0, -41]
});

class MapHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      label: [
        {
          _id: "5e1c2f1e5d37ac2fe4f90225",
          name: "fruit market",
          type: "foo",
          location: { lat: 31.252495, lon: 34.794088 },
          __v: 0
        }
      ]
    };
  }
  componentDidMount(){
    this.connectionHandler(this.props.route);
  }


  componentWillReceiveProps(props) {
    this.connectionHandler(props.route);
  }

  connectionHandler = (route) => {
    fetch(route)
      .then(response => {
        return response.json();
      })
      .then(label => {
        this.setState({ label: label });
      });
  };

  handleIcons = (type)=>{
    if(type ==="food")
      return foodIcon
    else
      return eventIcon

  }

  render() {
    const { label } = this.state;
    return (
      <Map
        className="map"
        center={{ lat: 31.252495, lon: 34.794088 }}
        zoom={14}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {label.map(marker => {
          return (
            <Marker position={marker.location} icon={this.handleIcons(marker.type)}>
              <Popup>
                {marker.type} <br /> {marker.name}
              </Popup>
            </Marker>
          );
        })}
      </Map>
    );
  }
}

export default MapHandler;
