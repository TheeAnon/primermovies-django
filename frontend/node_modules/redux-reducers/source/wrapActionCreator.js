import decorateAction from './decorateAction';

/**
 * @param {string|number|function} idCreator
 * @param {function} actionCreator
 * @returns {Object}
 */
export default function wrapActionCreator(idCreator, actionCreator) {
  return function wrappedActionCreator(...args) {
    const action = actionCreator(...args);

    return decorateAction(idCreator, action);
  }
}
