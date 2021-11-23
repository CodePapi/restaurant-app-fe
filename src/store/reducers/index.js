import { combineReducers } from 'redux';
import login from './login';
import signUp from "./signUp"
import getRestaurants from './get-restaurants';
import getCuisines from './get-cuisines';
import getLocations from './get-locations';
import getProfile from './get-profile';
import book from './book-restaurant';
import getBookings from './get-booking';

const rootReducer = combineReducers({
  login,
  signUp,
  getRestaurants,
  getCuisines,
  getLocations,
  getProfile,
  book,
  getBookings
});

export default rootReducer;
