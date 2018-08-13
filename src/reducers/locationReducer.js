import * as types from '../actions/types';

export const locations = (state = [], action) => {
  switch (action.type) {
    case types.SET_LOCATIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export const cityCoords = (state = [0, 0], action) => {
  switch (action.type) {
    case types.SET_CITY_COORDS:
      return [...action.payload];
    default:
      return state;
  }
};
