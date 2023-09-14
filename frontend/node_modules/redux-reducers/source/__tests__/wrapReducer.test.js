import test from 'ava';
import { createStore, combineReducers } from 'redux';
import wrapReducer from '../wrapReducer';
import wrapActionCreator from '../wrapActionCreator';

function identityActionCreator(type) {
  return function(payload) {
    return {
      type,
      payload,
    };
  };
}

const ADD = 'ADD';
const add = identityActionCreator(ADD);

const SUBTRACT = 'SUBTRACT';
const subtract = identityActionCreator(SUBTRACT);

function reducer(state = 0, action) {
  switch (action.type) {
    case ADD:
      return state + action.payload;
    case SUBTRACT:
      return state - action.payload;
    default:
      return state;
  }
}

test('the test reducer correctly handles test actions', (t) => {
  t.plan(2);

  const stateAfterAdd = reducer(0, add(1));
  const stateAfterSubtract = reducer(0, subtract(1));

  t.true(stateAfterAdd === 1);
  t.true(stateAfterSubtract === -1);
});

test('wrapped reducers only react to actions that are associated to them' , (t) => {
  t.plan(1);

  const combinedReducers = combineReducers({
    reducerOne: wrapReducer('one', reducer),
    reducerTwo: wrapReducer('two', reducer),
  });

  const wrappedAddActionCreator = wrapActionCreator('one', add);

  const store = createStore(combinedReducers);

  store.dispatch(wrappedAddActionCreator(1));

  t.deepEqual(store.getState(), {
    reducerOne: 1,
    reducerTwo: 0,
  });
});
