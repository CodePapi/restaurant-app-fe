import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getProfileStart = () => ({
  type: types.GET_PROFILE_START
});

export const getProfileSuccess = payload => ({
  type: types.GET_PROFILE_SUCCESS,
  payload
});

export const getProfileFail = payload => ({
  type: types.GET_PROFILE_FAIL,
  payload
});

export const getProfileCleanup = () => ({
  type: types.GET_PROFILE_CLEANUP
});

export const getProfile =()=> async dispatch => {
    
    try {
    dispatch(getProfileStart());
    const requestObj = {
      path: `auth/profile`,
      method: "GET",
    }
    const  res  = await AxiosCall(requestObj);
    dispatch(getProfileSuccess(res));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(getProfileFail(error));
  }
}
