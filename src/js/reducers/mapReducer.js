import * as types from '../actions/actionTypes';

const initialState = {
  searchSuggestions: [],
  originAddress: null,
  destAddress: null,
  destinationAddressSuggestions: []
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_LOCATION:
      return {
        ...state,
        searchSuggestions: action.searchSuggestions
      };
    case types.SET_ORIGIN:
      return {
        ...state,
        originAddress: action.originAddress
      };
    case types.SET_DESTINATION:
      return {
        ...state,
        destAddress: action.destAddress
      };
    case types.DESTINATION_ADDRESS_SEARCH:
      return {
        ...state,
        destinationAddressSuggestions: action.destinationAddressSuggestions
      };
    default:
      return state;
  }
};
