import * as types from './types';

function setErrorMessage(message) {
  return {
    type: types.SET_ERROR,
    payload: message,
  };
}

function clearErrorMessage() {
  return {
    type: types.CLEAR_ERROR,
  };
}

export default {
  setErrorMessage,
  clearErrorMessage,
};