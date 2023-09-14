import test from 'ava';
import reduxMockStore from 'redux-mock-store';
import action from '../__fixtures__/flux-standard-action';
import wrapDispatch from '../wrapDispatch';
import { ID_KEY } from '../constants';


test('wrapDispatch() wraps dispatch and only dispatches actions with a target id', (t) => {
  const store = reduxMockStore()();
  const testId = 'id';

  const wrappedDispatch = wrapDispatch(store.dispatch, testId);
  wrappedDispatch(action);

  t.deepEqual(store.getActions(), [{
    ...action,
    [ID_KEY]: testId,
  }]);
});
