import * as types from '../actions/actionTypes';

const initialState = {
  userLocation: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CURRENT_LOCATION:
      return {
        ...state,
        userLocation: action.userLocation
      }

    default:
      return state
  }
}
