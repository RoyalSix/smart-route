/*global H*/
import React, {Component} from 'react';
import {Container} from './styled';
export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.setMap = this.setMap.bind(this);
    this.platform = new H.service.Platform({
      'apikey': 'oJoZvCU0vs1cfOTzlU1TL8PJcUVyem2fKBvS1eHfh2k'
    });
  }
  setMap(latitude, longitude) {
    if (latitude && longitude) {
      if (this.map) {
        this.map.setCenter({lat: latitude, lng: longitude});
      } else {
        var defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(
          document.getElementById('mapContainer'),
          defaultLayers.vector.normal.map,
          {
            zoom: 18,
            center: {lat: latitude, lng: longitude}
          });
        new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
      }
    }
  }

  componentDidUpdate() {
    const {latitude, longitude} = this.props;
    debugger;
    this.setMap(latitude, longitude);
  }

  render() {
    return (
      <Container id="mapContainer">
      </Container>
    );
  }
}

export default Map;
