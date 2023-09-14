import test from 'ava';
import composeReducers from '../composeReducers';

test('composeReducers() combines reducers from right to left', (t) => {
  const ACTION_TYPE = 'ACTION_TYPE';
  const action = {
    type: ACTION_TYPE,
    payload: 1,
  };

  function reducerOne(state, action) {
    switch (action.type) {
      case ACTION_TYPE:
        return state + action.payload;
      default:
        return state;
    }
  }

  function reducerTwo(state, action) {
    switch (action.type) {
      case `not ${ACTION_TYPE}`:
        throw new Error();
      default:
        return state;
    }
  }

  function reducerThree(state, action) {
    switch (action.type) {
      case ACTION_TYPE:
        return state + action.payload;
      default:
        return state;
    }
  }

  const composedReducer = composeReducers(reducerThree, reducerTwo, reducerOne);

  t.true(composedReducer(0, action) === 2);
});
