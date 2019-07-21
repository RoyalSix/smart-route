import ip from "ip";
import iplocation from "iplocation";
import * as fetchHelpers from './fetchHelpers';

export function getCurrentLocation() {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        resolve({latitude, longitude});
      });
    } else {
      getLocationFromIP().then(resolve);
    }
  })
}

export function getLocationFromIP() {
  return new Promise((resolve) => {
    const _ip = ip.address();
    iplocation(_ip).then(resolve);
  })
}

export function getLocations(address) {
  return new Promise((resolve, reject) => {
    const payload = {
      app_id: 'Kig3MRMv9Gr16jDGZCRs',
      app_code: 'W7QbBZ7LWkW_NSCsxmU2xQ',
      query: address
    }
    fetchHelpers.makeRequest('https://autocomplete.geocoder.api.here.com/6.2/suggest.json', payload)
      .setMethod('GET')
      .send()
      .then(resolve)
      .catch(reject)
  });
}

export function getDirections(address) {
  return new Promise((resolve, reject) => {
    const payload = {
      app_id: 'Kig3MRMv9Gr16jDGZCRs',
      app_code: 'W7QbBZ7LWkW_NSCsxmU2xQ',
      waypoint0: 'geo!,13.4'
    }
    fetchHelpers.makeRequest('https://route.api.here.com/routing/7.2/calculateroute.json', payload)
      .setMethod('GET')
      .send()
      .then(resolve)
      .catch(reject)
  });
}

export function getCoorFromAddress(locationId) {
  return new Promise((resolve, reject) => {
    const payload = {
      app_id: 'Kig3MRMv9Gr16jDGZCRs',
      app_code: 'W7QbBZ7LWkW_NSCsxmU2xQ',
      locationId
    }
    fetchHelpers.makeRequest('https://geocoder.api.here.com/6.2/geocode.json', payload)
      .setMethod('GET')
      .send()
      .then((res) => {
        if (res.Response && res.Response.View.length) {
          const Result = res.Response.View[0].Result;
          const {Latitude: latitude, Longitude: longitude} = Result[0].Location.DisplayPosition;
          resolve(latitude, longitude);
        }
      })
      .catch(reject)
  });
}