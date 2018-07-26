import {
  call, put, takeLatest, cancelled,
} from 'redux-saga-effects';
import axios from 'axios';
import services from './services';
import * as types from '../actions/types';
import locationActionCreators from '../actions/location';

const cancelToken = axios.CancelToken;
const showError = process.env.NODE_ENV === 'development';

function* fetchLocations(action) {
  const tokenSrc = cancelToken.source();
  try {
    const response = yield call(services.fetchLocations, action.payload, tokenSrc.token);
    const locations = response ? response.data.location_suggestions.map(d => d.name) : [];
    yield put(locationActionCreators.setLocations(locations));
  } catch (error) {
    // TODO: add a popup to show error message
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
  try {
    const locationResponse = yield call(services.fetchLocationEntity, action.payload);
    if (locationResponse && locationResponse.data.location_suggestions.length > 0) {
      const type = locationResponse.data.location_suggestions[0].entity_type;
      const id = locationResponse.data.location_suggestions[0].entity_id;
      const detailResponse = yield call(services.fetchLocationDetail, id, type);
      // TODO: need to add an action creator to put cuisine info into the store
    }
  } catch (error) {
    // TODO: add a popup to show error message
    if (showError) console.log(error);
  }
}

export function* watchFetchLocationDetail() {
  yield takeLatest(types.SELECT_LOCATION, fetchLocationDetail);
}
