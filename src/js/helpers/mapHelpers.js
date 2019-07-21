import ip from "ip";
import iplocation from "iplocation";
import * as fetchHelpers from './fetchHelpers';
const HERE_API_URL = 'http://autocomplete.geocoder.api.here.com/6.2/suggest.json'

export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
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
  return new Promise((resolve, reject) => {
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
    fetchHelpers.makeRequest(HERE_API_URL, payload)
      .setMethod('GET')
      .send()
      .then(resolve)
      .catch(reject)
  });
}