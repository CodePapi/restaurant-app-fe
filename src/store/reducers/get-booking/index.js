import * as types from '../../action-types';
import { getBookings as initialState } from "../../initialState";

const getBookings = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_MYBOOK_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_MYBOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload
      };
    case types.GET_MYBOOK_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_MYBOOK_CLEANUP:
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

export default getBookings;
