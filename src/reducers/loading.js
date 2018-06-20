export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case 'SET_LOADING_STATE':
      return action.loading;
    default:
      return state;
  }
}
