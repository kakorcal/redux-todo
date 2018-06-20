export const setLoadingState = isLoading => {
  return {
    type: 'SET_LOADING_STATE',
    loading: isLoading
  };
};
