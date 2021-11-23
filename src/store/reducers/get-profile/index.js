import * as types from '../../action-types';
import { getProfile as initialState } from "../../initialState";

const getProfile = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload
      };
    case types.GET_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_PROFILE_CLEANUP:
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

export default getProfile;
