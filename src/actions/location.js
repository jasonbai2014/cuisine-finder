import * as types from './types';

function fetchLocations(query) {
  return {
    type: types.FETCH_LOCATIONS,
    payload: query,
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
  setLocations,
};
