import * as types from './actionTypes';
import * as mapHelpers from '../helpers/mapHelpers';

export function getInitialLocation() {
  return async dispatch => {
    const userLocation = await mapHelpers.getCurrentLocation();
    dispatch({
      type: types.GET_CURRENT_LOCATION,
      userLocation
    })
  }
}