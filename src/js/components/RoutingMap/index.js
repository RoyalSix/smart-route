/*global H*/
import React, {Component} from 'react';
import {Container} from './styled';
import * as utils from '../../utils';
import dest_icon from './dest_icon.png';

export class RoutingMap extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.setMap = this.setMap.bind(this);
    this.platform = new H.service.Platform({
      'apikey': 'oJoZvCU0vs1cfOTzlU1TL8PJcUVyem2fKBvS1eHfh2k'
    });
    this.setRoute = this.setRoute.bind(this);
  }
  setRoute(result) {
    var route,
      routeShape;
    if (result.response.route) {
      route = result.response.route[0];
      routeShape = route.shape;

      var markers = [];
      var lines = [];
      for (var index in route.waypoint) {
        const point = route.waypoint[index];
        const position = point.mappedPosition;
        const png = utils.getIconFromType(this.props.routes[index].type);
        var icon = new H.map.Icon(png);
        if (index == this.props.routes.length - 1) {
          icon = new H.map.Icon(dest_icon);
        }
        markers.push(new H.map.Marker({
          lat: position.latitude,
          lng: position.longitude
        }, {icon}));

      }
      var linestring = new H.geo.LineString();
      var entireLineString = new H.geo.LineString();
      routeShape.forEach((point) => {
        var [latitude, longitude] = point.split(',');
        linestring.pushLatLngAlt(latitude, longitude);
        entireLineString.pushLatLngAlt(latitude, longitude);
        const matchedWayPointIndex = utils.lineIsAtWayPoint({latitude, longitude}, this.props.routes);
        if (matchedWayPointIndex) {
        const strokeColor = utils.getLineColorFromType(this.props.routes[matchedWayPointIndex].type);
        lines.push(new H.map.Polyline(linestring, {
          style: {strokeColor, lineWidth: 3}
        }));
        linestring = new H.geo.LineString();
      }
    });
    const entireLine = new H.map.Polyline(entireLineString, {
      style: {strokeColor: 'white', lineWidth: 1}
    });
    this.map.addObjects([...lines, ...markers]);
    this.map.getViewModel().setLookAtData({bounds: entireLine.getBoundingBox()});
    setTimeout(() => {
      this.map.setZoom(this.map.getZoom() + -0.4, true);
    }, 200);
  }
}

setMap(routes, center) {
  if (routes.length) {
    if (this.map) {
      const mapObjects = this.map.getObjects();
      mapObjects.forEach((obj) => {
        this.map.removeObject(obj);
      });
    } else {
      // Get the default map types from the platform object:
      var defaultLayers = this.platform.createDefaultLayers();
      // Instantiate the map:
      this.map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 14,
          center: {lat: center.latitude, lng: center.longitude}
        });
      new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    }

    var routingParameters = {
      'mode': 'fastest;car',
      'representation': 'display'
    };
    routes.forEach((route, index) => {
      routingParameters[`waypoint${index}`] = `geo!${route.latitude},${route.longitude}`;
    });

    var router = this.platform.getRoutingService();
    router.calculateRoute(routingParameters, this.setRoute,
      function(error) {
        alert(error.message);
      });
  }
}

componentDidMount() {
  const {routes, center} = this.props;
  this.setMap(routes, center);
}


componentDidUpdate() {
  const {routes, center} = this.props;
  this.setMap(routes, center);
}

render() {
  return (
    <Container id="mapContainer">
    </Container>
  );
}
}

export default RoutingMap;
