import * as types from '../actions/actionTypes';

const initialState = {
  searchSuggestions: []
}

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_LOCATION:
      return {
        ...state,
        searchSuggestions: action.searchSuggestions
      }

    default:
      return state
  }
}
