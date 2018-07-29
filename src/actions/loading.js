import * as types from './types';

function setLoadingId(id) {
  return {
    type: types.SET_LOADING_ID,
    payload: id,
  };
}

function removeLoadingId(id) {
  return {
    type: types.REMOVE_LOADING_ID,
    payload: id,
  };
}

export default {
  setLoadingId,
  removeLoadingId,
};
