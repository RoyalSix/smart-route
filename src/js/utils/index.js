import train_icon from './train_icon.svg';
import scooter_icon from './scooter_icon.svg';
import walk_icon from './walk_icon.svg';

export function getLineColorFromType(transportationType) {
  switch (transportationType) {
    case 'train': return 'orange';
    case 'scooter': return 'green';
    case 'walk': return 'cyan';
  }
}

export function getIconFromType(transportationType) {
  switch (transportationType) {
    case 'train': return 'orange';
    case 'scooter': return 'green';
    case 'walk': return 'cyan';
  }
}

export function lineIsAtWayPoint(linePoint, routes) {
  const {latitude, longitude} = linePoint;
  // const latitudeNumber = parseFloat(latitude).toFixed(5);
  // const longitudeNumber = parseFloat(longitude).toFixed(5);
  for (var index in routes) {
    const route = routes[index];
    const {latitude: routeLatitude, longitude: routeLongitude} = route;
    console.log(Math.abs(latitude - routeLatitude), Math.abs(longitude - routeLongitude));
    if (Math.abs(latitude - routeLatitude) <= .0001 &&
      Math.abs(longitude - routeLongitude) <= .0001) {
      return parseInt(index);
    }
  }
}