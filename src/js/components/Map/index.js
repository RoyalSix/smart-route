import React, {Component} from 'react'
/*global H*/
export class Map extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // Obtain the default map types from the platform object:
    this.platform = new H.service.Platform({
      'apikey': 'oJoZvCU0vs1cfOTzlU1TL8PJcUVyem2fKBvS1eHfh2k'
    });
    var defaultLayers = this.platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: {lat: 52.5, lng: 13.4}
      });
      debugger;
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  }

  render() {
    return (
      <div style={{
        width:'100vw',
        height: '100vw'
      }} id="mapContainer">
      </div >
    )
  }
}

export default Map
