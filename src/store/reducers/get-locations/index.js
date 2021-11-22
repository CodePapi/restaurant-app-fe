import * as types from '../../action-types';
import { getLocations as initialState } from "../../initialState";

const getLocations = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_LOCATIONS_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload
      };
    case types.GET_LOCATIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_LOCATIONS_CLEANUP:
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null
      };
    default:
      return state;
  }
}

export default getLocations;
