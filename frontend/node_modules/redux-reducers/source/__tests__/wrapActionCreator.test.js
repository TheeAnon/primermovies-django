import test from 'ava';
import wrapActionCreator from '../wrapActionCreator';
import { ID_KEY } from '../constants';

function testActionCreator() {
  return {
    type: 'TYPE',
    payload: { a: 1 },
    meta: { b: 1 },
  };
}

test('wrapped actions creators create actions with target reducer ID' +
  'when idCreator is a string', (t) => {
  const testID = 'test id';

  const originalAction = testActionCreator();
  const wrappedAction = wrapActionCreator(testID, testActionCreator)();

  t.deepEqual(wrappedAction, {
    ...originalAction,
    [ID_KEY]: testID,
  });
});

test('wrapped actions creators create actions with target reducer ID' +
  'when idCreator is a string', (t) => {
  const testID = 0;

  const originalAction = testActionCreator();
  const wrappedAction = wrapActionCreator(testID, testActionCreator)();

  t.deepEqual(wrappedAction, {
    ...originalAction,
    [ID_KEY]: testID,
  });
});

test('wrapped actions creators create actions with target reducer ID' +
  'when idCreator is a function', (t) => {
  function idCreator(action) {
    return action.payload.a;
  }

  const originalAction = testActionCreator();
  const wrappedAction = wrapActionCreator(idCreator, testActionCreator)();

  t.deepEqual(wrappedAction, {
    ...originalAction,
    [ID_KEY]: originalAction.payload.a,
  });
});
