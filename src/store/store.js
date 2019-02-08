import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import Sagas from './sagas';
import Reducers from './reducers';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export const store = createStore(
  Reducers(history),
  compose(
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(Sagas);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}
