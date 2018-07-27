import * as types from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case types.SET_RESTAURANTS:
      return action.payload.map(res => ({
        cuisines: res.cuisines,
        address: res.address,
        lat: res.latitude,
        lon: res.longitude,
        menu_url: res.menu_url,
        name: res.name,
        photos_url: res.photos_url,
        rating: res.aggregate_rating,
        votes: res.votes,
      }));
    default:
      return state;
  }
}
