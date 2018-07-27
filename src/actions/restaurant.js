import * as types from './types';

function setRestaurants(restaurants) {
  return {
    type: types.SET_RESTAURANTS,
    payload: restaurants,
  };
}

export default {
  setRestaurants,
};
