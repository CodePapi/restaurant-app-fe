import * as types from "../../action-types";
import AxiosCall from "../../../utils/axios";
import ErrorHandler from "../../../utils/error-handler";

export const signUpStart = () => ({
  type: types.SIGNUP_START,
});

export const signUpSuccess = (payload) => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

export const signUpFail = (payload) => ({
  type: types.SIGNUP_FAIL,
  payload,
});

export const signUpCleanup = () => ({
  type: types.SIGNUP_CLEANUP,
});

export const signUp = (payload) => async (dispatch) => {
  try {
    dispatch(signUpStart());
    const requestObj = {
      path: "auth/signup",
      method: "POST",
      data: payload,
    };
    const res = await AxiosCall(requestObj);
    dispatch(signUpSuccess(res));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(signUpFail(error));
  }
};
