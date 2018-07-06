import { SET_LOADING_STATE } from '../actionTypes';

export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case SET_LOADING_STATE:
      return action.loading;
    default:
      return state;
  }
}
