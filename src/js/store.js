/* globals window */
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'
import * as reducers from './reducers/';

const enhancers = [];
const middleware = [
  thunk
];

if (typeof window !== 'undefined') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
  middleware.push(createLogger({}));
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const appReducer = combineReducers({
  ...reducers,
  router: routerReducer
});

const store = createStore(
  appReducer,
  composedEnhancers
);

export default store;
