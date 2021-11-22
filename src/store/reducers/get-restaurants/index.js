import * as types from '../../action-types';
import { getRestaurants as initialState } from "../../initialState";

const getRestaurants = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_RESTAURANTS_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload
      };
    case types.GET_RESTAURANTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_RESTAURANTS_CLEANUP:
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

export default getRestaurants;
