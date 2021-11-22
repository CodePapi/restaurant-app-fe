import { combineReducers } from 'redux';
import login from './login';
import signUp from "./signUp"
import getRestaurants from './get-restaurants';
import getCuisines from './get-cuisines';
import getLocations from './get-locations';

const rootReducer = combineReducers({
  login,
  signUp,
  getRestaurants,
  getCuisines,
  getLocations
});

export default rootReducer;