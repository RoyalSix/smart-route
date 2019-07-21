import train_icon from './train_icon.png';
import scooter_icon from './scooter_icon.png';
import walk_icon from './walk_icon.png';
import uber_icon from './uber_icon.png';

export function getLineColorFromType(transportationType) {
  switch (transportationType) {
    default:
    case 'train': return 'orange';
    case 'scooter': return 'green';
    case 'walk': return 'cyan';
  }
}

export function getIconFromType(transportationType) {
  switch (transportationType) {
    default:
    case 'train': return train_icon;
    case 'scooter': return scooter_icon;
    case 'walk': return walk_icon;
    case 'uber': return uber_icon;
  }
}

export function lineIsAtWayPoint(linePoint, routes) {
  const {latitude, longitude} = linePoint;
  // const latitudeNumber = parseFloat(latitude).toFixed(5);
  // const longitudeNumber = parseFloat(longitude).toFixed(5);
  for (var index in routes) {
    const route = routes[index];
    const {latitude: routeLatitude, longitude: routeLongitude} = route;
    if (Math.abs(latitude - routeLatitude) <= .0001 &&
      Math.abs(longitude - routeLongitude) <= .0001) {
      return parseInt(index);
    }
  }
}