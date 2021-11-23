import * as types from '../../action-types';
import {book as initialState } from "../../initialState";

const book = (state=initialState, action) => {
  switch (action.type) {
    case types.BOOK_START:
      return {
        ...state,
        isLoading: true
      };
    case types.BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload
      };
    case types.BOOK_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.BOOK_CLEANUP:
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

export default book;
