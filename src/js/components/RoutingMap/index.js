/*global H*/
import React, {Component} from 'react'
import {Container} from './styled';
export class RoutingMap extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.setMap = this.setMap.bind(this)
  }
  setMap(latitude, longitude) {
    // if (latitude && longitude) {
    this.platform = new H.service.Platform({
      'apikey': 'oJoZvCU0vs1cfOTzlU1TL8PJcUVyem2fKBvS1eHfh2k'
    });
    var defaultLayers = this.platform.createDefaultLayers();
    var map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: {lat: 52.51, lng: 13.4}
      });
    // Create the parameters for the geocoding request:
    var geocodingParams = {
      searchText: '200 S Mathilda Ave, Sunnyvale, CA'
    };

    var onResult = function(result) {
      var locations = result.Response.View[0].Result,
        position,
        marker;
      // Add a marker for each location found
      for (var i = 0; i < locations.length; i++) {
        position = {
          lat: locations[i].Location.DisplayPosition.Latitude,
          lng: locations[i].Location.DisplayPosition.Longitude
        };
        marker = new H.map.Marker(position);
        map.addObject(marker);
      }
    };
    new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    var geocoder = this.platform.getGeocodingService();
    geocoder.geocode(geocodingParams, onResult, function(e) {
      alert(e);
    });
    // }
  }

  componentDidUpdate() {
    const {latitude, longitude} = this.props;
    this.setMap(latitude, longitude)
  }

  render() {
    return (
      <Container id="mapContainer">
      </Container>
    )
  }
}

export default RoutingMap
