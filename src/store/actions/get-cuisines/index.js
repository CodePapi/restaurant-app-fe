import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getCuisinesStart = () => ({
  type: types.GET_CUISINES_START
});

export const getCuisinesSuccess = payload => ({
  type: types.GET_CUISINES_SUCCESS,
  payload
});

export const getCuisinesFail = payload => ({
  type: types.GET_CUISINES_FAIL,
  payload
});

export const getCuisinesCleanup = () => ({
  type: types.GET_CUISINES_CLEANUP
});

export const getCuisines =()=> async dispatch => {
    
    try {
    dispatch(getCuisinesStart());
    const requestObj = {
      path: `restaurants/cuisines`,
      method: "GET",
    }
    const  res  = await AxiosCall(requestObj);
    dispatch(getCuisinesSuccess(res));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(getCuisinesFail(error));
  }
}
