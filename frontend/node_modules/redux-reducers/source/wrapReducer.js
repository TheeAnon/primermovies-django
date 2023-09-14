import { ID_KEY } from './constants';

export default function wrapReducer(id, reducer) {
  return function wrappedReducer(state, action) {
    if (!action[ID_KEY] || action[ID_KEY] === id) {
      return reducer(state, action);
    }

    return state;
  }
}
