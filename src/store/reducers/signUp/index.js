import * as types from '../../action-types';
import {signUp as initialState } from "../../initialState";

const signUp = (state=initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_START:
      return {
        ...state,
        isLoading: true
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload
      };
    case types.SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.SIGNUP_CLEANUP:
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

export default signUp;
