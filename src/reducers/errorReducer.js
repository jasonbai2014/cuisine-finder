import * as types from '../actions/types';

export default function (state = '', action) {
  switch (action.type) {
    case types.SET_ERROR:
      return action.payload;
    case types.CLEAR_ERROR:
      return '';
    default:
      return state;
  }
}
