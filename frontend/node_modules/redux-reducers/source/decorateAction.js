import { ID_KEY } from './constants';

/**
 * @param {string|number|function} idCreator
 * @param {Object} action
 * @returns {Object}
 */
function mapActionToId(idCreator, action) {
  if (typeof idCreator === 'string' || typeof idCreator === 'number') {
    return idCreator;
  }

  if (typeof idCreator === 'function') {
    return idCreator(action);
  }

  throw new Error('Incompatible value passed to idCreator');
}

/**
 * @param {string|number|function} idCreator
 * @param {Object} action
 * @returns {Object}
 */
export default function decorateAction(idCreator, action) {
  return {
    ...action,
    [ID_KEY]: mapActionToId(idCreator, action),
  };
}
