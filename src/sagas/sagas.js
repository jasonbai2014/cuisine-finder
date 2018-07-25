import { call, put, takeLatest } from 'redux-saga-effects';
import services from './services';
import * as types from '../actions/types';
import locationActionCreators from '../actions/location';

function* fetchLocations(action) {
  try {
    const response = yield call(services.fetchLocations, action.payload);
    const locations = response ? response.data.location_suggestions.map(d => d.name) : [];
    yield put(locationActionCreators.setLocations(locations));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFatchLocations() {
  yield takeLatest(types.FETCH_LOCATIONS, fetchLocations);
}
