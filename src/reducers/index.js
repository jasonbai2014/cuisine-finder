import { combineReducers } from 'redux';
import { locations as Locations, cityCoords as CityCoords } from './locationReducer';
import Restaurants from './restaurantReducer';
import Error from './errorReducer';
import Loading from './loadingReducer';

const rootReducer = combineReducers({
  Locations,
  CityCoords,
  Restaurants,
  Error,
  Loading,
});

export default rootReducer;
