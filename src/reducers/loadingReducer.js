import * as types from '../actions/types';

export default function (state = new Set(), action) {
  switch (action.type) {
    case types.SET_LOADING_ID: {
      const newSate = new Set(state);
      newSate.add(action.payload);
      return newSate;
    }
    case types.REMOVE_LOADING_ID: {
      const newState = new Set(state);
      newState.delete(action.payload);
      return newState;
    }
    default:
      return state;
  }
}
