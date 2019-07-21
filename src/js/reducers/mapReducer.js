import * as types from '../actions/actionTypes';

const initialState = {
  searchSuggestions: [],
  originAddress: null
}

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_LOCATION:
      return {
        ...state,
        searchSuggestions: action.searchSuggestions
      }
    case types.SET_ORIGIN:
      return {
        ...state,
        originAddress: action.originAddress
      }

    default:
      return state
  }
}
