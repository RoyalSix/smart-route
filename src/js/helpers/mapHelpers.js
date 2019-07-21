import ip from "ip";
import iplocation from "iplocation";

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