import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';

const middleware = [
  promiseMiddleware()
];

if (__DEV__) {
    const logger = require('redux-logger');

    middleware.push(logger());
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  undefined,
  enhancers(applyMiddleware(...middleware))
);
