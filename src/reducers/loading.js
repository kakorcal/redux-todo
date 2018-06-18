export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_LOAD':
      return state ? false : true;
    default:
      return state;
  }
}
