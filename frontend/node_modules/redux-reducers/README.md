# redux-reducers [![CircleCI](https://circleci.com/gh/casparrolfe/redux-reducers.svg?style=svg)](https://circleci.com/gh/casparrolfe/redux-reducers)

Unobtrusive reusable redux reducers

## WARNING

Experimental - do not use in production.

## Usage

Given the following action creator and reducer:

```js
function add(payload) {
  return {
    type: 'ADD',
    payload
  };
}

add(1) // { type: 'ADD', payload: 1 }

function addReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default:
      return state;
  }
}

```

### `wrapActionCreator(idCreator, actionCreator)`

```js
import { wrapActionCreator } from 'redux-reducers';

const wrappedAdd = wrapActionCreator('target ID', add);

wrappedAdd(1) // creates an action that will only be targeted by wrapped reducers
```

### `wrapReducer(idCreator, reducer)`

```js
import { createStore, combineReducers } from 'redux';
import { wrapReducer, wrapActionCreator } from 'redux-reducers';

const reducer = combineReducers({
  one: wrapReducer('target ID', addReducer),
  two: wrapReducer('two', addReducer),
});

const store = createStore(reducer);

const wrappedAdd = wrapActionCreator('target ID', add);

store.dispatch(wrappedAdd(1));

store.getState(); // { one: 1, two: 0 }
```

### `wrapDispatch(dispatch, idCreator)`

```js
import { createStore } from 'redux';
import { wrapDispatch } from 'redux-reducers';

const store = createStore(reducer);

const dispatchToMyTarget = wrapDispatch(store.dispatch, 'my target');

dispatchToMyTarget(action); // action that will be picked up by reducers that target that id
```

### idCreator

`idCreator` can be a string, number or a function, where the function is
of the form:

```js
idCreator(action) {
  return action.meta.id;
}
```

### `composeReducers(reducers)`

Compose reducers from right to left.

```js
const action = {
  type: ACTION_TYPE,
  payload: 1,
};

function reducerOne(state = 0, action) {
  switch (action.type) {
    case ACTION_TYPE:
      return state + action.payload;
    default:
      return state;
  }
}

function reducerTwo(state = 0, action) {
  switch (action.type) {
    case ACTION_TYPE:
      return state + action.payload;
    default:
      return state;
  }
}

const composedReducer = composeReducers(reducerThree, reducerTwo);

composedReducer(0, action); // 2
```
