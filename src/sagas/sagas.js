import {
  call, put, takeLatest, cancelled,
} from 'redux-saga-effects';
import axios from 'axios';
import services from './services';
import * as types from '../actions/types';
import locationActionCreators from '../actions/location';
import restaurantActionCreators from '../actions/restaurant';
import errorActionCreators from '../actions/error';
import loadingActionCreators from '../actions/loading';

const cancelToken = axios.CancelToken;
const showError = process.env.NODE_ENV === 'development';

function* fetchLocations(action) {
  const tokenSrc = cancelToken.source();
  try {
    const response = typeof action.payload === 'object' && action.payload.lat && action.payload.lon
      ? yield call(services.fetchLocations, tokenSrc.token, '', action.payload.lat, action.payload.lon)
      : yield call(services.fetchLocations, tokenSrc.token, action.payload);
    const locations = response ? response.data.location_suggestions.map(d => d.name) : [];
    yield put(locationActionCreators.setLocations(locations));
  } catch (error) {
    yield put(errorActionCreators.setErrorMessage('An error occurred when fetching locations.'));
    if (showError) console.log(error);
  } finally {
    if (yield cancelled()) {
      tokenSrc.cancel('fetch locations call cancelled');
    }
  }
}

export function* watchFetchLocations() {
  yield takeLatest(types.FETCH_LOCATIONS, fetchLocations);
}

function* fetchLocationDetail(action) {
  const loadingId = `fetchLocation-${Math.random()}`;
  try {
    yield put(loadingActionCreators.setLoadingId(loadingId));
    const locationResponse = yield call(services.fetchLocationEntity, action.payload);
    if (locationResponse && locationResponse.data.location_suggestions.length > 0) {
      const type = locationResponse.data.location_suggestions[0].entity_type;
      const id = locationResponse.data.location_suggestions[0].entity_id;
      const detailResponse = yield call(services.fetchLocationDetail, id, type);
      if (detailResponse) {
        const restaurants = detailResponse.data.best_rated_restaurant.map(res => ({
          cuisines: res.restaurant.cuisines,
          address: res.restaurant.location.address,
          lat: res.restaurant.location.latitude,
          lon: res.restaurant.location.longitude,
          menu_url: res.restaurant.menu_url,
          name: res.restaurant.name,
          photos_url: res.restaurant.photos_url,
          rating: res.restaurant.user_rating.aggregate_rating,
          votes: res.restaurant.user_rating.votes,
        }));
        yield put(restaurantActionCreators.setRestaurants(restaurants));
      }
    }
  } catch (error) {
    yield put(errorActionCreators.setErrorMessage('An error occurred when fetching restaurants.'));
    if (showError) console.log(error);
  } finally {
    yield put(loadingActionCreators.removeLoadingId(loadingId));
  }
}

export function* watchFetchLocationDetail() {
  yield takeLatest(types.SELECT_LOCATION, fetchLocationDetail);
}
