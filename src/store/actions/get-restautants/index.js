import * as types from "../../action-types";
import AxiosCall from "../../../utils/axios";
import ErrorHandler from "../../../utils/error-handler";

export const get_Restaurants_Start = () => ({
  type: types.GET_RESTAURANTS_START,
});

export const get_Restaurants_Success = (payload) => ({
  type: types.GET_RESTAURANTS_SUCCESS,
  payload,
});

export const get_Restaurants_Fail = (payload) => ({
  type: types.GET_RESTAURANTS_FAIL,
  payload,
});

export const get_Restaurants_Cleanup = () => ({
  type: types.GET_RESTAURANTS_CLEANUP,
});

export const get_Restaurants_ = (query) => async (dispatch) => {
  let payload = "";
  if (
    (query.location !== null) &
    (query.cuisine !== null) &
    (query.location !== undefined) &
    (query.cuisine !== undefined)
  ) {
    payload = `cuisine=${query.cuisine}&location=${query.location}`;
  } else if (query.location !== null && query.location !== undefined) {
    payload = `location=${query.location}`;
  } else if (query.cuisine !== null && query.cuisine !== undefined) {
    payload = `cuisine=${query.cuisine}`;
  }

  try {
    dispatch(get_Restaurants_Start());
    const requestObj = {
      path: `restaurants?${payload}`,
      method: "GET",
    };
    const res = await AxiosCall(requestObj);
    // localStorage.setItem('authToken', res.data.token)
    dispatch(get_Restaurants_Success(res.data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(get_Restaurants_Fail(error));
  }
};
