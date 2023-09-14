export default function composeReducers(...reducers) {
  return function composedReducer(state, action) {
    return reducers
      .reverse()
      .reduce((newState, reducer) => {
        return reducer(newState, action);
      }, state);
  };
}
