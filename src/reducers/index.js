import { combineReducers } from 'redux';
import Locations from './locationReducer';
import Restaurants from './restaurantReducer';
import Error from './errorReducer';
import Loading from './loadingReducer';

const rootReducer = combineReducers({
  Locations,
  Restaurants,
  Error,
  Loading,
});

export default rootReducer;
