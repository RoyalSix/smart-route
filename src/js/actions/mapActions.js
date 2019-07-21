import * as types from './actionTypes';
import * as mapHelpers from '../helpers/mapHelpers';

export function getInitialLocation() {
  return async dispatch => {
    const userLocation = await mapHelpers.getCurrentLocation();
    dispatch({
      type: types.GET_CURRENT_LOCATION,
      userLocation
    });
  };
}


export function searchLocation(address) {
  return async dispatch => {
    const {suggestions} = await mapHelpers.getLocations(address);
    dispatch({
      type: types.SEARCH_LOCATION,
      searchSuggestions: suggestions || []
    });
  };
}

export function selectAddress(originAddress) {
  return async dispatch => {
    const originAddressCoors = await mapHelpers.getCoorFromAddress(originAddress);
    dispatch({
      type: types.SET_ORIGIN,
      originAddress: originAddressCoors
    });
  };
}

export function searchDestinationAddress(address) {
  return async dispatch => {
    const {suggestions} = await mapHelpers.getLocations(address);
    dispatch({
      type: types.DESTINATION_ADDRESS_SEARCH,
      destinationAddressSuggestions: suggestions || []
    });
  };
}