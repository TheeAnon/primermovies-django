import test from 'ava';
import decorateAction from '../decorateAction';
import action from '../__fixtures__/flux-standard-action';
import { ID_KEY } from '../constants';

test('decorateAction() should decorate the action with the id when idCreator is a string', (t) => {
  const decoratedAction = decorateAction('id', action);

  t.deepEqual(decoratedAction, {
    ...action,
    [ID_KEY]: 'id',
  });
});

test('decorateAction() should decorate the action with the id when idCreator is a number', (t) => {
  const decoratedAction = decorateAction(0, action);

  t.deepEqual(decoratedAction, {
    ...action,
    [ID_KEY]: 0,
  });
});

test('decorateAction() should decorate the action with the id when idCreator is a function ' +
  'mapping from the action to the id', (t) => {
  function mapActionToId(action) {
    return action.payload.a;
  }

  const decoratedAction = decorateAction(mapActionToId, action);

  t.deepEqual(decoratedAction, {
    ...action,
    [ID_KEY]: action.payload.a,
  });
});

test('decorateAction() should throw an error when the idCreator type is invalid', (t) => {
  t.throws(() => decorateAction({}, action));
});
