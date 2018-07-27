import { combineReducers } from 'redux';
import Locations from './locationReducer';
import Restaurants from './restaurantReducer';
import Error from './errorReducer';

const rootReducer = combineReducers({
  Locations,
  Restaurants,
  Error,
});

export default rootReducer;
