import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getLocationsStart = () => ({
  type: types.GET_LOCATIONS_START
});

export const getLocationsSuccess = payload => ({
  type: types.GET_LOCATIONS_SUCCESS,
  payload
});

export const getLocationsFail = payload => ({
  type: types.GET_LOCATIONS_FAIL,
  payload
});

export const getLocationsCleanup = () => ({
  type: types.GET_LOCATIONS_CLEANUP
});

export const getLocations =()=> async dispatch => {
    
    try {
    dispatch(getLocationsStart());
    const requestObj = {
      path: `restaurants/locations`,
      method: "GET",
    }
    const  res  = await AxiosCall(requestObj);
    dispatch(getLocationsSuccess(res));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(getLocationsFail(error));
  }
}
