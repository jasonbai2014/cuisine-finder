import * as types from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case types.SET_RESTAURANTS:
      return action.payload.map(res => ({
        cuisines: res.cuisines,
        address: res.address,
        lat: res.lat,
        lon: res.lon,
        menu_url: res.menu_url,
        name: res.name,
        photos_url: res.photos_url,
        rating: res.rating,
        votes: res.votes,
      }));
    default:
      return state;
  }
}
