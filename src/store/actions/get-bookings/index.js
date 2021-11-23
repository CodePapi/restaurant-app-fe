import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getBookingsStart = () => ({
  type: types.GET_MYBOOK_START
});

export const getBookingsSuccess = payload => ({
  type: types.GET_MYBOOK_SUCCESS,
  payload
});

export const getBookingsFail = payload => ({
  type: types.GET_MYBOOK_FAIL,
  payload
});

export const getBookingsCleanup = () => ({
  type: types.GET_MYBOOK_CLEANUP
});

export const getBookings =()=> async dispatch => {
    
    try {
    dispatch(getBookingsStart());
    const requestObj = {
      path: `booking`,
      method: "GET",
    }
    const  res  = await AxiosCall(requestObj);
    dispatch(getBookingsSuccess(res));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(getBookingsFail(error));
  }
}
