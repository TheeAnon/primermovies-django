import decorateAction from './decorateAction';

/**
 * @param {function} dispatch
 * @param {string|number|function} idCreator
 * @returns {function}
 */
export default function wrapDispatch(dispatch, idCreator) {
  return function wrappedDispatch(action) {
    dispatch(decorateAction(idCreator, action));
  };
}
