import * as types from "../../action-types";
import AxiosCall from "../../../utils/axios";
import ErrorHandler from "../../../utils/error-handler";

export const bookStart = () => ({
  type: types.BOOK_START,
});

export const bookSuccess = (payload) => ({
  type: types.BOOK_SUCCESS,
  payload,
});

export const bookFail = (payload) => ({
  type: types.BOOK_FAIL,
  payload,
});

export const bookCleanup = () => ({
  type: types.BOOK_CLEANUP,
});

export const book = (payload) => async (dispatch) => {
  try {
    dispatch(bookStart());
    const requestObj = {
      path: "booking",
      method: "POST",
      data: payload,
    };
    const res = await AxiosCall(requestObj);
    dispatch(bookSuccess(res));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(bookFail(error));
  }
};
