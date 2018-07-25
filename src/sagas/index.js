import { fork } from 'redux-saga-effects';
import * as saga from './sagas';

export default function* () {
  yield [
    fork(saga.watchFatchLocations),
  ];
}
