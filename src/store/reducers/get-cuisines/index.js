import * as types from '../../action-types';
import { getCuisines as initialState } from "../../initialState";

const getCuisines = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_CUISINES_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_CUISINES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload
      };
    case types.GET_CUISINES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_CUISINES_CLEANUP:
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

export default getCuisines;
