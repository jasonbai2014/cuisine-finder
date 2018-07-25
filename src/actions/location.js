import * as types from './types';

function fetchLocations(query) {
  return {
    type: types.FETCH_LOCATIONS,
    payload: query,
  };
}

function selectLocations(location) {
  return {
    type: types.SELECT_LOCATION,
    payload: location,
  };
}

function setLocations(locations) {
  return {
    type: types.SET_LOCATIONS,
    payload: locations,
  };
}

export default {
  fetchLocations,
  selectLocations,
  setLocations,
};
