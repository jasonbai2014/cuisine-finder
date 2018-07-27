import { combineReducers } from 'redux';
import Locations from './locationReducer';
import Restaurants from './restaurantReducer';

const rootReducer = combineReducers({
  Locations,
  Restaurants,
});

export default rootReducer;
